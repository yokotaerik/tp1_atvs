import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import BuscarCliente from "../cliente/buscaCliente";
import Consumir from "../consumir";
import BuscaServico from "./buscaServico";

export default class ConsumirServico extends Consumir {
  private servicos: Servico[];
  private clientes: Cliente[];

  constructor(servicos: Servico[], clientes: Cliente[]) {
    super();
    this.servicos = servicos;
    this.clientes = clientes;
  }

  public consumir(): void {
    let servico = new BuscaServico(this.servicos).buscar();
    if (servico === null) {
        console.log("\n Serviço não encontrado. Operação cancelada. \n");
        return;
      }
    let cliente = new BuscarCliente(this.clientes).buscar();
    if (cliente == null) {
        console.log("\nCliente não encontrado. Operação cancelada. \n");
        return;
      }

    cliente.getServicosConsumidos.push(servico);
    console.log("\n Item adicionado com sucesso! \n");
  }
}
