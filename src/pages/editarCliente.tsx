import React, { Component } from "react";

export default class FormularioEditarCliente extends Component {
  render() {
    return (
      <div>
        <h1 className="text-6xl font-bold m-8">Editar cliente</h1>
        <form className="flex flex-col w-full gap-4 p-4 bg-neutral-200 rounded-md mt-4 ">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="nome"
              placeholder="Nome"
              value={"Erik Camara Yokota"}
            />
          </div>
          <div>
            <label htmlFor="nomeSocial">Nome social</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="nomeSocial"
              placeholder="Nome social"
              value={"Toyota"}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="email"
              placeholder="E-mail"
              value={"erik@email.com"}
            />
          </div>
          <div className="flex items-center gap-2">
            <div>
              <label htmlFor="cpf">CPF</label>
              <input
                className="w-full rounded-md p-2"
                type="text"
                id="cpf"
                placeholder="CPF"
                value={"123.456.789-11"}
              />
            </div>
            <div>
              <label htmlFor="dataEmissaoCpf">Data de emissão</label>
              <input
                className="w-full rounded-md p-2"
                type="date"
                id="dataEmissaoCpf"
                placeholder="Data de emissão do CPF"
                value={"1999-12-12"}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <label htmlFor="RG">RG</label>
              <input
                className="w-full rounded-md p-2"
                type="text"
                placeholder="RG"
                value={"53.125.810-5"}
              />
            </div>
            <div className="flex gap-2 items-end">
              <div>
                <label htmlFor="dataEmissaoCpf">Data de emissão</label>
                <input
                  className="w-full rounded-md p-2"
                  type="date"
                  placeholder="Data de emissão do RG"
                />
              </div>
              <button className="rounded-md p-2 bg-white">+</button>
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-end">
              <div>
                <label htmlFor="telefone">Telefone</label>
                <input
                  className="w-full rounded-md p-2"
                  type="text"
                  placeholder="(ddd) 99999-9999"
                  value={"(11) 99999-9999"}
                />
              </div>
              <button className="rounded-md p-2 bg-white">+</button>
            </div>
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
      </div>
    );
  }
}
