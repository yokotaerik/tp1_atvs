import { useState, useEffect } from "react";
import Layout from "../../componentes/layout";
import ProdutoServico from "../../componentes/produtoServico";
import api from "../../utils/api";
import { ProdutoServicoProps } from "../../utils/interfaces";

const Servico = () => {
  const [servicos, setServicos] = useState<ProdutoServicoProps[]>([]);

  const getProducts = async () => {
    const response = await api.get("/servico/servicos");

    setServicos(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (id: number) => {
    api
      .delete(`/servico/${id}`)
      .then((response) => {
        alert("Serviço deletado com sucesso!");
        if (response.status === 200) {
          getProducts();
        }
      })
      .catch((error) => {
        alert("Erro ao deletar serviço!");
      });
  };

  return (
    <Layout>
      <div className="flex flex-col gap-5  my-10">
        <h1 className="text-center text-7xl font-bold">Serviços</h1>
        <a href="/servico/cadastrar">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded w-full">
            Cadastrar novo serviço
          </button>
        </a>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          {servicos.map((servico: ProdutoServicoProps) => (
            <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md ">
              <ProdutoServico
                id={servico.id}
                nome={servico.nome}
                valor={servico.valor}
                tipo={servico.tipo}
                raca={servico.raca}
              />
              <div className="flex gap-2">
                <a href={`/servico/editar/${servico.id}`}>
                  <button className="bg-blue-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                    Editar
                  </button>
                </a>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                  onClick={() => handleDelete(servico.id)}
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

export default Servico;