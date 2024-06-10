import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizar from "../atualizar";
import BuscaProduto from "./buscaProduto";

export default class AtualizarProduto extends Atualizar {
  
  private produtos: Array<Produto>;
  private entrada: Entrada;
  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public atualizar(): void {
    let buscarProduto = new BuscaProduto(this.produtos);
    let produto = buscarProduto.buscar()

    if(produto === null){
        console.log("Produto não encontrado :(")
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
                produto.setNome = nome
                break
            case 2: 
                let valor = this.entrada.receberNumero("Digite o novo valor: ")
                produto.setValor = valor
                break
            case 3: 
                let tipo = this.entrada.receberTexto("Digite o novo tipo: ")
                produto.setTipoDePet = tipo
                break
            case 4: 
                let raca = this.entrada.receberTexto("Digite o novo raça: ")
                produto.setRacaDoPet = raca
                break
            case 0:
                execucao = false;
                console.log(`Até mais`);
                break;
            default:
                console.log(`Operação não entendida :(`);
            
    }}}}}