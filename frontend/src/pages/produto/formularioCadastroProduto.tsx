import React, { useState } from "react";
import Layout from "../../componentes/layout";
import api from "../../utils/api";
import useProduto from "../../hooks/useProduto";
import isEmptyOrWhitespace from "../../utils/verificador";

const FormularioCadastroProduto = () => {
  const { adicionarProduto } = useProduto();
  const [produto, setProduto] = useState({
    nome: "",
    valor: "",
    tipo: "",
    raca: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if(
      isEmptyOrWhitespace(produto.nome) ||
      isEmptyOrWhitespace(produto.valor) ||
      isEmptyOrWhitespace(produto.tipo) ||
      isEmptyOrWhitespace(produto.raca)
    ){
      alert("Preencha todos os campos");
      return;
    }
    if(isNaN(Number(produto.valor)) || Number(produto.valor) === 0){
      alert("Valor inválido");
      return;
    }
    if (!produto.nome || !produto.valor || !produto.tipo || !produto.raca) {
      alert("Preencha todos os campos");
      return;
    }
    e.preventDefault();
    const sucess = await adicionarProduto(produto.nome, Number(produto.valor), produto.tipo, produto.raca);
    if (sucess) {
      setProduto({
        nome: "",
        valor: "",
        tipo: "",
        raca: ""
      });
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold m-8">Cadastro de produto</h1>
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
            name="nome"
            placeholder="Nome"
            value={produto.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="valor">Valor</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="valor"
            name="valor"
            placeholder="Valor"
            value={produto.valor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Tipo"
            value={produto.tipo}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="raca">Raça</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="raca"
            name="raca"
            placeholder="Raça"
            value={produto.raca}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white"
          >
            Cadastrar produto
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default FormularioCadastroProduto;