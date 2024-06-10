import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

interface ListagemDos5 {
    cliente: Cliente;
    valorTotalConsumido: number;
}

export default class ConsumistasPorValor extends Listagem {
  private clientes: Array<Cliente>;
  private top5Clientes: Array<Cliente> = [];

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  private pegarOs5(): void {
    this.top5Clientes = this.clientes
      .sort((a, b) => {
        return b.getValorTotalGasto - a.getValorTotalGasto;
      })
      .slice(0, 5)
  }
  //   const clientesComValorConsumido = this.clientes
  //     .filter(
  //       (cliente) =>
  //         cliente.getProdutosConsumidos.length +
  //           cliente.getServicosConsumidos.length >
  //         0
  //     )
  //     .map((cliente) => ({
  //       cliente: cliente,
  //       valorTotalConsumido: this.pegarValorConsumido(cliente),
  //     }));

  //   clientesComValorConsumido.sort(
  //     (a, b) => b.valorTotalConsumido - a.valorTotalConsumido
  //   );

  //   this.top5Clientes = clientesComValorConsumido.slice(0, 5);
  // }

  // private pegarValorConsumido(cliente: Cliente): number {
  //   let valorTotal = 0;
  //   cliente.getProdutosConsumidos.forEach((produto) => {
  //     valorTotal += produto.getValor;
  //   });
  //   cliente.getServicosConsumidos.forEach((servico) => {
  //     valorTotal += servico.getValor;
  //   });
  //   return valorTotal;
  // }

  public listar(): void {
    this.pegarOs5();

    console.log(`\nLista dos 5 que mais consumiram em valor:`);
    console.log(`--------------------------------------`);
    this.top5Clientes.forEach((cliente) => {
      console.log(`Nome: ` + cliente.nome);
      console.log(`Nome social: ` + cliente.nomeSocial);
      console.log(`CPF: ` + cliente.getCpf.getValor);
      console.log(`Valor consumido: ` + cliente.getValorTotalGasto.toFixed(2) )
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
