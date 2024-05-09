import { Component } from "react";
import Layout from "../../componentes/layout";

export default class Consumir extends Component {
  state = {
    produtos: [
      { id: 1, nome: "Ração de gato" },
      { id: 2, nome: "Ração de cachorro" },
      { id: 3, nome: "Areia sanitária" },
    ],
    servicos: [
      { id: 1, nome: "Tosa de cachorro" },
      { id: 2, nome: "Banho de cachorro" },
      { id: 3, nome: "Consulta veterinária" },
    ],
  };

  render() {
    const produtos = this.state.produtos;
    const servicos = this.state.servicos;
    return (
      <Layout>
        <div className="flex gap-5 flex-col">
          <form className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Adicionar Produto</h2>
            <select name="" id="" className="bg-gray-200 py-2 rounded-md">
              {produtos.map((produtos) => (
                <option value={produtos.id}>{produtos.nome}</option>
              ))}
            </select>
            <input
              type="text"
              className="bg-gray-200 py-2 rounded-md text-end"
              placeholder="Quantidade de produtos"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Adicionar
            </button>
          </form>
          <form className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Adicionar Servico</h2>
            <select name="" id="" className="bg-gray-200 py-2 rounded-md">
              {servicos.map((servicos) => (
                <option value={servicos.id}>{servicos.nome}</option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Adicionar
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}
