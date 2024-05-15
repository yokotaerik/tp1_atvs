import { Request, Response } from "express";
import prisma from "../prisma";

const repository = prisma.produto;

export const createProduto = async (req: Request, res: Response) => {
  try {
    const { nome, tipo, raca, valor } = req.body;

    const produto = await repository.create({
      data: {
        nome,
        valor,
        raca,
        tipo,
      },
    });

    res.status(201).json(produto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar um novo produto" });
  }
};

// Rota para obter todos os produtos
export const getAllProdutos = async (req: Request, res: Response) => {
  try {
    // Obtenha todos os produtos do banco de dados
    const produtos = await repository.findMany();

    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter todos os produtos" });
  }
};

export const getProdutoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const produto = await repository.findUnique({
      where: { id: Number(id) },
    });

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.status(200).json(produto);
  } catch {
    res.status(500).json({ error: "Erro ao obter o produto pelo ID" });
  }
};

// Rota para atualizar um produto pelo ID
export const updateProdutoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, tipo, raca, valor } = req.body;

    // Encontre o produto pelo ID no banco de dados e atualize seus dados
    const updatedProduto = await repository.update({
      where: { id: Number(id) },
      data: { nome, tipo, raca, valor},
    });

    if (!updatedProduto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.status(200).json(updatedProduto);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Erro ao atualizar o produto pelo ID" });
  }
};

// Rota para excluir um produto pelo ID
export const deleteProdutoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Encontre o produto pelo ID no banco de dados e exclua-o
    const deletedProduto = await repository.delete({
      where: { id: Number(id) },
    });

    if (!deletedProduto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.status(200).json({ message: "Produto excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o produto pelo ID" });
  }
};
