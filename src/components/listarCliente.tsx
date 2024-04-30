import React from "react";
import { Cliente } from "../hooks/useCliente";

interface ListaDeClientesProps {
  clientes: Cliente[]; // Lista de clientes
}

const ListaDeClientes = ({ clientes }: ListaDeClientesProps) => {
  return (
    <div>
      {clientes.map((cliente) => (
        <div key={cliente.id}>
          <h3>{cliente.nome}</h3>
          <p>
            <strong>Nome Social:</strong> {cliente.nomeSocial}
          </p>
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
            {cliente.endereco.estado}
          </p>
          <p>{cliente.endereco.codigoPostal}</p>
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
        </div>
      ))}
    </div>
  );
};

export default ListaDeClientes;
