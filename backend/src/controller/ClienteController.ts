import { Request, Response } from "express";
import prisma from "../prisma";
import { ClienteService } from "../services/ClienteService";

const clienteService = new ClienteService();
export class ClienteController {
  public getAllClientes = async (req: Request, res: Response) => {
    try {
      const clientes = await clienteService.getAllClientes();

      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter todos os clientes" });
    }
  };

  public getClientById = async (req: Request, res: Response) => {
    try {
      const cliente = await clienteService.findClienteById(
        Number(req.params.id)
      );

      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }

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

      clienteService.createCliente(
        nome,
        nomeSocial,
        cpf,
        cpfDataEmissao,
        rgs,
        telefones
      );

      res.status(201).json("Cliente criado com sucesso");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao criar um novo cliente" });
    }
  };

  public updateCliente = async (req: Request, res: Response) => {
    try {
      const { nome, nomeSocial, rgs, telefones } = req.body;
      const id = Number(req.params.id);

      if (!nome || !nomeSocial || !rgs || !telefones) {
        return res.status(400).json({ error: "Campos inválidos" });
      }

      clienteService.updateCliente(nome, nomeSocial, rgs, telefones, id);

      res.status(200).json("Cliente atualizado com sucesso");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao atualizar o cliente" });
    }
  };

  public async consumirProduto(req: Request, res: Response) {
    const clienteId = Number(req.body.clienteId);
    const produtoId = Number(req.body.produtoId);
    const qnt = Number(req.body.quantidade);

    if (!clienteId || !produtoId || !qnt) {
      return res.status(400).json({ error: "Campos inválidos" });
    }

    try {
      const cliente = await prisma.cliente.findUnique({
        where: { id: clienteId },
        include: { produtosConsumidos: true }, // Inclui os produtos consumidos atualmente pelo cliente
      });

      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }

      // Verifica se o cliente já consumiu o produto
      const produtoCliente = await prisma.clienteProduto.findFirst({
        where: {
          clienteId,
          produtoId,
        },
      });

      const produto = await prisma.produto.update({
        where: { id: produtoId },
        data: {
          vezesConsumidas: {
            increment: qnt,
          },
        },
      });

      if (produto) {
        await prisma.cliente.update({
          where: { id: clienteId },
          data: {
            valorConsumido: {
              increment: produto?.valor * qnt,
            },

            vezesConsumida: {
              increment: qnt,
            },
          },
        });
      }

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

    if (!clienteId || !servicoId) {
      return res.status(400).json({ error: "Parametros inválidos" });
    }

    try {
      const cliente = await prisma.cliente.findUnique({
        where: { id: clienteId },
        include: { servicosConsumidos: true }, // Inclui os produtos consumidos atualmente pelo cliente
      });

      if (!cliente) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }

      let produtosConsumidos = [];

      // Verifica se o cliente já consumiu o produto
      const servicoCliente = await prisma.clienteServico.findFirst({
        where: {
          clienteId,
          servicoId,
        },
      });

      const servico = await prisma.servico.update({
        where: { id: servicoId },
        data: {
          vezesConsumidas: {
            increment: 1,
          },
        },
      });

      if (servico) {
        await prisma.cliente.update({
          where: { id: clienteId },
          data: {
            valorConsumido: {
              increment: servico?.valor,
            },

            vezesConsumida: {
              increment: 1,
            },
          },
        });
      } else {
        throw new Error("Serviço não encontrado");
      }

      if (servicoCliente) {
        const novaQuantidade = (servicoCliente.quantidadeDeVezes += 1);
        const servicoConsumido = await prisma.clienteProduto.update({
          where: { id: servicoCliente.id },
          data: {
            quantidadeDeVezes: novaQuantidade,
          },
        });
        res.status(200).json(servicoConsumido);
      } else {
        const novoServicoConsumido = await prisma.clienteServico.create({
          data: {
            clienteId,
            servicoId,
            quantidadeDeVezes: 1,
          },
        });

        res.status(200).json(novoServicoConsumido);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro ao consumir servico" });
    }
  }

  public async deletarCliente(req: Request, res: Response) {
    try {
      const clienteId = Number(req.params.id);

      clienteService.deletarCliente(clienteId);

      return res.status(200).json({ message: "Cliente deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro ao deletar cliente" });
    }
  }
}
