import { useEffect, useState } from "react";
import Layout from "../../componentes/layout";
import api from "../../utils/api";
import { ClienteCompletoProps } from "../../utils/interfaces";

const Clientes = () => {
  const [clientes, setClientes] = useState<ClienteCompletoProps[]>([]);

  const fetchClientes = async () => {
    const response = await api.get("/cliente/clientes");
    setClientes(response.data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleDelete = async (id: number) => {
    const response = await api.delete(`/cliente/deletar/${id}`);
    try {
      if (response.status === 200) {
        alert("Cliente deletado com sucesso");
        fetchClientes();
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar cliente");
    }
  }

  return (
    <Layout>
      <div className="flex flex-col gap-5 my-10">
        <h1 className="text-center text-7xl font-bold ">Clientes</h1>
        <a href="/clientes/cadastrar">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded w-full shadow-md">
            Cadastrar novo cliente
          </button>
        </a>
      </div>
      <div className="gap-5 flex flex-col">
        {clientes.map((cliente) => (
          <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md">
            <p className="">ID: {cliente.id}</p>
            <p className="">Nome: {cliente.nome}</p>
            <p className="">Nome social: {cliente.nomeSocial}</p>
            <p className="">CPF: {cliente.cpf.valor}</p>
            <div className="flex gap-2">
              <a href={`/clientes/${cliente.id}`}>
                <button className="bg-blue-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                  Detalhes
                </button>
              </a>
              <a href={`/clientes/editar/${cliente.id}`}>
                <button className="bg-blue-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                  Editar
                </button>
              </a>
              <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded" onClick={() => handleDelete(cliente.id)}>
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Clientes;
