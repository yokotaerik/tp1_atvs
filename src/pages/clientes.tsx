export default function Clientes(){
    return (
      <div>
        <div className="flex flex-col gap-5 my-10">
          <h1 className="text-center text-7xl font-bold">Clientes</h1>
          <a href="/cliente/cadastrar">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded w-full">
              Cadastrar novo cliente
            </button>
          </a>
        </div>
        <div>
          <div className="flex flex-col items-start md:flex-row gap-5 md:items-center bg-white p-3 rounded-md border-4">
            <p className="">ID: 1</p>
            <p className="">Nome: Erik</p>
            <p className="">Nome social: DASDA</p>
            <p className="">CPF: 12345678911</p>
            <div className="flex gap-2">
              <a href="/cliente/1">
                <button className="bg-blue-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                  Detalhes
                </button>
              </a>
              <a href="/cliente/editar/1">
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
      </div>
    );
  }
