import { Request, Response } from "express";
import prisma from "../prisma";

const repository = prisma.pet;

export const createPet = async (req: Request, res: Response) => {
  try {
    const { nome, tipo, raca, genero } = req.body;
    const { id } = req.params;

    const pet = await repository.create({
      data: {
        nome,
        tipo,
        raca,
        genero,
        clienteId: Number(id),
      },
    });

    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar um novo pet" });
  }
};

// Rota para obter todos os pets
export const getAllPetsByClient = async (req: Request, res: Response) => {
  try {
    // Obtenha todos os pets do banco de dados
    const pets = await repository.findMany({
      where: { clienteId: Number(req.params.id) },
    });

    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter todos os pets" });
  }
};

// Rota para atualizar um pet pelo ID
export const updatePetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, tipo, raca, genero } = req.body;

    // Encontre o pet pelo ID no banco de dados e atualize seus dados
    const updatedPet = await repository.update({
      where: { id: Number(id) },
      data: { nome, tipo, raca, genero },
    });

    if (!updatedPet) {
      return res.status(404).json({ error: "Pet não encontrado" });
    }

    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o pet pelo ID" });
  }
};

// Rota para excluir um pet pelo ID
export const deletePetById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Encontre o pet pelo ID no banco de dados e exclua-o
    const deletedPet = await repository.delete({ where: { id: Number(id) } });

    if (!deletedPet) {
      return res.status(404).json({ error: "Pet não encontrado" });
    }

    res.status(200).json({ message: "Pet excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o pet pelo ID" });
  }
};
