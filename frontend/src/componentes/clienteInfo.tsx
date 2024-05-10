import React from "react";
import { ClienteCompletoProps } from "../pages/cliente/editarCliente";

const ClienteInfo: React.FC<ClienteCompletoProps> = (props) => {
  return (
    <div>
      <div className="bg-neutral-200 p-5 rounded-lg mb-5 shadow-md">
        <p className="mb-1">Nome: {props.nome}</p>
        <p className="mb-1">Nome Social: {props.nomeSocial}</p>
        <p className="mb-1">CPF: {props.cpf.valor}</p>
        <p>RGs:</p>

        {props.rgs?.map((rg, index) => {
          return (
            <p key={index} className="mb-1">
              RG: {rg.valor}
            </p>
          );
        })}
        <p>Telefones:</p>
        {props.telefones?.map((telefone, index) => {
          return (
            <p key={index} className="mb-1">
              {telefone.ddd} {telefone.numero}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ClienteInfo;
