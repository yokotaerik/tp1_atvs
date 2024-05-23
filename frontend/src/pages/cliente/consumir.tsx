import { useState, useEffect } from "react";
import Layout from "../../componentes/layout";
import {
  ClienteCompletoProps,
  ClienteCompletoResponse,
  ProdutoServicoProps,
} from "../../utils/interfaces";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import { PetInfoProps } from "./cliente";

const Consumir = () => {
  const [produtos, setProdutos] = useState<ProdutoServicoProps[]>();
  const [servicos, setServicos] = useState<ProdutoServicoProps[]>();
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [quantidadeProdutos, setQuantidadeProdutos] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState("");
  const [cliente, setCliente] = useState<ClienteCompletoResponse>();
  const [pet, setPet] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetchProducts();
    fetchServices();
    fetchCliente();
  }, []);

  const fetchCliente = async () => {
    try {
      const response = await api.get(`/cliente/achar/${id}`);
      setCliente(response.data);
    } catch (error) {
      alert("Erro ao buscar cliente");
    }
  };

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

  const handleProductSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (quantidadeProdutos === "" || isNaN(Number(quantidadeProdutos)))
      return alert("Quantidade de produtos inválida");
    try {
      const response = await api.post("/consumir/produto", {
        clienteId: id,
        produtoId: produtoSelecionado,
        quantidade: quantidadeProdutos,
      });
      if (response.status === 200) {
        alert("Produto adicionado ao cliente com sucesso");
      }
    } catch (error) {
      alert("Erro ao adicionar produto ao cliente");
    }
  };

  const handleServiceSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await api.post("/consumir/servico", {
        clienteId: Number(id),
        servicoId: Number(servicoSelecionado),
        petId: Number(pet),
      });
      if (response.status === 200) {
        alert("Serviço adicionado ao cliente com sucesso");
      }
    } catch (error) {
      alert("Erro ao adicionar serviço ao cliente");
    }
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
              console.log(event.target.value);
              setProdutoSelecionado(event.target.value);
            }}
            required
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
            className="bg-gray-200 py-2 rounded-md text-end px-2"
            placeholder="Quantidade de produtos"
            value={quantidadeProdutos}
            onChange={(event) => setQuantidadeProdutos(event.target.value)}
            required
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
            required
          >
            <option value="">Selecione um serviço</option>
            {servicos &&
              servicos.map((servico) => (
                <option key={servico.id} value={servico.id}>
                  {servico.nome}
                </option>
              ))}
          </select>
          <select
            name=""
            id=""
            value={pet}
            onChange={(e) => setPet(e.target.value)}
            className="bg-gray-200 py-2 rounded-md text-end px-2"
          >
            <option value="">Selecione o pet do um cliente</option>
            {cliente &&
              cliente.pets.map((pet) => (
                <option key={pet.id} value={pet.id}>
                  {pet.nome}
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
