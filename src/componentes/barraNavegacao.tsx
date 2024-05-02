/* eslint-disable jsx-a11y/anchor-is-valid */

export default function BarraNavegacao() {
  return (
    <>
      <nav className="flex justify-between px-12 items-center bg-gradient-to-r from-blue-400 to-blue-600 p-5">
        <h1 className="font-black text-3xl text-white">PET LOVERS</h1>
        <div className="flex gap-4 text-white text-xl font-bold">
          <a href="/cliente">Clientes</a>
          <a href="/produto">Produtos</a>
          <a href="/servico">Serviços</a>
        </div>
      </nav>
    </>
  );
}
