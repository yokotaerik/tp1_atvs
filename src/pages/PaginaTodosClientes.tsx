import React, { useEffect, useState } from "react";
import useCliente, { Cliente } from "../hooks/useCliente";
import ListaDeClientes from "../components/clienteCard";
import ClienteCard from "../components/clienteCard";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";

const TodosClientes = () => {
  const { listarTodos } = useCliente();
  const [clientes, setClientes] = useState<Cliente[]>([]);


  const fetchClientes = async () => {
    const clientesData = await listarTodos();
    setClientes(clientesData);
  };


  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <Layout>
        
      <h1 className="text-center text-4xl text-white">Lista de Clientes</h1>  
      {clientes.length > 0 && clientes.map((cliente) => <ClienteCard expandido={false} cliente={cliente} deletou={fetchClientes}/>)}
    </Layout>
  );
};

export default TodosClientes;
