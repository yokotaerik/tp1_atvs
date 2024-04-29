import React, { useState } from "react";

interface Cliente {
  id: number;
  nome: string;
  nomeSocial: string;
  email: string;
  endereco: Endereco;
  telefones: Telefone[];
}

interface Endereco {
  id: number;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  codigoPostal: string;
  informacoesAdicionais: string;
}

interface Telefone {
  id: number;
  numero: string;
  ddd: string;
}

// Componente de formulário
const FormularioDeCadastro = () => {
  // Estado para armazenar os dados do cliente
  const [cliente, setCliente] = useState<Cliente>({
    id: 0,
    nome: "",
    nomeSocial: "",
    email: "",
    endereco: {
      id: 0,
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
        { id: prevCliente.telefones.length + 1, numero: "", ddd: "" },
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(cliente); // Aqui você pode fazer o que quiser com os dados do cliente
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={cliente.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="nomeSocial">Nome Social:</label>
        <input
          type="text"
          id="nomeSocial"
          name="nomeSocial"
          value={cliente.nomeSocial}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={cliente.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="estado">Estado:</label>
        <input
          type="text"
          id="estado"
          name="estado"
          value={cliente.endereco.estado}
          onChange={handleEnderecoChange}
        />
      </div>
      <div>
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={cliente.endereco.cidade}
          onChange={handleEnderecoChange}
        />
      </div>
      <div>
        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={cliente.endereco.bairro}
          onChange={handleEnderecoChange}
        />
      </div>
      <div>
        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={cliente.endereco.rua}
          onChange={handleEnderecoChange}
        />
      </div>
      <div>
        <label htmlFor="numero">Número:</label>
        <input
          type="text"
          id="numero"
          name="numero"
          value={cliente.endereco.numero}
          onChange={handleEnderecoChange}
        />
      </div>
      <div>
        <label htmlFor="codigoPostal">Código Postal:</label>
        <input
          type="text"
          id="codigoPostal"
          name="codigoPostal"
          value={cliente.endereco.codigoPostal}
          onChange={handleEnderecoChange}
        />
      </div>
      <div>
        <label htmlFor="informacoesAdicionais">Informações Adicionais:</label>
        <textarea
          id="informacoesAdicionais"
          name="informacoesAdicionais"
          value={cliente.endereco.informacoesAdicionais}
          onChange={handleEnderecoChange}
        ></textarea>
      </div>
      <div>
        <h3>Telefones:</h3>
        {cliente.telefones.map((telefone, index) => (
          <div key={index}>
            <label htmlFor={`ddd${index}`}>DDD:</label>
            <input
              type="text"
              id={`ddd${index}`}
              name={`ddd`}
              value={telefone.ddd}
              onChange={(e) => handleTelefoneChange(index, e)}
            />
            <label htmlFor={`numero${index}`}>Número:</label>
            <input
              type="text"
              id={`numero${index}`}
              name={`numero`}
              value={telefone.numero}
              onChange={(e) => handleTelefoneChange(index, e)}
            />
          </div>
        ))}

        <button type="button" onClick={adicionarTelefone}>
          Adicionar Telefone
        </button>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormularioDeCadastro;
