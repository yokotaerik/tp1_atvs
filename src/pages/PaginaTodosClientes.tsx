import React, { useEffect, useState } from "react";
import useCliente, { Cliente } from "../hooks/useCliente";
import ListaDeClientes from "../components/listarCliente";
import ClienteCard from "../components/listarCliente";

const TodosClientes = () => {
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
      {clientes.length > 0 && clientes.map((cliente) => <ClienteCard expandido={false} cliente={cliente} />)}
    </div>
  );
};

export default TodosClientes;
