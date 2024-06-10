import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

interface ListagemDos10 {
  cliente: Cliente;
  quantidadeTotalConsumida: number;
}

export default class Consumistas extends Listagem {
  private clientes: Array<Cliente>;
  private top10Clientes: Array<ListagemDos10> = [];

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  private pegarOsDez(): void {
    const top10 = this.clientes
      .filter(
        (cliente) =>
          cliente.getProdutosConsumidos.length +
            cliente.getServicosConsumidos.length >
          0
      )
      .map((cliente) => ({
        cliente: cliente,
        quantidadeTotalConsumida:
          cliente.getProdutosConsumidos.length +
          cliente.getServicosConsumidos.length,
      }))
      .sort((a, b) => b.quantidadeTotalConsumida - a.quantidadeTotalConsumida) 
      .slice(0, 10);

    this.top10Clientes = top10;
  }

  public listar(): void {
    this.pegarOsDez();

    console.log(`\nLista dos 10 que mais consumiram:`);
    console.log(`--------------------------------------`);
    this.top10Clientes.forEach((item) => {
      console.log(`Nome: ` + item.cliente.nome);
      console.log(`Nome social: ` + item.cliente.nomeSocial);
      console.log(`CPF: ` + item.cliente.getCpf.getValor);
      console.log("Vezes que consumiu: " + item.quantidadeTotalConsumida) 
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
