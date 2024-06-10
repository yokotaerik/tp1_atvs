import { useState, useEffect } from "react";
import Layout from "../../componentes/layout";
import axios from "axios";
import api from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import isEmptyOrWhitespace from "../../utils/verificador";

const FormularioEditarPet = () => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");
  const [genero, setGenero] = useState("");
  const [clienteId, setClienteId] = useState("");
  const { id } = useParams();
  const nav = useNavigate();
  const handleUpdate = () => {
    if(
      isEmptyOrWhitespace(nome) ||
      isEmptyOrWhitespace(genero) ||
      isEmptyOrWhitespace(tipo) ||
      isEmptyOrWhitespace(raca)
    ) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      api.put(`/pet/${id}`, {
        nome,
        tipo,
        raca,
        genero,
      });
      alert("Pet atualizado com sucesso");
      nav(`/clientes/${clienteId}`);

    } catch {
      alert("Erro ao atualizar o pet");
    }
  };

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await api.get(`/pet/${id}`);
        const petData = response.data;

        setNome(petData.nome);
        setTipo(petData.tipo);
        setRaca(petData.raca);
        setGenero(petData.genero);
        setClienteId(petData.clienteId);
      } catch (error) {
        alert("Erro ao obter os dados do pet");
      }
    };

    fetchPetData();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold m-8">Editar pet</h1>
      <form className="flex flex-col w-full gap-4 p-4 bg-neutral-200 rounded-md mt-4 shadow-md">
        <div>
          <label htmlFor="nome">Nome do Pet</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="nome"
            placeholder="Nome do pet"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="nomeSocial"
            placeholder="Tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Raça</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="raça"
            placeholder="Raça"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cpf">Gênero</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="genero"
            placeholder="Gênero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white"
            onClick={handleUpdate}
          >
            Salvar
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default FormularioEditarPet;
