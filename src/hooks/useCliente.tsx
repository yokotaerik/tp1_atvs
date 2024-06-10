import api from "../utils/api";
import { CriarCliente } from "../pages/clienteFormulario";
import { EditarCliente } from "../pages/formularioEditarCliente";
import { useNavigate } from "react-router-dom";

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
  let nav = useNavigate();

  const listarTodos = async () => {
    try {
      const res = await fetch("http://localhost:32831/cliente/clientes").then(
        (res) => res.json()
      );
      console.log(res);
      return res;
    } catch (error) {
      alert("Erro ao listar todos os clientes");
    }
  };

  const listarUm = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:32831/cliente/${id}`).then(
        (res) => res.json()
      );
      console.log(res);
      return res;
    } catch (error) {
      alert("Erro ao listar o cliente");
    }
  };

  const cadastrar = (cliente: CriarCliente) => {
    try {
      fetch("http://localhost:32831/cliente/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao cadastrar cliente: ${response.status}`);
        }
        alert("Cliente cadastrado com sucesso.");
        nav("/");
      });
    } catch (error) {
      alert("Erro ao cadastrar o cliente");
    }
  };

  const editar = async (id: number, cliente: EditarCliente) => {
    try {
      const response = await api.put("/cliente/atualizar", cliente);
      if (response.status === 200) {
        alert("Editado com sucesso");
        nav("/");
      } else {
        alert("Erro ao editar");
      }
    } catch (error) {
      alert("Erro ao editar o cliente");
    }
  };

  const excluir = async (id: number) => {
    try {
      const res = await api.delete(`/cliente/excluir`, { data: { id } });
      if (res.status === 200) {
        alert("Excluído com sucesso");
      }
    } catch (error) {
      alert("Erro ao excluir o cliente");
    }
  };

  return {
    listarTodos,
    listarUm,
    cadastrar,
    editar,
    excluir,
  };
};

export default useCliente;
