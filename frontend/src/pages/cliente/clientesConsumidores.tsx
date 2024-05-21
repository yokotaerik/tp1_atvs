import { useEffect, useState } from "react";
import Layout from "../../componentes/layout";
import { Cliente, ClienteCompletoResponse } from "../../utils/interfaces";
import api from "../../utils/api";

const ClientesConsumidores = () => {
  const [clientesValor, setClientesValor] =
    useState<ClienteCompletoResponse[]>();
  const [clientesQuantidade, setClientesQuantidade] =
    useState<ClienteCompletoResponse[]>();

  const fetchClientes = async () => {
    const porValorResponse = await api.get(
      "/gerenciamento/melhoresConsumidoresPorValor"
    );
    const porQuantidaderResponse = await api.get(
      "/gerenciamento/melhoresConsumidoresPorQuantidade"
    );
    setClientesValor(porValorResponse.data);
    setClientesQuantidade(porQuantidaderResponse.data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">
        Clientes que mais consumiram por valor:
      </h2>
      <ul>
        {clientesValor &&
          clientesValor.map((cliente) => (
            <li
              key={cliente.id}
              className="mb-4 bg-gray-100 shadow-md rounded-lg px-4 py-2 "
            >
              <p className="font-semibold">Código: {cliente.id}</p>
              <p className="text-gray-600">Nome: {cliente.nome}</p>
              <p className="text-gray-600">
                Valor Total: R$ {cliente.valorConsumido}
              </p>
            </li>
          ))}
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Clientes que mais consumiram por quantidade:
      </h2>
      <ul>
        {clientesQuantidade &&
          clientesQuantidade.map((cliente) => (
            <li
              key={cliente.id}
              className="mb-4 bg-gray-100 shadow-md rounded-lg px-4 py-2 "
            >
              <p className="font-semibold">Código: {cliente.id}</p>
              <p className="text-gray-600">Nome: {cliente.nome}</p>
              <p className="text-gray-600">
                Quantidade Total: {cliente.vezesConsumida}
              </p>
            </li>
          ))}
      </ul>
    </Layout>
  );
};

export default ClientesConsumidores;
