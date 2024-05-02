import { Component, ReactNode } from "react";

export type ClienteInfoProps = {
  nome: string;
  nomeSocial: string;
  cpf: string;
  rg: string[];
  telefone: string[];
};

export default function ClienteInfo(clienteInfo: ClienteInfoProps) {
  return (
    <div>
      <div className="bg-white p-5 rounded-lg mb-5">
        <p className="mb-1">Nome: {clienteInfo.nome}</p>
        <p className="mb-1">Nome Social: {clienteInfo.nomeSocial}</p>
        <p className="mb-1">CPF: {clienteInfo.cpf}</p>
        {clienteInfo.rg.map((rg, index) => {
          return (
            <p key={index} className="mb-1">
              RG: {rg}
            </p>
          );
        })}
        {clienteInfo.telefone.map((telefone, index) => {
          return (
            <p key={index} className="mb-1">
              Telefone: {telefone}
            </p>
          );
        })}
      </div>
    </div>
  );
}
