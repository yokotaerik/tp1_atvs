import React, { useEffect, useState } from "react";
import useCliente, { Cliente } from "../hooks/useCliente";
import ListaDeClientes from "../components/listarCliente";

const Home = () => {
  const { listarTodos } = useCliente();
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const clientesData = await listarTodos();
      setClientes(clientesData);
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ListaDeClientes clientes={clientes} />
    </div>
  );
};

export default Home;
