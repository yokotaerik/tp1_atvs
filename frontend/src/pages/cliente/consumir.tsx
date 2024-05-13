import { useState, useEffect } from "react";
import Layout from "../../componentes/layout";
import { ProdutoServicoProps } from "../../utils/interfaces";
import api from "../../utils/api";
import { useParams } from "react-router-dom";

const Consumir = () => {
  const [produtos, setProdutos] = useState<ProdutoServicoProps[]>();
  const [servicos, setServicos] = useState<ProdutoServicoProps[]>();
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [quantidadeProdutos, setQuantidadeProdutos] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetchProducts();
    fetchServices();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/produto/produtos");
      setProdutos(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos");
    }
  };

  const fetchServices = async () => {
    try {
      const response = await api.get("/servico/servicos");
      setServicos(response.data);
    } catch (error) {
      alert("Erro ao buscar serviços");
    }
  };

  const handleProductSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    api.post("/consumir/produto", {
      clienteId: id,
      produtoId: produtoSelecionado,
      quantidade: quantidadeProdutos
    }
    )
  };

  const handleServiceSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <div className="flex gap-5 flex-col">
        <form className="mb-6" onSubmit={handleProductSubmit}>
          <h2 className="text-xl font-semibold mb-4">Adicionar Produto</h2>
          <select
            name=""
            id=""
            className="bg-gray-200 py-2 rounded-md"
            value={produtoSelecionado}
            onChange={(event) => {
              console.log(event.target.value)
              setProdutoSelecionado(event.target.value)
            }}
          >
            <option value="">Selecione um produto</option>
            {produtos &&
              produtos.map((produto) => (
                <option key={produto.id} value={produto.id}>
                  {produto.nome}
                </option>
              ))}
          </select>
          <input
            type="text"
            className="bg-gray-200 py-2 rounded-md text-end"
            placeholder="Quantidade de produtos"
            value={quantidadeProdutos}
            onChange={(event) => setQuantidadeProdutos(event.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Adicionar
          </button>
        </form>
        <form className="mb-6" onSubmit={handleServiceSubmit}>
          <h2 className="text-xl font-semibold mb-4">Adicionar Servico</h2>
          <select
            name=""
            id=""
            className="bg-gray-200 py-2 rounded-md"
            value={servicoSelecionado}
            onChange={(event) => setServicoSelecionado(event.target.value)}
          >
            <option value="">Selecione um serviço</option>

            {servicos &&
              servicos.map((servico) => (
                <option key={servico.id} value={servico.id}>
                  {servico.nome}
                </option>
              ))}
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Adicionar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Consumir;
