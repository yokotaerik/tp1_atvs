import React, { useEffect, useState } from "react";
import Layout from "../../componentes/layout";
import api from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import isEmptyOrWhitespace from "../../utils/verificador";

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

interface Cliente {
  nome: string;
  nomeSocial: string;
  cpf: CPF;
  rgs: RG[];
  telefones: Telefone[];
}

const FormularioCadastroCliente: React.FC = () => {
  const { id } = useParams();
  let nav = useNavigate();

  const [cliente, setCliente] = useState<Cliente>({
    nome: "",
    nomeSocial: "",
    cpf: { valor: "", dataEmissao: "" },
    rgs: [{ valor: "", dataEmissao: "" }],
    telefones: [{ ddd: "", numero: "" }],
  });

  useEffect(() => {
    fetchClienteInfo();
  }, []);

  const fetchClienteInfo = async () => {
    try {
      const response = await api.get(`/cliente/achar/${id}`);
      setCliente(response.data);
      setCliente({
        ...response.data,
        rgs: [],
        telefones: response.data.telefones.map((tel: any) => ({
          ddd: tel.ddd,
          numero: tel.numero,
        })),
      });
    } catch (error) {
      alert("Erro ao buscar cliente");
    }
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
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
        rgs: prevState.rgs.map((rg, i) =>
          i === index ? { ...rg, [name]: value } : rg
        ),
      }));
    };

  const handleTelefoneChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setCliente((prevState) => ({
        ...prevState,
        telefones: prevState.telefones.map((tel, i) =>
          i === index ? { ...tel, [name]: value } : tel
        ),
      }));
    };

  const addRG = () => {
    setCliente((prevState) => ({
      ...prevState,
      rgs: [...prevState.rgs, { valor: "", dataEmissao: "" }],
    }));
  };

  const removeRG = (index: number) => () => {
    setCliente((prevState) => ({
      ...prevState,
      rgs: prevState.rgs.filter((rg, i) => i !== index),
    }));
  };

  const addTelefone = () => {
    setCliente((prevState) => ({
      ...prevState,
      telefones: [...prevState.telefones, { ddd: "", numero: "" }],
    }));
  };

  const removeTelefone = (index: number) => () => {
    setCliente((prevState) => ({
      ...prevState,
      telefones: prevState.telefones.filter((tel, i) => i !== index),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      isEmptyOrWhitespace(cliente.nome) ||
      isEmptyOrWhitespace(cliente.nomeSocial) ||
      cliente.telefones.length === 0 ||
      isEmptyOrWhitespace(cliente.telefones[0].ddd) ||
      isEmptyOrWhitespace(cliente.telefones[0].numero)
    ) {
      alert("Preencha todos os campos");
      return;
    }
    if (cliente.rgs.length >= 1) {
      if (
        isEmptyOrWhitespace(cliente.rgs[0].valor) ||
        isEmptyOrWhitespace(cliente.rgs[0].dataEmissao)
      ) {
        alert("Preencha todos os campos");
        return;
      }
    }
    try {
      const response = await api.post(`/cliente/editar/${id}`, cliente);
      if (response.status === 200) {
        alert("Cliente editado com sucesso!");
        nav("/clientes");
      }
    } catch (error) {
      alert("Erro ao editar cliente");
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold m-8 text-center">Editar cliente</h1>

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
          {cliente.rgs.map((rg, index) => (
            <div key={index}>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor={`rg${index}`}
              >
                RG:
              </label>
              <input
                type="text"
                name="valor"
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
                name="dataEmissao"
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
          {cliente.telefones.map((tel, index) => (
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

export default FormularioCadastroCliente;
