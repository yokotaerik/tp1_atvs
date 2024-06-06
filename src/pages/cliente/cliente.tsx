import React, { useState } from "react";
import ClienteInfo from "../../componentes/clienteInfo";
import PetInfo from "../../componentes/petInfo";
import Layout from "../../componentes/layout";
import ProdutoServico from "../../componentes/produtoServico";

interface Pet {
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
}

const Cliente = () => {
  const [pets, setPets] = useState<Pet[]>([
    {
      nome: "Nina",
      tipo: "Porte-médio",
      raca: "Vira-lata",
      genero: "Fêmea",
    },
  ]);

  const [cliente, setCliente] = useState<any>({
    nome: "Erik Camara Yokota",
    nomeSocial: "Jubaluba",
    cpf: "123.456.789-11",
    rg: ["53.125.810-5"],
    telefone: ["12 981552039"],
    produtosConsumidos: [
      {
        data: new Date("01/02/2003"),
        produtoOuServico: {
          id: 1,
          nome: "Tralala",
          raca: "Raça",
          tipo: "Tipo",
          valor: 5000,
        },
      },
      {
        data: new Date("01/02/2003"),
        produtoOuServico: {
          id: 1,
          nome: "Tralala",
          raca: "Raça",
          tipo: "Tipo",
          valor: 5000,
        },
      },
      {
        data: new Date("01/02/2003"),
        produtoOuServico: {
          id: 1,
          nome: "Tralala",
          raca: "Raça",
          tipo: "Tipo",
          valor: 5000,
        },
      },
    ],
    servicosConsumidos: [
      {
        data: new Date("01/02/2003"),
        produtoOuServico: {
          id: 1,
          nome: "Tralala",
          raca: "Raça",
          tipo: "Tipo",
          valor: 5000,
        },
      },
      {
        data: new Date("01/02/2003"),
        produtoOuServico: {
          id: 1,
          nome: "Tralala",
          raca: "Raça",
          tipo: "Tipo",
          valor: 5000,
        },
      },
      {
        data: new Date("01/02/2003"),
        produtoOuServico: {
          id: 1,
          nome: "Tralala",
          raca: "Raça",
          tipo: "Tipo",
          valor: 5000,
        },
      },
    ],
  });

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 my-10 items-center">
          <h1 className="text-center text-7xl font-bold">Perfil do Cliente</h1>
        </div>
        <h2 className="text-3xl font-bold">Informações do cliente</h2>
        <ClienteInfo
          nome={cliente.nome}
          nomeSocial={cliente.nomeSocial}
          cpf={cliente.cpf}
          rg={cliente.rg}
          telefone={cliente.telefone}
        />
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-bold">Pets do cliente</h3>
          <a href="/pet/cadastrar/1">
            <button className="bg-blue-400 p-2 rounded-md text-xl font-bold text-white">
              Adicionar pet{" "}
            </button>
          </a>
        </div>
        <div>
          {pets.map((pet, index) => {
            return (
              <PetInfo
                key={index}
                id="1"
                nome={pet.nome}
                tipo={pet.tipo}
                raca={pet.raca}
                genero={pet.genero}
              />
            );
          })}
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
              cliente.produtosConsumidos.map((p: any) => (
                <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md ">
                  <ProdutoServico
                    id={p.produtoOuServico.id}
                    nome={p.produtoOuServico.nome}
                    raca={p.produtoOuServico.raca}
                    tipo={p.produtoOuServico.tipo}
                    valor={p.produtoOuServico.valor}
                  />
                  <p className="text-gray-600">
                    Data de ocorência: {p.data.toLocaleDateString()}
                  </p>
                </div>
              ))}
          </div>
          <h3 className="text-3xl font-bold  py-4">Serviços consumidos </h3>
          <div className="flex flex-col gap-4">
            {cliente.servicosConsumidos &&
              cliente.servicosConsumidos.map((p: any) => (
                <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md ">
                  <ProdutoServico
                    id={p.produtoOuServico.id}
                    nome={p.produtoOuServico.nome}
                    raca={p.produtoOuServico.raca}
                    tipo={p.produtoOuServico.tipo}
                    valor={p.produtoOuServico.valor}
                  />
                  <p className="text-gray-600">
                    Data de ocorência:
                    {p.data.toLocaleDateString()}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cliente;
