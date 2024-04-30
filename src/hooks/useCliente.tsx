import { useState } from "react";
import api from "../utils/api";

export interface Cliente {
  id: number;
  nome: string;
  nomeSocial: string;
  email: string;
  endereco: Endereco;
  telefones: Telefone[];
}

export interface Endereco {
  id: number;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  codigoPostal: string;
  informacoesAdicionais: string;
}

export interface Telefone {
  id: number;
  numero: string;
  ddd: string;
}

const useCliente = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const listarTodos = async () => {
    const clientes = await api.get("/cliente/clientes");
    return clientes.data;
  };

  const listarUm = (id: number) => {
    const cliente = api.get(`/cliente/${id}`);
  };

  const cadastrar = (cliente: Cliente) => {
    api.post("/cliente/cadastrar", cliente);
  };

  const editar = (id: number, cliente: Cliente) => {
    api.put("/cliente/atualizar", cliente);
  };

  const excluir = (id: number) => {
    const cliente = api.delete(`/cliente/excluir`, { data: { id } });
  };

  return {
    clientes,
    listarTodos,
    listarUm,
    cadastrar,
    editar,
    excluir,
  };
};

export default useCliente;
