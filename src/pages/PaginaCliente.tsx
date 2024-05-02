import React, { useEffect, useState } from "react";
import useCliente, { Cliente } from "../hooks/useCliente";
import ListaDeClientes from "../components/listarCliente";

const PaginaCliente = () => {
  const { listarUm } = useCliente();
  const [cliente, setCliente] = useState<Cliente>();

  useEffect(() => {
    const fetchClientes = async () => {
      const clienteData = await listarUm(1);
      setCliente(clienteData as unknown as Cliente);
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Cliente: </h1>
      {cliente && <ListaDeClientes expandido={true} cliente={cliente} />}
    </div>
  );
};

export default PaginaCliente;
