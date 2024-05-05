import React, { Component } from "react";
import Layout from "../../componentes/layout";

interface RG {
  rg: string;
  dataEmissao: string; // Alterado para string
}

interface CPF {
  cpf: string;
  dataEmissao: string; // Alterado para string
}

interface Telefone {
  ddd: string; // Adicionado DDD
  numero: string;
}

interface Cliente {
  nome: string;
  nomeSocial: string;
  email: string;
  cpf: CPF;
  rg: RG[];
  telefone: Telefone[];
}

interface FormularioProps {}

interface FormularioState {
  cliente: Cliente;
}

export default class FormularioEditarCliente extends Component<
  FormularioProps,
  FormularioState
> {
  constructor(props: FormularioProps) {
    super(props);
    this.state = {
      cliente: {
        nome: "",
        nomeSocial: "",
        email: "",
        cpf: { cpf: "", dataEmissao: "" },
        rg: [{ rg: "", dataEmissao: "" }],
        telefone: [{ ddd: "", numero: "" }],
      },
    };
  }

  handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      cliente: {
        ...prevState.cliente,
        [name]: value,
      },
    }));
  };

  handleRGChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState((prevState) => ({
        cliente: {
          ...prevState.cliente,
          rg: prevState.cliente.rg.map((rg, i) =>
            i === index ? { ...rg, [name]: value } : rg
          ),
        },
      }));
    };

  handleTelefoneChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState((prevState) => ({
        cliente: {
          ...prevState.cliente,
          telefone: prevState.cliente.telefone.map((tel, i) =>
            i === index ? { ...tel, [name]: value } : tel
          ),
        },
      }));
    };

  addRG = () => {
    this.setState((prevState) => ({
      cliente: {
        ...prevState.cliente,
        rg: [...prevState.cliente.rg, { rg: "", dataEmissao: "" }],
      },
    }));
  };

  removeRG = (index: number) => () => {
    this.setState((prevState) => ({
      cliente: {
        ...prevState.cliente,
        rg: prevState.cliente.rg.filter((rg, i) => i !== index),
      },
    }));
  };

  addTelefone = () => {
    this.setState((prevState) => ({
      cliente: {
        ...prevState.cliente,
        telefone: [...prevState.cliente.telefone, { ddd: "", numero: "" }],
      },
    }));
  };

  removeTelefone = (index: number) => () => {
    this.setState((prevState) => ({
      cliente: {
        ...prevState.cliente,
        telefone: prevState.cliente.telefone.filter((tel, i) => i !== index),
      },
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state.cliente);
    // Aqui você pode enviar os dados para o servidor
  };

  render() {
    const { cliente } = this.state;

    return (
      <Layout>
        <h1 className="text-3xl font-bold m-8">Editar cliente</h1>

        <form
          onSubmit={this.handleSubmit}
          className="max-w-md mx-auto p-4 bg-neutral-200 rounded-md shadow-md"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="nome"
            >
              Nome:
            </label>
            <input
              type="text"
              name="nome"
              value={cliente.nome}
              onChange={this.handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="nomeSocial"
            >
              Nome Social:
            </label>
            <input
              type="text"
              name="nomeSocial"
              value={cliente.nomeSocial}
              onChange={this.handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={cliente.email}
              onChange={this.handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cpf">
              CPF:
            </label>
            <input
              type="text"
              name="cpf"
              value={cliente.cpf.cpf}
              onChange={this.handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cpfDataEmissao"
            >
              Data de Emissão do CPF:
            </label>
            <input
              type="date"
              name="cpfDataEmissao"
              value={cliente.cpf.dataEmissao}
              onChange={this.handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            {cliente.rg.map((rg, index) => (
              <div key={index}>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor={`rg${index}`}
                >
                  RG:
                </label>
                <input
                  type="text"
                  name="rg"
                  value={rg.rg}
                  onChange={this.handleRGChange(index)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor={`rgDataEmissao${index}`}
                >
                  Data de Emissão do RG:
                </label>
                <input
                  type="date"
                  name="rgDataEmissao"
                  value={rg.dataEmissao}
                  onChange={this.handleRGChange(index)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                  type="button"
                  onClick={this.removeRG(index)}
                  className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Remover RG
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={this.addRG}
              className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Adicionar RG
            </button>
          </div>
          <div className="mb-4">
            {cliente.telefone.map((tel, index) => (
              <div key={index}>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor={`telefone${index}`}
                >
                  Telefone:
                </label>
                <input
                  type="text"
                  name="ddd"
                  placeholder="DDD"
                  value={tel.ddd}
                  onChange={this.handleTelefoneChange(index)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="text"
                  name="numero"
                  placeholder="Número"
                  value={tel.numero}
                  onChange={this.handleTelefoneChange(index)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                  type="button"
                  onClick={this.removeTelefone(index)}
                  className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Remover Telefone
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={this.addTelefone}
              className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Adicionar Telefone
            </button>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </form>
      </Layout>
    );
  }
}
