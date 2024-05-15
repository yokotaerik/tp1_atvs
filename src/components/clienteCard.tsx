import React from "react";
import useCliente, { Cliente } from "../hooks/useCliente";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";

interface ClienteCardProps {
  cliente: Cliente;
  expandido: boolean;
  deletou: () => void
}

const ClienteCard = ({ cliente, expandido, deletou }: ClienteCardProps) => {
  const { excluir } = useCliente();

  async function handleDelete(e: any) {
    excluir(cliente.id as number)
    setTimeout(deletou, 500)
  }

  return (
    <div className="m-4 rounded-lg py-2 px-4 bg-gray-200">
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
      <div className="flex gap-2">
        {!expandido ? (<Link to={`/cliente/${cliente.id}`}><button className="p-1 bg-blue-900 rounded-md text-white"> Expandir</button></Link>) : null}
        <Link to={`/editar/${cliente.id}`}><button className="p-1 bg-green-900 rounded-md text-white"> Editar</button></Link>
        <button onClick={handleDelete} className="p-1 bg-red-500 rounded-md text-white"> Deletar </button>
      </div>
    </div>
  );
};

export default ClienteCard;
