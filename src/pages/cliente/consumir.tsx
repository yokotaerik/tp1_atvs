import { Component } from "react";
import Layout from "../../componentes/layout";

export default class Consumir extends Component {
  render() {
    return (
      <Layout>
        <form className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Consumir Produto</h2>
          <div className="mb-4">
            <label htmlFor="clienteProduto" className="block mb-1">
              ID do Cliente:
            </label>
            <input
              id="clienteProduto"
              type="text"
              className="w-full rounded-md p-2 border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="produto" className="block mb-1">
              ID do Produto:
            </label>
            <input
              id="produto"
              type="text"
              className="w-full rounded-md p-2 border border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Consumir
          </button>
        </form>
        <form>
          <h2 className="text-xl font-semibold mb-4">Consumir Serviço</h2>
          <div className="mb-4">
            <label htmlFor="clienteServico" className="block mb-1">
              ID do Cliente:
            </label>
            <input
              id="clienteServico"
              type="text"
              className="w-full rounded-md p-2 border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="servico" className="block mb-1">
              ID do Serviço:
            </label>
            <input
              id="servico"
              type="text"
              className="w-full rounded-md p-2 border border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Consumir
          </button>
        </form>
      </Layout>
    );
  }
}
