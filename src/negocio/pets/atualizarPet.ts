import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Atualizar from "../atualizar";
import BuscarCliente from "../cliente/buscaCliente";
import BuscarPet from "./buscaPet";

export default class AtualizarPet extends Atualizar {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    this.clientes.forEach((cliente) => {
      console.log(cliente.id + " - " + cliente.nome);
    });
    let cliente = new BuscarCliente(this.clientes).buscar();

    if (cliente === null) {
    } else {
      let petsDoCliente = cliente.getPets;
      if(petsDoCliente.length === 0){
        console.log("Cliente não possui pets cadastrados :(");
        return;
      }
      petsDoCliente.forEach((pet) => {
        console.log(pet.id + " - " + pet.getNome);
      });
      let pet = new BuscarPet(cliente.getPets).buscar();

      if (pet === null) {
        console.log("Pet não encontrado :(");
      } else {
        let execucao = true;

        while (execucao) {
          console.log(`1 - Nome`);
          console.log(`2 - Raça`);
          console.log(`3 - Tipo`);
          console.log(`4 - Genero`);

          console.log(`0 - Sair `);
          let opcao = this.entrada.receberNumero("Selecione uma das opções: ");

          switch (opcao) {
            case 1:
              let nome = this.entrada.receberTexto("Digite o novo nome: ");
              pet.setNome = nome;
              break;
            case 2:
              let raca = this.entrada.receberTexto("Digite a nova raça: ");
              pet.setRaca = raca;
              break;
            case 3:
              let genero = this.entrada.receberTexto("Digite o novo genero: ");
              pet.setGenero = genero;
              break;
            case 4:
              let tipo = this.entrada.receberTexto("Digite o novo tipo: ");
              pet.setTipo = tipo;
              break;
            case 0:
              execucao = false;
              break;
            default:
              console.log(`Operação não entendida :(`);
          }
        }
      }
    }
  }
}
