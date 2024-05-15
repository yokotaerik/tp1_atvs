import React, { useEffect, useState } from "react";
import ClienteInfo from "../../componentes/clienteInfo";
import PetInfo from "../../componentes/petInfo";
import Layout from "../../componentes/layout";
import ProdutoServico from "../../componentes/produtoServico";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import {
  ClienteCompletoProps,
  ClienteCompletoResponse,
} from "../../utils/interfaces";

export type PetInfoProps = {
  id: string;
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
};

const Cliente = () => {
  const [cliente, setCliente] = useState<ClienteCompletoResponse>();
  const [pets, setPets] = useState<PetInfoProps[]>([]);
  const { id } = useParams();

  const fetchCliente = async () => {
    try {
      const response = await api.get(`/cliente/achar/${id}`);
      const cliente = response.data;
      setCliente(cliente);
      setPets(cliente.pets);
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
                  id={pet.id}
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
            <a href={`/clientes/consumir/${id}`}>
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
                      id={p.produto.id}
                      nome={p.produto.nome}
                      raca={p.produto.raca}
                      tipo={p.produto.tipo}
                      valor={p.produto.valor}
                    />
                    {/* <p className="text-gray-600"> */}
                    {/* Data de ocorência: {p.data.toLocaleDateString()} */}
                    {/* </p> */}
                    <p className="text-gray-600">
                      Consumido: {p.quantidadeDeVezes} vezes
                    </p>
                  </div>
                ))}
            </div>
            <h3 className="text-3xl font-bold  py-4">Serviços consumidos </h3>
            <div className="flex flex-col gap-4">
              {cliente.servicosConsumidos &&
                cliente.servicosConsumidos.length > 0 &&
                cliente.servicosConsumidos.map((s) => (
                  <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md ">
                    <ProdutoServico
                      id={s.id}
                      nome={s.servico.nome}
                      raca={s.servico.raca}
                      tipo={s.servico.tipo}
                      valor={s.servico.valor}
                    />
                    <p className="text-gray-600">
                      Consumido: {s.servico.vezesConsumidas} vezes
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
