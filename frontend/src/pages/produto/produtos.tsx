import React, { useEffect, useState } from "react";
import ProdutoServico from "../../componentes/produtoServico";
import Layout from "../../componentes/layout";
import api from "../../utils/api";
import { ProdutoServicoProps } from "../../utils/interfaces";

const Produtos = () => {
  const [produtos, setProdutos] = useState<ProdutoServicoProps[]>([]);

  const getProducts = async () => {
    const response = await api.get("/produto/produtos");

    setProdutos(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (id: number) => {
    api
      .delete(`/produto/${id}`)
      .then((response) => {
        alert("Produto deletado com sucesso!");
        if (response.status === 200) {
          getProducts();
        }
      })
      .catch((error) => {
        alert("Erro ao deletar produto! Não é possivel deletar produtos que estão registrados a um cliente");
      });
  };


  return (
    <Layout>
      <div className="flex flex-col gap-5 my-10">
        <h1 className="text-center text-7xl font-bold">Produtos</h1>
        <a href="/produto/cadastrar">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded w-full">
            Cadastrar novo produto
          </button>
        </a>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          {produtos.map((produto) => (
            <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md ">
              <ProdutoServico
                id={produto.id}
                nome={produto.nome}
                valor={produto.valor}
                tipo={produto.tipo}
                raca={produto.raca}
              />
              <div className="flex gap-2">
                <a href={`/produto/editar/${produto.id}`}>
                  <button className="bg-blue-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                    Editar
                  </button>
                </a>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                  onClick={() => handleDelete(produto.id)}
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Produtos;
