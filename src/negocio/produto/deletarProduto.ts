import Produto from "../../modelo/produto";
import Deletar from "../deletar";
import BuscaProduto from "./buscaProduto";

export default class DeletarProduto extends Deletar {
  private produtos: Produto[];

  constructor(produtos: Produto[]) {
    super();
    this.produtos = produtos;
  }

  public deletar(): void {
    this.produtos.forEach((produto) => {
      console.log(produto.getId + " - " + produto.getNome);
    });
    let buscaProduto = new BuscaProduto(this.produtos);
    let produto = buscaProduto.buscar();

    if (produto === null) {
      console.log("\n Produto não encontrado. Deletar o produto cancelado. \n");
      return;
    }

    const index = this.produtos.indexOf(produto);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      console.log("\n Produto deletado!\n");
      return
    } else {
      console.log("\nErro ao deletar o Produto.\n");
      return 
    }
  }
}
