import React, { useEffect, useState } from "react";
import Layout from "../../componentes/layout";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import useProduto from "../../hooks/useProduto";

const FormularioEditarProduto = () => {
  const { atualizarProduto, } = useProduto();
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");

  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = async () => {
    const response = await api.get(`/produto/achar/${id}`);

    setNome(response.data.nome);
    setValor(response.data.valor);
    setTipo(response.data.tipo);
    setRaca(response.data.raca);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(isNaN(Number(valor)) || Number(valor) === 0){
      alert("Valor inválido");
      return;
    }
    atualizarProduto(Number(id), nome, Number(valor), tipo, raca);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold m-8">Editar produto</h1>
      <form
        className="flex flex-col w-full gap-4 p-4 bg-neutral-200 rounded-md mt-4 shadow-md"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="nome">Nome</label>
          <input
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
            type="submit"
            className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white"
          >
            Editar produto
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default FormularioEditarProduto;
