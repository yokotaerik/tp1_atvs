import prisma from "../prisma";
import { Request, Response } from "express";

export const getMelhoresConsumidoresPorValor = async (
  req: Request,
  res: Response
) => {
  try {
    const melhoresConsumidores = await prisma.cliente.findMany({
      orderBy: {
        valorConsumido: "desc",
      },
      include: {
        cpf: true,
      },
    });

    res.status(200).json(melhoresConsumidores);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os melhores consumidores" });
  }
};

export const getMelhoresConsumidoresPorQuantidade = async (
  req: Request,
  res: Response
) => {
  try {
    const melhoresConsumidores = await prisma.cliente.findMany({
      orderBy: {
        vezesConsumida: "desc",
      },
      include: {
        cpf: true,
      },
    });

    res.status(200).json(melhoresConsumidores);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os melhores consumidores" });
  }
};

export const getProdutosMaisConsumidos = async (
  req: Request,
  res: Response
) => {
  try {
    const produtos = await prisma.produto.findMany({
      orderBy: {
        vezesConsumidas: "desc",
      },
    });

    res.status(200).json(produtos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao obter os produtos mais consumidos" });
  }
};

export const getServicosMaisConsumidos = async (
  req: Request,
  res: Response
) => {
  try {
    const servicos = await prisma.servico.findMany({
      orderBy: {
        vezesConsumidas: "desc",
      },
    });

    res.status(200).json(servicos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao obter os servicos mais consumidos" });
  }
};
