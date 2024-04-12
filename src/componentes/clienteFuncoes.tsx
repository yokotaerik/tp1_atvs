import { Component } from "react";

type props = {
  tema: string;
};

export default class ClienteFuncoes extends Component<props> {
  render() {
    let tema = this.props.tema;
    return (
      <div>
        <div className="">
          <h1 className="text-center mt-10">Clientes</h1>
          <div className="flex flex-col">
            <a href="cadastrar_cliente">Cadastrar novo cliente</a>
            <a href="editar_cliente">Editar cliente</a>
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
                  Nome Social
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CPF
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  RG
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Telefone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deletar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">Erik</td>
                <td className="px-6 py-4 whitespace-nowrap">DASDA</td>
                <td className="px-6 py-4 whitespace-nowrap">12345678911</td>
                <td className="px-6 py-4 whitespace-nowrap">53122912-2</td>
                <td className="px-6 py-4 whitespace-nowrap">(12) 99999-9999</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                    Deletar
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">Maria</td>
                <td className="px-6 py-4 whitespace-nowrap">Kira</td>
                <td className="px-6 py-4 whitespace-nowrap">98765431212</td>
                <td className="px-6 py-4 whitespace-nowrap">43098203-2</td>
                <td className="px-6 py-4 whitespace-nowrap">(12) 99009-9999</td>
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
