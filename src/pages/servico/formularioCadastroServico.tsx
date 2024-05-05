import React, { Component } from "react";

export default class FormularioCadastroServico extends Component {
  render() {
    return (
      <div>
        <h1 className="text-3xl font-bold m-8">Cadastro de serviço</h1>
        <form className="flex flex-col w-full gap-4 p-4 bg-neutral-200 rounded-md mt-4 ">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="nome"
              placeholder="Nome"
            />
          </div>
          <div>
            <label htmlFor="valor">Valor</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="valor"
              placeholder="Valor"
            />
          </div>
          <div>
            <label htmlFor="tipo">Tipo</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="tipo"
              placeholder="Tipo"
            />
          </div>
          <div>
            <label htmlFor="raca">Raça</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="raca"
              placeholder="Raça"
            />
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white"
            >
              Cadastrar serviço
            </button>
          </div>
        </form>
      </div>
    );
  }
}
