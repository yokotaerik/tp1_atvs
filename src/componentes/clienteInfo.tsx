import React from "react";
import ProdutoServico, { ProdutoServicoProps } from "./produtoServico";

type produtoServicosConsumidos = {
  produtoOuServico: ProdutoServicoProps;
  data: Date;
};

type ClienteInfoProps = {
  nome: string;
  nomeSocial: string;
  cpf: string;
  rg: string[];
  telefone: string[];
  produtosConsumidos?: produtoServicosConsumidos[];
  servicosConsumidos?: produtoServicosConsumidos[];
};

const ClienteInfo: React.FC<ClienteInfoProps> = ({
  nome,
  nomeSocial,
  cpf,
  rg,
  telefone,
}) => {
  return (
    <div>
      <div className="bg-neutral-200 p-5 rounded-lg mb-5 shadow-md">
        <p className="mb-1">Nome: {nome}</p>
        <p className="mb-1">Nome Social: {nomeSocial}</p>
        <p className="mb-1">CPF: {cpf}</p>
        <p>RGs:</p>
        {rg.map((rg, index) => {
          return (
            <p key={index} className="mb-1">
              RG: {rg}
            </p>
          );
        })}
        <p>Telefones:</p>
        {telefone.map((telefone, index) => {
          return (
            <p key={index} className="mb-1">
              {telefone}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ClienteInfo;
