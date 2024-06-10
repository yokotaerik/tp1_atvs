import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemProdutosMaisConsumidosFiltrados extends Listagem {
  private clientes: Array<Cliente>;
  private filtro: string | undefined;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public pegarOsMaisConsumidos() {
    let filtro = this.entrada.receberTexto(
      "Digite o tipo ou raça pela para filtrar: "
    );

    this.filtro = filtro;

    const todosProdutosConsumidos: string[] = [];
    const todosServicosConsumidos: string[] = [];

    this.clientes.forEach((cliente) => {
      cliente.getProdutosConsumidos.forEach((produto) => {
        if (
          this.filtro &&
          (produto.getRacaDoPet.toLowerCase() == this.filtro.toLowerCase() ||
            produto.getTipoDePet.toLowerCase() == this.filtro.toLowerCase())
        ) {
          todosProdutosConsumidos.push(produto.getNome);
        }
      });

      cliente.getServicosConsumidos.forEach((servico) => {
        if (
          this.filtro &&
          (servico.getRacaDoPet.toLowerCase() == this.filtro.toLowerCase() ||
            servico.getTipoDePet.toLowerCase() == this.filtro.toLowerCase())
        ) {
          todosServicosConsumidos.push(servico.getNome);
        }
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

  public listar() {
    const maisConsumidos = this.pegarOsMaisConsumidos();

    if (maisConsumidos.length === 0) {
      console.log(
        `\nParece que ninguém consumiu nada relacionado a ${this.filtro}\n`
      );
      return;
    }

    console.log(
      `\nLista dos mais consumidos filtrando por ${this.filtro || "todos"}:`
    );
    console.log("--------------------------------------");
    maisConsumidos.forEach((item) => {
      console.log(`Nome: ${item[0]}, Quantidade: ${item[1]}`);
      console.log("--------------------------------------");
    });
    console.log("\n");
  }
}
