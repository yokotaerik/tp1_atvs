import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Produto from "../../modelo/produto";
import Busca from "../busca";

export default class BuscaProduto extends Busca {
  private produtos: Produto[];
  private entrada: Entrada;

  constructor(produtos: Produto[]) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public buscar(): Produto | null {
    let id = this.entrada.receberNumero("Digite o ID do produto: ");

    const produto = this.produtos.find((p) => p.getId === id);

    return produto || null;
  }
}
