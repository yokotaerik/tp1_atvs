import React from "react";
import Layout from "../../componentes/layout";

const FormularioEditarServico = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold m-8">Editar serviço</h1>
      <form className="flex flex-col w-full gap-4 p-4 bg-neutral-200 rounded-md mt-4 shadow-md ">
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="nome"
            placeholder="Nome"
            value={"Banho"}
          />
        </div>
        <div>
          <label htmlFor="valor">Valor</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="valor"
            placeholder="Valor"
            value={"R$ 100,00"}
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="tipo"
            placeholder="Tipo"
            value={"Porte médio"}
          />
        </div>
        <div>
          <label htmlFor="raca">Raça</label>
          <input
            className="w-full rounded-md p-2"
            type="text"
            id="raca"
            placeholder="Raça"
            value={"Qualquer uma"}
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-400 p-2 w-full rounded-md text-2xl font-bold text-white"
          >
            Salvar
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default FormularioEditarServico;
