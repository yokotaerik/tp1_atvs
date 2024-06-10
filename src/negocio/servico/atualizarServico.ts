import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizar from "../atualizar";
import BuscaServico from "./buscaServico";

export default class AtualizarServico extends Atualizar {
  
  private servicos: Array<Servico>;
  private entrada: Entrada;
  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    let buscarServico = new BuscaServico(this.servicos);
    let servico = buscarServico.buscar()

    if(servico === null){
        console.log("Serviço não encontrado :(")
    }else{
        let execucao = true;


        while (execucao) {
            console.log(`1 - Nome`);
            console.log(`2 - Valor`);
            console.log(`3 - Tipo`);
            console.log(`4 - Raça`);
            console.log(`0 - Sair `)
        let opcao = this.entrada.receberNumero("Selecione uma das opções: ")


        switch (opcao) {
            case 1:
                let nome = this.entrada.receberTexto("Digite o novo nome: ")
                servico.setNome = nome
                break
            case 2: 
                let valor = this.entrada.receberNumero("Digite o novo valor: ")
                servico.setValor = valor
                break
            case 3: 
                let tipo = this.entrada.receberTexto("Digite o novo tipo: ")
                servico.setTipoDePet = tipo
                break
            case 4: 
                let raca = this.entrada.receberTexto("Digite o novo raça: ")
                servico.setRacaDoPet = raca
                break
            case 0:
                execucao = false;
                console.log(`Até mais`);
                break;
            default:
                console.log(`Operação não entendida :(`);
            
    }}}}}