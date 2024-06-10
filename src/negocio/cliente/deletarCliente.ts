import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "../deletar";
import BuscarCliente from "./buscaCliente";

export default class DeletarCliente extends Deletar {
  private clientes: Cliente[];


  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
  }

  public deletar(): void {
    const buscarCliente = new BuscarCliente(this.clientes)
    let cliente = buscarCliente.buscar()

    if (cliente === null) {
      console.log("\nCliente não encontrado. Deletar o pet cancelado. \n");
      return;
    }

    const indice = this.clientes.findIndex(
      (c) => c.id ===cliente.id
    );
    if (indice !== -1) {
      this.clientes.splice(indice, 1);
      console.log("\nCliente deletado!\n");
    } else {
      console.log("\nCliente não encontrado.\n");
    }
  }
}
