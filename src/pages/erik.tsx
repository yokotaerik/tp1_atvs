import { Component, useState } from "react";
import PetInfo from "../componentes/petInfo";
import ClienteInfo, { ClienteInfoProps } from "../componentes/clienteInfo";

export interface Pet {
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
}

interface PaginaDeCliente {
  cliente: ClienteInfoProps;
  pets: Pet[];
}

export default function Erik({ cliente, pets }: PaginaDeCliente) {


  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-5 my-10 items-center">
        <h1 className="text-center text-7xl font-bold">Perfil do Cliente</h1>
      </div>
      <h2 className="text-4xl font-bold">Informações do cliente</h2>
      <ClienteInfo
        nome={cliente.nome}
        nomeSocial={cliente.nomeSocial}
        cpf={cliente.cpf}
        rg={cliente.rg}
        telefone={cliente.telefone}
      />
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-bold">Pets do cliente</h3>
        <a href="/pet/cadastrar/1">
          <button className="bg-blue-400 p-2 rounded-md text-xl font-bold text-white">
            Adicionar pet{" "}
          </button>
        </a>
      </div>
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
  );
}
