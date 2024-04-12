import React, { Component } from "react";

type Props = {
  tema: string;
};

export default class FormularioCadastroCliente extends Component<Props> {
  render() {
    const { tema } = this.props;
    return (
      <div>
        <h1 className="text-6xl font-bold m-8">Cadastro de cliente</h1>
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
            <label htmlFor="nomeSocial">Nome social</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="nomeSocial"
              placeholder="Nome social"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              id="email"
              placeholder="E-mail"
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
              />
            </div>
            <div>
              <label htmlFor="dataEmissaoCpf">Data de emissão</label>
              <input
                className="w-full rounded-md p-2"
                type="date"
                id="dataEmissaoCpf"
                placeholder="Data de emissão do CPF"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <label htmlFor="cpf">CPF</label>
              <input
                className="w-full rounded-md p-2"
                type="text"
                placeholder="CPF"
              />
            </div>
            <div>
              <label htmlFor="dataEmissaoCpf">Data de emissão</label>
              <input
                className="w-full rounded-md p-2"
                type="date"
                placeholder="Data de emissão do CPF"
              />
            </div>
          </div>
          <div>
            <label htmlFor="telefone">Telefone</label>
            <input
              className="w-full rounded-md p-2"
              type="text"
              placeholder="(ddd) 99999-9999"
            />
          </div>
          <div>
            <button type="button" className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white">
              Cadastrar cliente
            </button>
          </div>
        </form>
      </div>
    );
  }
}
