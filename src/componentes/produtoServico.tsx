import React from "react";

export interface ProdutoServicoProps {
  id: number;
  nome: string;
  valor: number;
  tipo: string;
  raca: string;
}

const ProdutoServico: React.FC<ProdutoServicoProps> = ({
  id,
  nome,
  valor,
  tipo,
  raca,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <p className="text-gray-600">ID: {id}</p>
      <p className="text-gray-600">Nome: {nome}</p>
      <p className="text-gray-600">Valor: {valor}</p>
      <p className="text-gray-600">Tipo: {tipo}</p>
      <p className="text-gray-600">Raça: {raca}</p>
    </div>
  );
};

export default ProdutoServico;
