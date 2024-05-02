import React from "react";
import { Cliente } from "../hooks/useCliente";

interface ClienteCardProps {
  cliente: Cliente;
  expandido: boolean;
}

const ClienteCard = ({ cliente, expandido }: ClienteCardProps) => {
  return (
    <div className="m-4 rounded-lg bg-gray-200">
      <div key={cliente.id} className="flex flex-col justify-between">
        <h3 className="text-xl">{cliente.nome}</h3>
        <p>
          <strong>Nome Social:</strong> {cliente.nomeSocial}
        </p>
        {/* Verifica se o cliente está expandido */}
        {expandido && (
          <>
            <p>
              <strong>Email:</strong> {cliente.email}
            </p>
            <p>
              <strong>Endereço:</strong>
            </p>
            <p>
              {cliente.endereco.rua}, {cliente.endereco.numero}
            </p>
            <p>
              {cliente.endereco.bairro}, {cliente.endereco.cidade},{" "}
              {cliente.endereco.estado} {cliente.endereco.codigoPostal}
            </p>
            {cliente.endereco.informacoesAdicionais && (
              <p>
                <strong>Informações Adicionais:</strong>{" "}
                {cliente.endereco.informacoesAdicionais}
              </p>
            )}
            <p>
              <strong>Telefones:</strong>
            </p>
            <ul>
              {cliente.telefones.map((telefone) => (
                <li key={telefone.id}>
                  {telefone.ddd} {telefone.numero}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ClienteCard;
