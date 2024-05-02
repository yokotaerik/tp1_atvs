import { useState } from "react";
import api from "../utils/api";

export interface Cliente {
  id: number | null;
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
    const res = await fetch("http://localhost:32831/cliente/clientes").then(
      (res) => res.json()
    );
    console.log(res);
    return res;
  };

  const listarUm = async (id: number) => {
    const res = await fetch(`http://localhost:32831/cliente/${id}`).then(
      (res) => res.json()
    );
    console.log(res);
    return res;
  };

  const cadastrar = (cliente: Cliente) => {
    fetch("/cliente/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao cadastrar cliente: ${response.status}`);
      }
      console.log("Cliente cadastrado com sucesso.");
    });
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
