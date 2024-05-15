import { useEffect, useState } from "react";
import ProdutoServico from "../componentes/produtoServico";
import Layout from "../componentes/layout";
import api from "../utils/api";
import { ProdutoServicoPropsResponse } from "../utils/interfaces";

const MaisConsumidos = () => {
  const [produtos, setProdutos] = useState<ProdutoServicoPropsResponse[]>([]);
  const [servicos, setServicos] = useState<ProdutoServicoPropsResponse[]>([]);

  const [filtroRacaProduto, setFiltroRacaProduto] = useState("");
  const [filtroTipoProduto, setFiltroTipoProduto] = useState("");
  const [filtroRacaServico, setFiltroRacaServico] = useState("");
  const [filtroTipoServico, setFiltroTipoServico] = useState("");

  useEffect(() => {
    getProdutos();
    getServicos();
  }, []);

  const getProdutos = async () => {
    const response = await api.get("/gerenciamento/produtosMaisConsumidos");
    setProdutos(response.data);
  };

  const getServicos = async () => {
    const response = await api.get("/gerenciamento/servicosMaisConsumidos");
    setServicos(response.data);
  };

  const limparFiltros = () => {
    setFiltroRacaProduto("");
    setFiltroTipoProduto("");
    setFiltroRacaServico("");
    setFiltroTipoServico("");
  };

  const filtrarProdutos = (produto: ProdutoServicoPropsResponse) => {
    return (
      (!filtroRacaProduto || produto.raca.toLowerCase().includes(filtroRacaProduto.toLowerCase())) &&
      (!filtroTipoProduto || produto.tipo.toLowerCase().includes(filtroTipoProduto.toLowerCase()))
    );
  };

  const filtrarServicos = (servico: ProdutoServicoPropsResponse) => {
    return (
      (!filtroRacaServico || servico.raca.toLowerCase().includes(filtroRacaServico.toLowerCase())) &&
      (!filtroTipoServico || servico.tipo.toLowerCase().includes(filtroTipoServico.toLowerCase()))
    );
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">
        Produtos Mais Consumidos
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-stretch md:items-center">
        <input
          type="text"
          className="flex-auto bg-gray-100 shadow-md p-2 rounded-md my-4"
          placeholder="Filtre por tipo"
          name="filtroTipoProduto"
          value={filtroTipoProduto}
          onChange={(e) => setFiltroTipoProduto(e.target.value)}
        />
        <input
          type="text"
          className="flex-auto bg-gray-100 shadow-md p-2 rounded-md my-4"
          placeholder="Filtre por raça"
          name="filtroRacaProduto"
          value={filtroRacaProduto}
          onChange={(e) => setFiltroRacaProduto(e.target.value)}
        />
        <button
          className="flex-none bg-blue-500 shadow-md p-2 rounded-md my-4 text-white"
          onClick={limparFiltros}
        >
          Limpar
        </button>
      </div>

      {produtos.filter(filtrarProdutos).map((produto) => (
        <div
          key={produto.id}
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-stretch mb-4 bg-gray-100 rounded-lg p-3 shadow-md"
        >
          <ProdutoServico
            id={produto.id}
            nome={produto.nome}
            valor={produto.valor}
            tipo={produto.tipo}
            raca={produto.raca}
          />
          <p className="text-gray-600 mt-4 md:mt-0">
            Consumidos: {produto.vezesConsumidas} vezes
          </p>
        </div>
      ))}

      <h1 className="text-3xl font-bold mb-6 text-center">
        Serviços Mais Consumidos
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-stretch md:items-center">
        <input
          type="text"
          className="flex-auto bg-gray-100 shadow-md p-2 rounded-md my-4"
          placeholder="Filtre por tipo"
          name="filtroTipoServico"
          value={filtroTipoServico}
          onChange={(e) => setFiltroTipoServico(e.target.value)}
        />
        <input
          type="text"
          className="flex-auto bg-gray-100 shadow-md p-2 rounded-md my-4"
          placeholder="Filtre por raça"
          name="filtroRacaServico"
          value={filtroRacaServico}
          onChange={(e) => setFiltroRacaServico(e.target.value)}
        />
        <button
          className="flex-none bg-blue-500 shadow-md p-2 rounded-md my-4 text-white"
          onClick={limparFiltros}
        >
          Limpar
        </button>
      </div>

      {servicos.filter(filtrarServicos).map((servico) => (
        <div
          key={servico.id}
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-stretch mb-4 bg-gray-100 rounded-lg p-3 shadow-md"
        >
          <ProdutoServico
            id={servico.id}
            nome={servico.nome}
            valor={servico.valor}
            tipo={servico.tipo}
            raca={servico.raca}
          />
          <p className="text-gray-600 mt-4 md:mt-0">
            Consumidos: {servico.vezesConsumidas} vezes
          </p>
        </div>
      ))}
    </Layout>
  );
};

export default MaisConsumidos;
