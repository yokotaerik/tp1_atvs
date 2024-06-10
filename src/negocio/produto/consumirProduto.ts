import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import BuscarCliente from "../cliente/buscaCliente";
import Consumir from "../consumir";
import BuscaProduto from "./buscaProduto";

export default class ConsumirProduto extends Consumir {
  private produtos: Produto[];
  private clientes: Cliente[];
  private entrada: Entrada;

  constructor(produtos: Produto[], clientes: Cliente[]) {
    super();
    this.produtos = produtos;
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public consumir(): void {
    this.produtos.forEach((produto) => {
      console.log(produto.getId + " - " + produto.getNome);
    });
    let produto = new BuscaProduto(this.produtos).buscar();
    if (produto === null) {
      console.log("\n Produto não encontrado. Operação cancelada. \n");
      return;
    }
    this.clientes.forEach((cliente) => {
      console.log(cliente.id + " - " + cliente.nome);
    });
    let cliente = new BuscarCliente(this.clientes).buscar();
    if (cliente == null) {
      console.log("\nCliente não encontrado. Operação cancelada. \n");
      return;
    }
    let quantidade = this.entrada.receberNumero(
      "Digite quantos desse produto o cliente comprou: "
    );

    for (let i = 0; i < quantidade; i++) {
      cliente.setValorTotalGasto = Number(cliente.getValorTotalGasto) + Number(produto.getValor);
      cliente.setTotalDeVezesConsumidas += 1;
      cliente.getProdutosConsumidos.push(produto);
    }

    console.log("\n Item adicionado com sucesso! \n");
  }
}
