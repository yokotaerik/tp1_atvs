import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

interface ListagemDos5 {
    cliente: Cliente;
    valorTotalConsumido: number;
}

export default class ConsumistasPorValor extends Listagem {
  private clientes: Array<Cliente>;
  private top5Clientes: ListagemDos5[] = [];

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  private pegarOs5(): void {
    const clientesComValorConsumido = this.clientes
      .filter(
        (cliente) =>
          cliente.getProdutosConsumidos.length +
            cliente.getServicosConsumidos.length >
          0
      )
      .map((cliente) => ({
        cliente: cliente,
        valorTotalConsumido: this.pegarValorConsumido(cliente),
      }));

    clientesComValorConsumido.sort(
      (a, b) => b.valorTotalConsumido - a.valorTotalConsumido
    );

    this.top5Clientes = clientesComValorConsumido.slice(0, 5);
  }

  private pegarValorConsumido(cliente: Cliente): number {
    let valorTotal = 0;
    cliente.getProdutosConsumidos.forEach((produto) => {
      valorTotal += produto.getValor;
    });
    cliente.getServicosConsumidos.forEach((servico) => {
      valorTotal += servico.getValor;
    });
    return valorTotal;
  }

  public listar(): void {
    this.pegarOs5();

    console.log(`\nLista dos 5 que mais consumiram em valor:`);
    console.log(`--------------------------------------`);
    this.top5Clientes.forEach((item) => {
      console.log(`Nome: ` + item.cliente.nome);
      console.log(`Nome social: ` + item.cliente.nomeSocial);
      console.log(`CPF: ` + item.cliente.getCpf.getValor);
      console.log(`Valor consumido: ` + item.valorTotalConsumido.toFixed(2) )
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
