import { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="bg-gray-100 flex mt-10 justify-center">
        <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-8">
            Bem vindo a PET LOVERS
          </h1>
          <div className="flex flex-col space-y-4">
            <a
              href="clientes/consumir"
              className="block bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600"
            >
              Adicionar um produto ou serviço a um cliente
            </a>
            <a
              href="cliente/consumidores"
              className="block bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600"
            >
              Listar os clientes que mais consumiram
            </a>
            <a
              href="mais_consumidos"
              className="block bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600"
            >
              Listar os produtos mais consumidos
            </a>
          </div>
        </div>
      </div>
    );
  }
}
