import React from "react";

type PetInfoProps = {
  id: string;
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
};

const PetInfo: React.FC<PetInfoProps> = ({
  id,
  nome,
  tipo,
  raca,
  genero
}) => {
  return (
    <div>
      <div className="bg-neutral-200 p-5 rounded-lg mb-5 shadow-md">
        <p className="mb-1">ID: {id}</p>
        <p className="mb-1">Nome: {nome}</p>
        <p className="mb-1">Tipo: {tipo}</p>
        <p className="mb-1">Raça: {raca}</p>
        <p className="mb-1">Gênero: {genero}</p>
        <div className="flex gap-2 mt-2">
          <a href="/pet/editar/1">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
              Editar
            </button>
          </a>
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetInfo;
