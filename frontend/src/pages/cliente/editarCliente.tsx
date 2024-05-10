import React, { useState } from "react";
import Layout from "../../componentes/layout";
import { ProdutoServicoProps } from "../../componentes/produtoServico";

interface RG {
  valor: string;
  dataEmissao: string; // Alterado para string
}

interface CPF {
  valor: string;
  dataEmissao: string; // Alterado para string
}

interface Telefone {
  ddd: string; // Adicionado DDD
  numero: string;
}

export interface ClienteCompletoProps {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: CPF;
  rgs?: RG[];
  telefones?: Telefone[];
  produtosConsumidos?: ProdutoServicoProps[];
  servicosConsumidos?: ProdutoServicoProps[];
}

export interface FormularioEditarClienteProps {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: CPF;
  rg: RG[];
  telefone: Telefone[];
}

const FormularioEditarCliente = () => {
  const [cliente, setCliente] = useState<FormularioEditarClienteProps>({
    id: 0,
    nome: "",
    nomeSocial: "",
    cpf: { valor: "", dataEmissao: "" },
    rg: [{ valor: "", dataEmissao: "" }],
    telefone: [{ ddd: "", numero: "" }],
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCliente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRGChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setCliente((prevState) => ({
        ...prevState,
        rg: prevState.rg.map((rg, i) =>
          i === index ? { ...rg, [name]: value } : rg
        ),
      }));
    };

  const handleTelefoneChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setCliente((prevState) => ({
        ...prevState,
        telefone: prevState.telefone.map((tel, i) =>
          i === index ? { ...tel, [name]: value } : tel
        ),
      }));
    };

  const addRG = () => {
    setCliente((prevState) => ({
      ...prevState,
      rg: [...prevState.rg, { valor: "", dataEmissao: "" }],
    }));
  };

  const removeRG = (index: number) => () => {
    setCliente((prevState) => ({
      ...prevState,
      rg: prevState.rg.filter((rg, i) => i !== index),
    }));
  };

  const addTelefone = () => {
    setCliente((prevState) => ({
      ...prevState,
      telefone: [...prevState.telefone, { ddd: "", numero: "" }],
    }));
  };

  const removeTelefone = (index: number) => () => {
    setCliente((prevState) => ({
      ...prevState,
      telefone: prevState.telefone.filter((tel, i) => i !== index),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(cliente);
    // Aqui você pode enviar os dados para o servidor
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold m-8">Editar cliente</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-neutral-200 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="nome">
            Nome:
          </label>
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
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
            onChange={handleChange}
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
            value={cliente.cpf.valor}
            onChange={handleChange}
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
            onChange={handleChange}
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
                value={rg.valor}
                onChange={handleRGChange(index)}
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
                onChange={handleRGChange(index)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={removeRG(index)}
                className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Remover RG
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addRG}
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
                onChange={handleTelefoneChange(index)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="text"
                name="numero"
                placeholder="Número"
                value={tel.numero}
                onChange={handleTelefoneChange(index)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={removeTelefone(index)}
                className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Remover Telefone
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addTelefone}
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
};

export default FormularioEditarCliente;
