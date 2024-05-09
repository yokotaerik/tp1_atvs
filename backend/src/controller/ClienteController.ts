import { Request, Response } from "express";
import prisma from "../prisma";
import ClienteService from "../services/ClienteService";

export class ClienteController {
  private repository = prisma.cliente;
  private clienteService = new ClienteService();

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
        },
      });

      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter o cliente pelo ID" });
    }
  };

  public createCliente = async (req: Request, res: Response) => {
    try {
      const { nome, nomeSocial, cpf, rgs, telefones } = req.body;

      const cliente = await this.repository.create({
        data: {
          nome,
          nomeSocial,
          dataCadastro: new Date(),
        },
      });

      telefones.forEach(async (telefone: any) => {
        await this.adicionarTelefone(cliente.id, telefone.ddd, telefone.numero);
      });

      rgs.forEach(async (rg: any) => {
        await this.adicionarRG(cliente.id, rg.valor, rg.dataEmissao);
      });

      await this.adicionarCPF(cliente.id, cpf.valor, cpf.dataEmissao);

      res.status(201).json(cliente);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar um novo cliente" });
    }
  };

  public updateCliente = async (req: Request, res: Response) => {
    try {
      const { nome, nomeSocial, cpf, rgs, telefones } = req.body;

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

      // Remove todos os RGs antigos do cliente
      await this.repository.update({
        where: { id },
        data: {
          rgs: {
            deleteMany: {},
          },
        },
      });

      // Adiciona os novos RGs
      for (const rg of rgs) {
        await this.adicionarRG(id, rg.valor, rg.dataEmissao);
      }

      // Atualiza o CPF do cliente
      await this.adicionarCPF(id, cpf.valor, cpf.dataEmissao);

      res.status(200).json(clienteAtualizado);
    } catch (error) {
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

  public async consumirProduto(req: Request, res: Response) {
    const { clienteId, produtoId } = req.body;
    try {
      this.clienteService.consumirProduto(clienteId, produtoId);
      return res.status(200).json({ message: "Produto consumido com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao consumir produto" });
    }
  }

  public async consumirServico(req: Request, res: Response) {
    const { clienteId, servicoId } = req.body;
    try {
      this.clienteService.consumirServico(clienteId, servicoId);
      return res.status(200).json({ message: "servico consumido com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao consumir servico" });
    }
  }
}
