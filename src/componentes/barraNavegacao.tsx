/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
  tema: string;
};

export default class BarraNavegacao extends Component<props> {
  constructor(props: props | Readonly<props>) {
    super(props);
  }

  render() {
    let tema = this.props.tema;
    return (
      <>
        <nav
          className="flex justify-between px-12 items-center bg-gradient-to-r from-blue-400 to-blue-600 p-5"
        >
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
}
