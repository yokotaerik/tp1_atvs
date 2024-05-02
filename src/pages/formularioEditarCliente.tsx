import React, { useEffect, useState } from "react";
import useCliente from "../hooks/useCliente";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";

export interface EditarCliente {
  id: string
  nome: string;
  nomeSocial: string;
  email: string;
  endereco: EditarEndereco;
  telefones: EditarTelefone[];
}

interface EditarEndereco {
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  codigoPostal: string;
  informacoesAdicionais: string;
}

interface EditarTelefone {
  ddd: string;
  numero: string;
}

const FormularioEditarCliente = () => {
    const { editar, listarUm } = useCliente();
    const { id } = useParams();
  
    // Estado para armazenar os dados do cliente
    const [cliente, setCliente] = useState<EditarCliente>({
      id: "",
      nome: "",
      nomeSocial: "",
      email: "",
      endereco: {
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        codigoPostal: "",
        informacoesAdicionais: "",
      },
      telefones: [],
    });
  
    useEffect(() => {
      const fetchCliente = async () => {
        const clienteData = await listarUm(Number(id));
        // Definir o estado do cliente com os dados recuperados
        setCliente(clienteData);
      };
  
      fetchCliente();
    }, []);
  
    // Função para atualizar os dados do cliente
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setCliente((prevCliente) => ({
        ...prevCliente,
        [name]: value,
      }));
    };
  
    // Função para atualizar os dados do endereço
    const handleEnderecoChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setCliente((prevCliente) => ({
        ...prevCliente,
        endereco: {
          ...prevCliente.endereco,
          [name]: value,
        },
      }));
    };
  
    // Função para adicionar um novo telefone
    const adicionarTelefone = () => {
      setCliente((prevCliente) => ({
        ...prevCliente,
        telefones: [
          ...prevCliente.telefones,
          { numero: "", ddd: "" },
        ],
      }));
    };
  
    // Função para atualizar os dados de um telefone
    const handleTelefoneChange = (
      index: number,
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setCliente((prevCliente) => ({
        ...prevCliente,
        telefones: prevCliente.telefones.map((telefone, i) =>
          i === index ? { ...telefone, [name]: value } : telefone
        ),
      }));
    };
  
    // Função para submeter o formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(cliente)
      await editar(Number(id), cliente);
    };
  return (
    <Layout>
<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-neutral-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
    <input
      type="text"
      id="nome"
      name="nome"
      value={cliente.nome}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="nomeSocial" className="block text-gray-700 text-sm font-bold mb-2">Nome Social:</label>
    <input
      type="text"
      id="nomeSocial"
      name="nomeSocial"
      value={cliente.nomeSocial}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={cliente.email}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="estado" className="block text-gray-700 text-sm font-bold mb-2">Estado:</label>
    <input
      type="text"
      id="estado"
      name="estado"
      value={cliente.endereco.estado}
      onChange={handleEnderecoChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="cidade" className="block text-gray-700 text-sm font-bold mb-2">Cidade:</label>
    <input
      type="text"
      id="cidade"
      name="cidade"
      value={cliente.endereco.cidade}
      onChange={handleEnderecoChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="bairro" className="block text-gray-700 text-sm font-bold mb-2">Bairro:</label>
    <input
      type="text"
      id="bairro"
      name="bairro"
      value={cliente.endereco.bairro}
      onChange={handleEnderecoChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="rua" className="block text-gray-700 text-sm font-bold mb-2">Rua:</label>
    <input
      type="text"
      id="rua"
      name="rua"
      value={cliente.endereco.rua}
      onChange={handleEnderecoChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="numero" className="block text-gray-700 text-sm font-bold mb-2">Número:</label>
    <input
      type="text"
      id="numero"
      name="numero"
      value={cliente.endereco.numero}
      onChange={handleEnderecoChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="codigoPostal" className="block text-gray-700 text-sm font-bold mb-2">Código Postal:</label>
    <input
      type="text"
      id="codigoPostal"
      name="codigoPostal"
      value={cliente.endereco.codigoPostal}
      onChange={handleEnderecoChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="informacoesAdicionais" className="block text-gray-700 text-sm font-bold mb-2">Informações Adicionais:</label>
    <textarea
      id="informacoesAdicionais"
      name="informacoesAdicionais"
      value={cliente.endereco.informacoesAdicionais}
      onChange={handleEnderecoChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
  </div>
  <div className="mb-4">
    <h3 className="text-gray-700 text-sm font-bold mb-2">Telefones:</h3>
    {cliente.telefones.map((telefone, index) => (
      <div key={index} className="mb-2">
        <label htmlFor={`ddd${index}`} className="block text-gray-700 text-sm font-bold mb-2">DDD:</label>
        <input
          type="text"
          id={`ddd${index}`}
          name={`ddd`}
          value={telefone.ddd}
          onChange={(e) => handleTelefoneChange(index, e)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor={`numero${index}`} className="block text-gray-700 text-sm font-bold mb-2">Número:</label>
        <input
          type="text"
          id={`numero${index}`}
          name={`numero`}
          value={telefone.numero}
          onChange={(e) => handleTelefoneChange(index, e)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ))}
    <button type="button" onClick={adicionarTelefone} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Adicionar Telefone
    </button>
  </div>
  <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Salvar
  </button>
</form>
    </Layout>

  );
};

export default FormularioEditarCliente;
