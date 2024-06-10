import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Busca from "../busca";

export default class BuscaServico extends Busca {
  private servicos: Servico[];
  private entrada: Entrada;

  constructor(servicos: Servico[]) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public buscar(): Servico | null {
    let id = this.entrada.receberNumero("Digite o ID do serviço: ");

    const produto = this.servicos.find((p) => p.getId === id);

    return produto || null;
  }
}
