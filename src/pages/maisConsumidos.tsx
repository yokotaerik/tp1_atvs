import { Component } from "react";
import ProdutoServico from "../componentes/produtoServico";

class MaisConsumidos extends Component {
  render() {
    return (
      <div className="mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-6">
          Produtos e Serviços Mais Consumidos
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 md:items-center mb-4 bg-gray-100 rounded-lg p-3">
          <ProdutoServico
            id="1"
            nome="Ração"
            valor="100"
            tipo="Produto"
            raca="Cachorro"
          />
          <p className="text-gray-600">Consumidos: 10 vezes</p>
        </div>
      </div>
    );
  }
}

export default MaisConsumidos;
