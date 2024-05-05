import React, { Component } from "react";
import ProdutoServico from "../componentes/produtoServico";

interface ProdutoConsumido {
  id: number;
  nome: string;
  valor: number;
  tipo: string;
  raca: string;
  quantidade: number;
}

interface State {
  produtos: ProdutoConsumido[];
}

class MaisConsumidos extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      produtos: [
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
      ],
    };
  }

  render() {
    const { produtos } = this.state;

    return (
      <div className="container mx-auto lg:w-2/4 p-8 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Produtos e Serviços Mais Consumidos
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
      </div>
    );
  }
}

export default MaisConsumidos;
