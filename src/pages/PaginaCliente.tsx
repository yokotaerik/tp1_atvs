import React, { useEffect, useState } from "react";
import useCliente, { Cliente } from "../hooks/useCliente";
import ListaDeClientes from "../components/clienteCard";
import Layout from "../components/layout";
import { useNavigate, useParams } from "react-router-dom";

const PaginaCliente = () => {
  const { listarUm } = useCliente();
  const [cliente, setCliente] = useState<Cliente>();
  const { id } = useParams();
  const nav = useNavigate();

 
  useEffect(() => {
    const fetchClientes = async () => {
      const clienteData = await listarUm(Number(id));
      setCliente(clienteData);
    };

    fetchClientes();
  }, []);

  const voltarPraHome = () =>{
    nav("/")
  }

  

  return (
    <Layout>
      {cliente && <ListaDeClientes expandido={true} cliente={cliente} deletou={voltarPraHome}/>}
    </Layout>
  );
};

export default PaginaCliente;
