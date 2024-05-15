import api from "../utils/api";
import { CriarCliente } from "../pages/clienteFormulario";
import { EditarCliente } from "../pages/formularioEditarCliente";

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

  const cadastrar = (cliente: CriarCliente) => {
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
    });
  };

  const editar = async (id: number, cliente: EditarCliente) => {
    const response = await api.put("/cliente/atualizar", cliente);
    if (response.status === 200) {
      alert("Editado com sucesso");
    } else {
      alert("Erro ao editar");
    }
  };

  const excluir = async (id: number) => {
    const res = await api.delete(`/cliente/excluir`, { data: { id } });
    if(res.status === 200){
      alert("Excluido com sucesso")
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
