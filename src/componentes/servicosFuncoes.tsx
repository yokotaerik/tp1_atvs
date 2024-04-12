import { Component } from "react";

export default class ServicoFuncoes extends Component {
  render() {
    return (
      <div>
        <div className="">
          <h1 className="text-center mt-10">Serviços</h1>
          <div className="flex flex-col">
            <a href="cadastrar_servico">Cadastrar novo serviço</a>
            {/* <a href="editar_cliente">Editar produto</a> */}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Raça
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deletar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">Tosa</td>
                <td className="px-6 py-4 whitespace-nowrap">50 reais</td>
                <td className="px-6 py-4 whitespace-nowrap">Pequeno porte</td>
                <td className="px-6 py-4 whitespace-nowrap">Pincher</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                    Deletar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
