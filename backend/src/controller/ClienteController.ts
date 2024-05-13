import { Request, Response } from "express";
import prisma from "../prisma";
import ClienteService from "../services/ClienteService";

const clienteService = new ClienteService();
export class ClienteController {
  private repository = prisma.cliente;

  public getAllClientes = async (req: Request, res: Response) => {
    try {
      const clientes = await this.repository.findMany({
        include: {
          cpf: true,
        },
      });

      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter todos os clientes" });
    }
  };

  public getClientById = async (req: Request, res: Response) => {
    try {
      const cliente = await this.repository.findUnique({
        where: { id: Number(req.params.id) },
        include: {
          cpf: true,
          rgs: true,
          telefones: true,
          pets: true,
          produtosConsumidos: {
            include: {
              produto: true,
            },
          },
        },
      });

      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter o cliente pelo ID" });
    }
  };

  public createCliente = async (req: Request, res: Response) => {
    try {
      const { nome, nomeSocial, cpf, cpfDataEmissao, rgs, telefones } =
        req.body;

      if (
        !nome ||
        !cpf ||
        !cpfDataEmissao ||
        !nomeSocial ||
        !rgs ||
        !telefones
      ) {
        return res.status(400).json({ error: "Campos inválidos" });
      }

      const cliente = await this.repository.create({
        data: {
          nome,
          nomeSocial,
          dataCadastro: new Date(),
        },
      });

      await this.adicionarCPF(cliente.id, cpf, cpfDataEmissao);

      if (telefones.length > 0) {
        telefones.forEach(async (telefone: any) => {
          await this.adicionarTelefone(
            cliente.id,
            telefone.ddd,
            telefone.numero
          );
        });
      }

      if (rgs.length > 0) {
        rgs.forEach(async (rg: any) => {
          console.log(rg);
          await this.adicionarRG(cliente.id, rg.valor, rg.dataEmissao);
        });
      }

      res.status(201).json(cliente);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao criar um novo cliente" });
    }
  };

  public updateCliente = async (req: Request, res: Response) => {
    try {
      const { nome, nomeSocial, rgs, telefones } = req.body;

      if (!nome || !nomeSocial || !rgs || !telefones) {
        return res.status(400).json({ error: "Campos inválidos" });
      }

      const id = Number(req.params.id);

      // Atualiza os dados básicos do cliente
      const clienteAtualizado = await this.repository.update({
        where: { id },
        data: {
          nome,
          nomeSocial,
        },
      });

      // Remove todos os telefones antigos do cliente
      await this.repository.update({
        where: { id },
        data: {
          telefones: {
            deleteMany: {},
          },
        },
      });

      // Adiciona os novos telefones
      for (const telefone of telefones) {
        await this.adicionarTelefone(id, telefone.ddd, telefone.numero);
      }

      // Adiciona os novos RGs
      for (const rg of rgs) {
        await this.adicionarRG(id, rg.valor, rg.dataEmissao);
      }

      res.status(200).json(clienteAtualizado);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao atualizar o cliente" });
    }
  };

  private async adicionarTelefone(
    clienteId: number,
    ddd: string,
    numero: string
  ) {
    try {
      const novoTelefone = await prisma.telefone.create({
        data: {
          ddd: ddd,
          numero: numero,
          cliente: { connect: { id: clienteId } },
        },
      });
      return novoTelefone;
    } catch (error) {
      throw error;
    }
  }

  private async adicionarRG(
    clienteId: number,
    valor: string,
    dataEmissao: string
  ) {
    try {
      // Converter a string de data para um objeto Date
      const dataEmissaoDate = new Date(dataEmissao);

      const novoRG = await prisma.rG.create({
        data: {
          dataEmissao: dataEmissaoDate, // Usar a data convertida
          valor,
          cliente: { connect: { id: clienteId } },
        },
      });
      return novoRG;
    } catch (error) {
      throw error;
    }
  }

  private async adicionarCPF(
    clienteId: number,
    valor: string,
    dataEmissao: string
  ) {
    try {
      // Converter a string de data para um objeto Date

      // a data chega 2024-02-01
      // pq o new Date não converte?

      console.log(dataEmissao);

      const dataEmissaoDate = new Date(dataEmissao);

      const novoCPF = await prisma.cPF.create({
        data: {
          valor,
          cliente: { connect: { id: clienteId } },
          dataEmissao: dataEmissaoDate, // Usar a data convertida
        },
      });
      return novoCPF;
    } catch (error) {
      throw error;
    }
  }

  async consumirProduto(req: Request, res: Response) {
    const clienteId = Number(req.body.clienteId);
    const produtoId = Number(req.body.produtoId);
    const qnt = Number(req.body.quantidade);

    try {
      const cliente = await prisma.cliente.findUnique({
        where: { id: clienteId },
        include: { produtosConsumidos: true }, // Inclui os produtos consumidos atualmente pelo cliente
      });

      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }

      let produtosConsumidos = [];

      // Verifica se o cliente já consumiu o produto
      const produtoCliente = await prisma.clienteProduto.findFirst({
        where: {
          clienteId,
          produtoId,
        },
      });

      if (produtoCliente) {
        const novaQuantidade = (produtoCliente.quantidadeDeVezes += qnt);
        const produtoConsumido = await prisma.clienteProduto.update({
          where: { id: produtoCliente.id },
          data: {
            quantidadeDeVezes: novaQuantidade,
          },
        });
        res.status(200).json(produtoConsumido);
      } else {
        const novoProdutoConsumido = await prisma.clienteProduto.create({
          data: {
            clienteId,
            produtoId,
            quantidadeDeVezes: qnt,
          },
        });

        res.status(200).json(novoProdutoConsumido);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao consumir o produto" });
    }
  }

  public async consumirServico(req: Request, res: Response) {
    const { clienteId, servicoId } = req.body;
    try {
      clienteService.consumirServico(clienteId, servicoId);
      return res.status(200).json({ message: "servico consumido com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao consumir servico" });
    }
  }

  public async deletarCliente(req: Request, res: Response) {
    try {
      const clienteId = Number(req.params.id);

      await prisma.telefone.deleteMany({
        where: { clienteId },
      });

      // Em seguida, exclua os RGs associados ao cliente
      await prisma.rG.deleteMany({
        where: { clienteId },
      });

      // Depois, exclua os CPFs associados ao cliente
      await prisma.cPF.deleteMany({
        where: { clienteId },
      });

      // Finalmente, exclua o cliente
      await prisma.cliente.delete({
        where: { id: clienteId },
      });

      return res.status(200).json({ message: "Cliente deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro ao deletar cliente" });
    }
  }
}
