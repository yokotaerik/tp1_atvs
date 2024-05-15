/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const BarraNavegacao = () => {
  return (
    <>
      <nav className="flex justify-between px-2 md:px-12 items-center bg-gradient-to-r from-blue-400 to-blue-600 p-5">
        <h1 className="hidden md:block font-black text-3xl text-white">PET LOVERS</h1>
        <div className="flex gap-2 md:gap-4 text-white text-xl font-bold justify-around w-full">
          <a href="/">Home</a>
          <a href="/clientes">Clientes</a>
          <a href="/produto">Produtos</a>
          <a href="/servico">Serviços</a>
        </div>
      </nav>
    </>
  );
};

export default BarraNavegacao;
