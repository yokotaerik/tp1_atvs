import { useState } from "react";
import Layout from "../../componentes/layout";

interface Cliente {
  id: number;
  nome: string;
  valorTotal: number;
  quantidadeTotal: number;
}

const ClientesConsumidores = () => {
  const [clientes, setClientes] = useState<Cliente[]>([
    { id: 1, nome: "Erik", valorTotal: 1000, quantidadeTotal: 10 },
    { id: 2, nome: "Gerson", valorTotal: 2000, quantidadeTotal: 5 },
    { id: 3, nome: "Marianna", valorTotal: 1500, quantidadeTotal: 8 },
  ]);

  // Ordenar os clientes por valor total
  const clientesPorValor = clientes
    .slice()
    .sort((a, b) => b.valorTotal - a.valorTotal);

  // Ordenar os clientes por quantidade total
  const clientesPorQuantidade = clientes
    .slice()
    .sort((a, b) => b.quantidadeTotal - a.quantidadeTotal);

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">
        Clientes que mais consumiram por valor:
      </h2>
      <ul>
        {clientesPorValor.map((cliente) => (
          <li
            key={cliente.id}
            className="mb-4 bg-gray-100 shadow-md rounded-lg px-4 py-2 "
          >
            <p className="font-semibold">ID: {cliente.id}</p>
            <p className="text-gray-600">Nome: {cliente.nome}</p>
            <p className="text-gray-600">
              Valor Total: R$ {cliente.valorTotal}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Clientes que mais consumiram por quantidade:
      </h2>
      <ul>
        {clientesPorQuantidade.map((cliente) => (
          <li
            key={cliente.id}
            className="mb-4 bg-gray-100 shadow-md rounded-lg px-4 py-2 "
          >
            <p className="font-semibold">ID: {cliente.id}</p>
            <p className="text-gray-600">Nome: {cliente.nome}</p>
            <p className="text-gray-600">
              Quantidade Total: {cliente.quantidadeTotal}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ClientesConsumidores;
