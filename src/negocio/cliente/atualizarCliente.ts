import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Atualizar from "../atualizar";
import BuscarCliente from "./buscaCliente";

export default class AtualizarCliente extends Atualizar {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  private cadastrarRg(cliente: Cliente): void {
    let valorRg = this.entrada.receberTexto(
      `Por favor informe o número do RG: `
    );
    let dataRg = this.entrada.receberTexto(
      `Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `
    );
    let partesDataRg = dataRg.split("/");
    let anoRg = new Number(partesDataRg[2].valueOf()).valueOf();
    let mesRg = new Number(partesDataRg[1].valueOf()).valueOf();
    let diaRg = new Number(partesDataRg[0].valueOf()).valueOf();
    let dataEmissaoRg = new Date(anoRg, mesRg, diaRg);
    let rg = new RG(valorRg, dataEmissaoRg);
    cliente.getRgs.push(rg);
  }

  private cadastrarTelefones(cliente: Cliente): void {
    // Pegando informacoes de telefone
    let ddd = this.entrada.receberTexto(
      `Digite o ddd do telefone do cliente: `
    );
    let numeroTelefone = this.entrada.receberTexto(
      `Digite o telefone do cliente: `
    );
    let telefone = new Telefone(
      cliente.getTelefones.length + 1,
      ddd,
      numeroTelefone
    );
    cliente.getTelefones.push(telefone);
  }

  public atualizar(): void {
    this.clientes.forEach((cliente) => {
      console.log(cliente.id + " - " + cliente.nome);
    });
    let buscarCliente = new BuscarCliente(this.clientes);
    let cliente = buscarCliente.buscar();

    if (cliente === null) {
      console.log("Cliente não encontrado :(");
    } else {
      let execucao = true;

      while (execucao) {
        console.log(`1 - Nome`);
        console.log(`2 - Razão social`);
        console.log(`3 - Adicionar um novo RG`);
        console.log(`4 - Adcionar um novo teleone`);
        console.log(`5 - Remover telefone`);
        console.log(`0 - Sair `);
        let opcao = this.entrada.receberNumero("Selecione uma das opções: ");

        switch (opcao) {
          case 1:
            let nome = this.entrada.receberTexto("Digite o novo nome: ");
            cliente.setNome = nome;
            break;
          case 2:
            let nomeSocial = this.entrada.receberTexto(
              "Digite o novo nome social: "
            );
            cliente.setNomeSocial = nomeSocial;
            break;
          case 3:
            this.cadastrarRg(cliente);
            break;
          case 4:
            this.cadastrarTelefones(cliente);
            break;
          case 5:
            console.log("Telefones do cliente: ");
            cliente.getTelefones.forEach((telefone) => {
              console.log(
                `ID: ${telefone.getId} - ${telefone.getDdd} ${telefone.getNumero}`
              );
            });
            let idRemoverTelefone = this.entrada.receberNumero(
              "Digite o ID do telefone: "
            );
            cliente.getTelefones.findIndex(
              (telefone) => telefone.getId === idRemoverTelefone
            ) !== -1
              ? cliente.getTelefones.splice(idRemoverTelefone, 1)
              : console.log("Telefone não encontrado :(");
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
