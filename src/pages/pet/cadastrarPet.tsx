import React, { Component } from "react";
import Layout from "../../componentes/layout";

export default class FormularioCadastrarPet extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-3xl font-bold m-8">Cadastrar pet</h1>
        <form className="flex flex-col w-full gap-4 p-4 bg-neutral-200 rounded-md mt-4 shadow-md ">
          <div>
            <label htmlFor="nome">Nome do Pet</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="nome"
              placeholder="Nome do pet"
            />
          </div>
          <div>
            <label htmlFor="tipo">Tipo</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="nomeSocial"
              placeholder="Tipo"
            />
          </div>
          <div>
            <label htmlFor="email">Raça</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="raça"
              placeholder="Raça"
            />
          </div>
          <div>
            <label htmlFor="cpf">Genero</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="genero"
              placeholder="Gênero"
            />
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white"
            >
              Salvar
            </button>
          </div>
        </form>
      </Layout>
    );
  }
}
