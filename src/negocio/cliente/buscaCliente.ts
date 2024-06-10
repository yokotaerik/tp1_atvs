import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Busca from "../busca";

export default class BuscarCliente extends Busca {
  private clientes: Cliente[];
  private entrada: Entrada;

  constructor(clientes: Cliente[]) {
    super()
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  public buscar(): Cliente | null {
    let id = this.entrada.receberNumero(
      "Digite o ID do cliente: "
    );

    const clienteEncontrado = this.clientes.find(
      (c) => c.id === id
    );


    return clienteEncontrado || null;
  }
}
