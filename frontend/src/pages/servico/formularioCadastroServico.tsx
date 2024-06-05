import React, { useState } from "react";
import Layout from "../../componentes/layout";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import isEmptyOrWhitespace from "../../utils/verificador";

const FormularioCadastroServico = () => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");
  let nav = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    if(
      !isEmptyOrWhitespace(nome) ||
      !isEmptyOrWhitespace(valor) ||
      !isEmptyOrWhitespace(tipo) ||
      !isEmptyOrWhitespace(raca)
    ){
      alert("Preencha todos os campos");
      return;
    }
    if(isNaN(Number(valor)) || Number(valor) === 0){
      alert("Valor inválido");
      return;
    }
    if (!nome || !valor || !tipo || !raca) {
      alert("Preencha todos os campos");
      return;
    }
    e.preventDefault();
    api
      .post("/servico/cadastrar", { nome, valor, tipo, raca })
      .then((response) => {
        if (response.status === 201) {
          setNome("");
          setValor("");
          setTipo("");
          setRaca("");
          alert("Serviço cadastrado com sucesso!");
          nav("/servico");
        }
      })
      .catch((error) => {
        alert("Erro ao cadastrar serviço!");
      });
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold m-8">Cadastro de serviço</h1>
      <form className="flex flex-col w-full gap-4 p-4 bg-neutral-200 rounded-md mt-4 shadow-md">
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            required
            className="w-full rounded-md p-2"
            type="text"
            id="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="valor">Valor</label>
          <input
            required
            className="w-full rounded-md p-2"
            type="text"
            id="valor"
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <input
            required

            className="w-full rounded-md p-2"
            type="text"
            id="tipo"
            placeholder="Tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="raca">Raça</label>
          <input
            required

            className="w-full rounded-md p-2"
            type="text"
            id="raca"
            placeholder="Raça"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white"
            onClick={handleSubmit}
          >
            Cadastrar serviço
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default FormularioCadastroServico;
