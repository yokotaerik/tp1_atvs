import express, { Request, Response } from "express";
import {
  createProduto,
  deleteProdutoById,
  getAllProdutos,
  getProdutoById,
  updateProdutoById,
} from "./controller/ProdutoController";
import {
  createServico,
  deleteServicoById,
  getAllServicos,
  getServicoById,
  updateServicoById,
} from "./controller/ServicoController";
import {
  createPet,
  deletePetById,
  getPetById,
  updatePetById,
} from "./controller/PetController";
import { ClienteController } from "./controller/ClienteController";
import { getMelhoresConsumidoresPorQuantidade, getMelhoresConsumidoresPorValor, getProdutosMaisConsumidos, getServicosMaisConsumidos } from "./controller/GerenciamentoController";

const router = express.Router();

const clienteController = new ClienteController();

// Cliente
router.post("/cliente/cadastrar", clienteController.createCliente);
router.post("/cliente/editar/:id", clienteController.updateCliente);
router.get("/cliente/achar/:id", clienteController.getClientById);
router.get("/cliente/clientes", clienteController.getAllClientes);
router.delete("/cliente/deletar/:id", clienteController.deletarCliente);
router.post("/consumir/produto", clienteController.consumirProduto);
router.post("/consumir/servico", clienteController.consumirServico);
//Pets
router.get("/pet/:id", getPetById);
router.post("/cliente/:id/pet", createPet);
router.delete("/pet/:id", deletePetById);
router.put("/pet/:id", updatePetById);
// Produtos
router.get("/produto/produtos", getAllProdutos);
router.get("/produto/achar/:id", getProdutoById);
router.post("/produto/cadastrar", createProduto);
router.put("/produto/:id", updateProdutoById);
router.delete("/produto/:id", deleteProdutoById);
// Servicos
router.get("/servico/servicos", getAllServicos);
router.get("/servico/achar/:id", getServicoById);
router.post("/servico/cadastrar", createServico);
router.put("/servico/:id", updateServicoById);
router.delete("/servico/:id", deleteServicoById);
// Gerenciamento
router.get(
  "/gerenciamento/melhoresConsumidoresPorValor",
  getMelhoresConsumidoresPorValor
);
router.get(
  "/gerenciamento/melhoresConsumidoresPorQuantidade",
  getMelhoresConsumidoresPorQuantidade
)
router.get(
  "/gerenciamento/produtosMaisConsumidos",
  getProdutosMaisConsumidos
)
router.get(
  "/gerenciamento/servicosMaisConsumidos",
  getServicosMaisConsumidos
)

export default router;
