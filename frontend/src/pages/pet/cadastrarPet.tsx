import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../componentes/layout";
import api from "../../utils/api";

const FormularioCadastrarPet = () => {
  const { id } = useParams();
  let nav = useNavigate();

  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");
  const [genero, setGenero] = useState("");

  const handleSubmit = async () => {
    if(!nome || !tipo || !raca || !genero) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      const response = await api.post(`/cliente/${id}/pet`, {
        nome,
        tipo,
        raca,
        genero,
      });
      if (response.status === 201) {
        setNome("");
        setTipo("");
        setRaca("");
        setGenero("");
        alert("Pet cadastrado com sucesso");
        nav(`/clientes/${id}`);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar pet");
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold m-8">Cadastrar pet</h1>
      <form className="flex flex-col w-full gap-4 p-4 bg-neutral-200 rounded-md mt-4 shadow-md ">
        <div>
          <label htmlFor="nome">Nome do Pet</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="nome"
            placeholder="Nome do pet"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white"
            onClick={handleSubmit}
          >
            Salvar
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default FormularioCadastrarPet;
