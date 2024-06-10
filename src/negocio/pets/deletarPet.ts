import Cliente from "../../modelo/cliente";
import BuscarCliente from "../cliente/buscaCliente";
import Deletar from "../deletar";
import BuscarPet from "./buscaPet";

export default class DeletarPet extends Deletar {
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
  }

  public deletar(): void {
    let buscaCliente = new BuscarCliente(this.clientes);
    let cliente = buscaCliente.buscar();

    if (cliente === null) {
      console.log("\nCliente não encontrado. Deletar o pet cancelado. \n");
      return;
    }

    let petsDoCliente = cliente.getPets;

    let buscaPet = new BuscarPet(petsDoCliente);
    let pet = buscaPet.buscar();

    if (pet === null) {
      console.log("\nPet não encontrado. Deletar o pet cancelado. \n");
      return;
    }

    const index = petsDoCliente.indexOf(pet);
    if (index !== -1) {
      petsDoCliente.splice(index, 1);
      console.log("\nPet deletado!\n");
    } else {
      console.log("\nErro ao deletar o pet.\n");
    }
  }
}
