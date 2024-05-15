import React, { useEffect, useState } from "react";
import useCliente, { Cliente } from "../hooks/useCliente";
import ClienteCard from "../components/clienteCard";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";

const TodosClientes = () => {
  const { listarTodos } = useCliente();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const nav = useNavigate();

  const fetchClientes = async () => {
    const clientesData = await listarTodos();
    setClientes(clientesData);
  };


  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <Layout>
      <h1 className="text-center text-4xl text-black font-bold">Lista de todos os clientes</h1>
      <button
        className="bg-green-900 py-2 px-3 rounded-md text-white"
        onClick={() => nav("/cadastro")}
      >Adicionar novo cliente</button>
      {clientes.length > 0 && clientes.map((cliente) => <ClienteCard expandido={false} cliente={cliente} deletou={fetchClientes} />)}
    </Layout>
  );
};

export default TodosClientes;
