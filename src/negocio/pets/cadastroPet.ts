import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import Cadastro from "../cadastro";
import BuscarCliente from "../cliente/buscaCliente";

export default class CadastroPet extends Cadastro {
  private entrada: Entrada;
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    let buscaCliente = new BuscarCliente(this.clientes);
    let cliente = buscaCliente.buscar();

    if (cliente == null) {
      console.log("\nCliente não encontrado. Cadastro de pet cancelado. \n");
      return;
    }

    let nome = this.entrada.receberTexto("Digite o nome do pet: ");
    let raca = this.entrada.receberTexto("Digite a raça do pet: ");
    let genero = this.entrada.receberTexto("Digite o gênero do pet: ");
    let tipo = this.entrada.receberTexto("Digite o tipo do pet: ");

    let pet = new Pet(cliente.getPets.length + 1, nome, raca, genero, tipo);
    cliente.getPets.push(pet);
    console.log("\nCadastro concluído :)\n");
  }
}
