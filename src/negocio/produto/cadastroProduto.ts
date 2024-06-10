import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
  private entrada: Entrada;
  private produtos: Produto[];

  constructor(produtos: Produto[]) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    let nome = this.entrada.receberTexto("Digite o nome do produto: ");
    let valor = this.entrada.receberNumero("Digite o valor do produto: ");
    let tipo = this.entrada.receberTexto(
      "Digite o tipo de pet que esse produto atende: "
    );
    let raca = this.entrada.receberTexto(
      "Digite a raça de pet que esse produto atende: "
    );

    let produto = new Produto(
      this.produtos.length + 1,
      nome,
      valor,
      tipo,
      raca
    );
    this.produtos.push(produto);
    console.log("\nCadastro concluído :)\n");
  }
}
8;
