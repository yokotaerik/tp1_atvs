import { Component } from "react";

export default class Produtos extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col gap-5  my-10">
          <h1 className="text-center text-7xl font-bold">Produtos</h1>
          <a href="/produto/cadastrar">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded w-full">
              Cadastrar novo produto
            </button>
          </a>
        </div>
        <div>
          <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-white p-3 rounded-md border-4">
            <p className="">ID: 1</p>
            <p className="">Nome: Ração</p>
            <p className="">Valor: 100 reais</p>
            <p className="">Raça: Poodle</p>
            <p className="">Tipo: Pequeno porte</p>
            <div className="flex gap-2">
              <a href="/produto/editar/1">
                <button className="bg-blue-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                  Editar
                </button>
              </a>
              <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
