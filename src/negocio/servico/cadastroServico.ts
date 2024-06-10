import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
  private entrada: Entrada;
  private servicos: Servico[];

  constructor(servicos: Servico[]) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    let nome = this.entrada.receberTexto("Digite o nome do serviço: ");
    let valor = this.entrada.receberNumero("Digite o valor do serviço: ");
    let tipo = this.entrada.receberTexto("Digite o tipo de pet atendido: ");
    let raca = this.entrada.receberTexto("Digite a raça de pet atendido: ");


    let servico = new Servico(this.servicos.length + 1, nome, valor, tipo, raca);
    this.servicos.push(servico);
    console.log("\nCadastro concluído :)\n");
  }
}
