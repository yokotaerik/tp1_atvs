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
          className="flex justify-between px-12 items-center"
          style={{ backgroundColor: tema, marginBottom: 10 }}
        >
          <h1>PET LOVERS S2</h1>
          <div className="flex gap-2">
            <a href="/clientes">Clientes</a>
            <a href="/produtos">Produtos</a>
            <a href="/servicos">Serviços</a>
          </div>
        </nav>
      </>
    );
  }
}
