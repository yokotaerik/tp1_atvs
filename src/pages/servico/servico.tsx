import React from "react";
import Layout from "../../componentes/layout";

const Servico = () => {
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
        <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md">
          <p className="">ID: 1</p>
          <p className="">Nome: Tosa</p>
          <p className="">Valor: 100 reais</p>
          <p className="">Raça: Qualquer</p>
          <p className="">Tipo: Pequeno porte</p>
          <div className="flex gap-2">
            <a href="/servico/editar/1">
              <button className="bg-blue-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                Editar
              </button>
            </a>
            <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
              Deletar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Servico;
