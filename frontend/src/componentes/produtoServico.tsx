import { Component } from "react";
import { ProdutoServicoProps } from "../utils/interfaces";



export default class ProdutoServico extends Component<ProdutoServicoProps> {
  render() {
    const { id, nome, valor, tipo, raca } = this.props;

    return (
      <div className="flex flex-col sm:flex-row gap-4">
        <p className="text-gray-600">ID: {id}</p>
        <p className="text-gray-600">Nome: {nome}</p>
        <p className="text-gray-600">Valor: {valor.toFixed(2)}</p>
        <p className="text-gray-600">Tipo: {tipo}</p>
        <p className="text-gray-600">Raça: {raca}</p>
      </div>
    );
  }
}
