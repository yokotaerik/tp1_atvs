import { Request, Response } from "express";
import prisma from "../prisma";

const repository = prisma.servico;

export const createServico = async (req: Request, res: Response) => {
  try {
    const { nome, tipo, raca, valor } = req.body;

    const servico = await repository.create({
      data: {
        nome,
        valor,
        raca,
        tipo,
      },
    });

    res.status(201).json(servico);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar um novo serviço" });
  }
};

// Rota para obter todos os serviços
export const getAllServicos = async (req: Request, res: Response) => {
  try {
    // Obtenha todos os serviços do banco de dados
    const servicos = await repository.findMany();

    res.status(200).json(servicos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter todos os serviços" });
  }
};

// Rota para atualizar um serviço pelo ID
export const updateServicoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, tipo, raca, valor } = req.body;

    // Encontre o serviço pelo ID no banco de dados e atualize seus dados
    const updatedServico = await repository.update({
      where: { id: Number(id) },
      data: { nome, tipo, raca, valor },
    });

    if (!updatedServico) {
      return res.status(404).json({ error: "Serviço não encontrado" });
    }

    res.status(200).json(updatedServico);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o serviço pelo ID" });
  }
};

// Rota para excluir um serviço pelo ID
export const deleteServicoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Encontre o serviço pelo ID no banco de dados e exclua-o
    const deletedServico = await repository.delete({
      where: { id: Number(id) },
    });

    if (!deletedServico) {
      return res.status(404).json({ error: "Serviço não encontrado" });
    }

    res.status(200).json({ message: "Serviço excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o serviço pelo ID" });
  }
};
