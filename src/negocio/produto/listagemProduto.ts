import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem {
  private produtos: Produto[];

  constructor(produtos: Produto[]) {
    super();
    this.produtos = produtos;
  }

  public listar(): void {

    let produtos = this.produtos;
    console.log(`\nLista de todos os produtos:`);
    console.log(`--------------------------------------`);
    produtos.forEach((produto) => {
      console.log("Id: " + produto.getId)
      console.log(`Nome: ` + produto.getNome);
      console.log(`Valor: ` + produto.getValor.toFixed(2))
      console.log(`Raça: ` + produto.getRacaDoPet)
      console.log(`Tipo: ` + produto.getTipoDePet)
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
