import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemProdutosMaisConsumidos extends Listagem {
  private clientes: Array<Cliente>;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public pegarOsMaisConsumidos() {
    const todosProdutosConsumidos: string[] = [];
    const todosServicosConsumidos: string[] = [];

    this.clientes.forEach((cliente) => {
      cliente.getProdutosConsumidos.forEach((produto) => {
        todosProdutosConsumidos.push(produto.getNome);
      });

      cliente.getServicosConsumidos.forEach((servico) => {
        todosServicosConsumidos.push(servico.getNome);
      });
    });

    const contagemProdutos: Map<string, number> = this.contarFrequencia(
      todosProdutosConsumidos
    );

    const contagemServicos: Map<string, number> = this.contarFrequencia(
      todosServicosConsumidos
    );

    const contagemTotal = new Map([...contagemProdutos, ...contagemServicos]);

    const maisConsumidos = Array.from(contagemTotal.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    return maisConsumidos;
  }

  private contarFrequencia(array: string[]): Map<string, number> {
    const contagem: Map<string, number> = new Map();

    array.forEach((item) => {
      contagem.set(item, (contagem.get(item) || 0) + 1);
    });

    return contagem;
  }

  public listar(): void {
    const maisConsumidos = this.pegarOsMaisConsumidos();

    if (maisConsumidos.length == 0) {
      console.log(`\nParece que ninguém consumiu nada :P \n`);
      return
    }

    console.log("\nLista dos mais consumidos:");
    console.log("--------------------------------------");
    maisConsumidos.forEach((item) => {
      console.log(`Nome: ${item[0]}, Quantidade: ${item[1]}`);
      console.log("--------------------------------------");
    });
    console.log("\n");
  }
}
