import React from "react";
import ProdutoServico from "../componentes/produtoServico";
import Layout from "../componentes/layout";

export interface ProdutoServicosConsumido {
  id: number;
  nome: string;
  valor: number;
  tipo: string;
  raca: string;
  quantidade: number;
}

const MaisConsumidos = () => {
  const [produtos, setProdutos] = React.useState<ProdutoServicosConsumido[]>([
    {
      id: 1,
      nome: "Ração",
      valor: 100,
      tipo: "Porte medio",
      raca: "Pincher",
      quantidade: 10,
    },
    {
      id: 2,
      nome: "Brinquedo",
      valor: 50,
      tipo: "Porte medio",
      raca: "Poodle",
      quantidade: 5,
    },
    {
      id: 3,
      nome: "Banho",
      valor: 80,
      tipo: "Porte medio",
      raca: "Todas",
      quantidade: 8,
    },
  ]);

  const [servicos, setServicos] = React.useState<ProdutoServicosConsumido[]>([
    {
      id: 1,
      nome: "Banho",
      valor: 100,
      tipo: "Porte medio",
      raca: "Pincher",
      quantidade: 10,
    },
    {
      id: 2,
      nome: "Tosa",
      valor: 50,
      tipo: "Porte medio",
      raca: "Poodle",
      quantidade: 5,
    },
    {
      id: 3,
      nome: "Consulta",
      valor: 800,
      tipo: "Porte medio",
      raca: "Todas",
      quantidade: 8,
    },
  ]);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Produtos Mais Consumidos
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-stretch md:items-center">
        <input
          type="text"
          className="flex-auto bg-gray-100 shadow-md p-2 rounded-md my-4"
          placeholder="Filtre por tipo"
          name="filtroTipo"
        />
        <input
          type="text"
          className="flex-auto bg-gray-100 shadow-md p-2 rounded-md my-4"
          placeholder="Filtre por raça"
          name="filtroRaca"
        />
        <button className="flex-none bg-blue-500 shadow-md p-2 rounded-md my-4 text-white">
          Limpar
        </button>
      </div>

      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-stretch mb-4 bg-gray-100 rounded-lg p-3 shadow-md"
        >
          <ProdutoServico
            id={produto.id}
            nome={produto.nome}
            valor={produto.valor}
            tipo={produto.tipo}
            raca={produto.raca}
          />
          <p className="text-gray-600 mt-4 md:mt-0">
            Consumidos: {produto.quantidade} vezes
          </p>
        </div>
      ))}

      <h1 className="text-3xl font-bold mb-6 text-center">
        Serviços Mais Consumidos
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-stretch md:items-center">
        <input
          type="text"
          className="flex-auto bg-gray-100 shadow-md p-2 rounded-md my-4"
          placeholder="Filtre por tipo"
          name="filtroTipo"
        />
        <input
          type="text"
          className="flex-auto bg-gray-100 shadow-md p-2 rounded-md my-4"
          placeholder="Filtre por raça"
          name="filtroRaca"
        />
        <button className="flex-none bg-blue-500 shadow-md p-2 rounded-md my-4 text-white">
          Limpar
        </button>
      </div>
      {servicos.map((servicos) => (
        <div
          key={servicos.id}
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-stretch mb-4 bg-gray-100 rounded-lg p-3 shadow-md"
        >
          <ProdutoServico
            id={servicos.id}
            nome={servicos.nome}
            valor={servicos.valor}
            tipo={servicos.tipo}
            raca={servicos.raca}
          />
          <p className="text-gray-600 mt-4 md:mt-0">
            Consumidos: {servicos.quantidade} vezes
          </p>
        </div>
      ))}
    </Layout>
  );
};

export default MaisConsumidos;
