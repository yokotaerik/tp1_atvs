import Servico from "../../modelo/servico";
import Deletar from "../deletar";
import BuscaServico from "./buscaServico";

export default class DeletarServico extends Deletar {
  private servicos: Servico[];

  constructor(servicos: Servico[]) {
    super();
    this.servicos = servicos;
  }

  public deletar(): void {
    this.servicos.forEach((servico) => {
      console.log(servico.getId + " - " + servico.getNome);
    });
    let buscaServico = new BuscaServico(this.servicos);
    let servico = buscaServico.buscar();

    if (servico === null) {
      console.log("\n Serviço não encontrado. Deletar o serviço cancelado. \n");
      return;
    }

    const index = this.servicos.indexOf(servico);
    if (index !== -1) {
      this.servicos.splice(index, 1);
      console.log("\n Serviço deletado!\n");
    } else {
      console.log("\nErro ao deletar o serviço.\n");
    }
  }
}
