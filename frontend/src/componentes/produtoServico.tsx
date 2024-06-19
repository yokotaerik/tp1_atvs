import React from "react";
import { ProdutoServicoProps } from "../utils/interfaces";

const ProdutoServico: React.FC<ProdutoServicoProps> = ({
  id,
  nome,
  valor,
  tipo,
  raca,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <p className="text-gray-600">Código: {id}</p>
      <p className="text-gray-600">Nome: {nome}</p>
      {valor ? <p className="text-gray-600">Valor: {valor.toFixed(2)}</p> : null}
      <p className="text-gray-600">Tipo: {tipo}</p>
      <p className="text-gray-600">Raça: {raca}</p>
    </div>
  );
};

export default ProdutoServico;
