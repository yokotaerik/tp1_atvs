import Layout from "../../componentes/layout";

const Clientes = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-5 my-10">
        <h1 className="text-center text-7xl font-bold ">Clientes</h1>
        <a href="/clientes/cadastrar">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded w-full shadow-md">
            Cadastrar novo cliente
          </button>
        </a>
      </div>
      <div>
        <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-neutral-200 p-3 rounded-md shadow-md">
          <p className="">ID: 1</p>
          <p className="">Nome: Erik</p>
          <p className="">Nome social: DASDA</p>
          <p className="">CPF: 12345678911</p>
          <div className="flex gap-2">
            <a href="/clientes/1">
              <button className="bg-blue-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                Detalhes
              </button>
            </a>
            <a href="/clientes/editar/1">
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

export default Clientes;
