import React, { useEffect, useState } from "react";
import ClienteInfo from "../../componentes/clienteInfo";
import PetInfo from "../../componentes/petInfo";
import Layout from "../../componentes/layout";
import ProdutoServico from "../../componentes/produtoServico";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import { ClienteCompletoProps } from "./editarCliente";

interface Pet {
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
}

const Cliente = () => {
  const [cliente, setCliente] = useState<ClienteCompletoProps>();
  const [pets, setPets] = useState<Pet[]>([]);
  const { id } = useParams();

  const fetchCliente = async () => {
    try {
      const response = await api.get(`/cliente/achar/${id}`);
      const cliente = response.data;
      setCliente(cliente);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCliente();
  }, []);

  if (cliente !== undefined) {
    return (
      <Layout>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 my-10 items-center">
            <h1 className="text-center text-7xl font-bold">
              Perfil do Cliente
            </h1>
          </div>
          <h2 className="text-3xl font-bold">Informações do cliente</h2>
          <ClienteInfo
            id={cliente.id}
            nome={cliente.nome}
            nomeSocial={cliente.nomeSocial}
            cpf={cliente.cpf}
            rgs={cliente.rgs}
            telefones={cliente.telefones}
          />
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold">Pets do cliente</h3>
            <a href={`/pet/cadastrar/${id}`}>
              <button className="bg-blue-400 p-2 rounded-md text-xl font-bold text-white">
                Adicionar pet
              </button>
            </a>
          </div>
          <div>
            {pets.length > 0 ? (
              pets.map((pet, index) => (
                <PetInfo
                  key={index}
                  id="1"
                  nome={pet.nome}
                  tipo={pet.tipo}
                  raca={pet.raca}
                  genero={pet.genero}
                />
              ))
            ) : (
              <p>Nenhum pet encontrado.</p>
            )}
          </div>
          <div>
            <a href="/clientes/consumir">
              <button className="bg-blue-400 p-2 rounded-md text-xl font-bold text-white">
                Cadastrar um consumo do cliente
              </button>
            </a>
          </div>
          <div>
            <h3 className="text-3xl font-bold py-4">Produtos consumidos</h3>
            <div className="flex flex-col gap-4">
              {cliente.produtosConsumidos &&
                cliente.produtosConsumidos.length > 0 &&
                cliente.produtosConsumidos.map((p) => (
                  <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md ">
                    <ProdutoServico
                      id={p.id}
                      nome={p.nome}
                      raca={p.raca}
                      tipo={p.tipo}
                      valor={p.valor}
                    />
                    {/* <p className="text-gray-600"> */}
                    {/* Data de ocorência: {p.data.toLocaleDateString()} */}
                    {/* </p> */}
                  </div>
                ))}
            </div>
            <h3 className="text-3xl font-bold  py-4">Serviços consumidos </h3>
            <div className="flex flex-col gap-4">
              {cliente.servicosConsumidos &&
                cliente.servicosConsumidos.length > 0 &&
                cliente.servicosConsumidos.map((p) => (
                  <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md ">
                    <ProdutoServico
                      id={p.id}
                      nome={p.nome}
                      raca={p.raca}
                      tipo={p.tipo}
                      valor={p.valor}
                    />
                    <p className="text-gray-600">
                      Data de ocorência:
                      {/* {p.data.toLocaleDateString()} */}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return <Layout>Carregando...</Layout>;
  }
};

export default Cliente;
