import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServico extends Listagem {
  private servicos: Servico[];

  constructor(servicos: Servico[]) {
    super();
    this.servicos = servicos;
  }

  public listar(): void {

    let servicos = this.servicos;
    console.log(`\nLista de todos os servicos:`);
    console.log(`--------------------------------------`);
    servicos.forEach((servico) => {
      console.log("Id: " + servico.getId)
      console.log(`Nome: ` + servico.getNome);
      console.log(`Valor: ` + servico.getValor.toFixed(2))
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
