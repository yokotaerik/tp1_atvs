import express, { Request, Response } from "express";
import {
  createProduto,
  deleteProdutoById,
  getAllProdutos,
  updateProdutoById,
} from "./controller/ProdutoController";
import {
  createServico,
  deleteServicoById,
  getAllServicos,
  updateServicoById,
} from "./controller/ServicoController";
import { createPet, deletePetById } from "./controller/PetController";
import { ClienteController } from "./controller/ClienteController";

const router = express.Router();

const clienteController = new ClienteController();

// Cliente
router.post("/cliente/cadastrar", clienteController.createCliente);
router.post("/cliente/editar/:id", clienteController.createCliente);
router.get("/cliente/:id", clienteController.getClientById);
router.get("/cliente/clientes", clienteController.getAllClientes);
router.post("/consumir/produto", clienteController.consumirProduto);
router.post("/consumir/servico", clienteController.consumirServico);
//Pets
router.post("/cliente/:id/pet", createPet);
router.delete("/pet/:id", deletePetById);
router.put("/pet/:id", deletePetById);
// Produtos
router.get("/produto/produtos", getAllProdutos);
router.post("/produto/produtos", createProduto);
router.put("/produto/:id", updateProdutoById);
router.delete("/produto/:id", deleteProdutoById);
// Servicos
router.get("/servico/servicos", getAllServicos);
router.post("/servico/servicos", createServico);
router.put("/servico/:id", updateServicoById);
router.delete("/servico/:id", deleteServicoById);

export default router;
