import Cliente from "../../modelo/cliente";
import Pet from "../../modelo/pet";
import BuscarCliente from "../cliente/buscaCliente";
import Listagem from "../listagem";

export default class ListagemPets extends Listagem {
  private clientes: Cliente[];

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    let buscaCliente = new BuscarCliente(this.clientes);
    let cliente = buscaCliente.buscar();

    if (cliente == null) {
      console.log("\nCliente não encontrado. Listagem de pets cancelada. \n");
      return;
    }

    let pets = cliente.getPets;
    console.log(`\nLista de todos os pets de ` + cliente.nome);
    console.log(`--------------------------------------`);
    pets.forEach((pet) => {
      console.log("Id: " + pet.id);
      console.log(`Nome: ` + pet.getNome);
      console.log(`Genero: ` + pet.getGenero);
      console.log(`Raça: ` + pet.getRaca);
      console.log(`Tipo: ` + pet.getTipo);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
