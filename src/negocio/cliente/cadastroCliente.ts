import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
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

  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);
    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do cliente: `
    );
    let nomeSocial = this.entrada.receberTexto(
      `Por favor informe o nome social do cliente: `
    );
    // Pegando informacoes de CPF
    let valorCpf = this.entrada.receberTexto(
      `Por favor informe o número do cpf: `
    );
    let dataCpf = this.entrada.receberTexto(
      `Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `
    );
    let partesDataCpf = dataCpf.split("/");
    let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf();
    let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf();
    let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf();
    let dataEmissaoCpf = new Date(anoCpf, mesCpf, diaCpf);
    let cpf = new CPF(valorCpf, dataEmissaoCpf);

    let cliente = new Cliente(this.clientes.length + 1, nome, nomeSocial, cpf);

    // Pegando as informacoes de RG
    let qntdDeRgs = this.entrada.receberNumero(
      "Quantos RGs o cliente possui? "
    );
    for (let i = 0; i < qntdDeRgs; i++) {
      this.cadastrarRg(cliente);
    }

    let qntdTels = this.entrada.receberNumero(
      "Quantos telefones o cliente possui? "
    );
    for (let i = 0; i < qntdTels; i++) {
      this.cadastrarTelefones(cliente);
    }

    let dataCadastro = Date.now();
    // Criando cliente e adicioando as entidades depdentes e atributos
    cliente.getDataCadastro.setDate(dataCadastro);
    this.clientes.push(cliente);
    console.log(`\nCadastro concluído :)\n`);
  }
}
