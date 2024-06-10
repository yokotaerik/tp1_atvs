import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import BuscaServico from "../servico/buscaServico";
import BuscarCliente from "./buscaCliente";
import buscaCliente from "./buscaCliente";

export default class ListarUmCliente extends Listagem {
  private clientes: Cliente[];

  private entrada: Entrada;

  constructor(clientes: Cliente[]) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  public listar(): void {
    let buscaCliente = new BuscarCliente(this.clientes);

    let cliente = buscaCliente.buscar();

    if (cliente == null) {
      console.log("Sem clientes, você vai falir :P");
      return;
    }

    console.log(`\nLista de todos os clientes:`);
    console.log(`--------------------------------------`);
    console.log("Id: " + cliente.id);
    console.log(`Nome: ` + cliente.nome);
    console.log(`Nome social: ` + cliente.nomeSocial);
    console.log(`CPF: ` + cliente.getCpf.getValor);
    cliente.getRgs.forEach((rg) => console.log(`RG: ${rg.getValor}`));
    cliente.getTelefones.forEach((telefone) =>
      console.log(`Telefone: ${telefone.getDdd} ${telefone.getNumero}`)
    );
    let data = new Date();
    console.log(`Data de cadastro: ${data.toLocaleDateString()}`);
    console.log(`--------------------------------------`);
    console.log(`Pets:`);
    console.log(`--------------------------------------`);
    cliente.getPets.forEach((pet) => {
      console.log(`--------------------------------------`);
      console.log(`ID: ${pet.id}`);
      console.log(`Nome: ${pet.getNome}`);
      console.log(`Raça: ${pet.getRaca}`);
      console.log(`Gênero: ${pet.getGenero}`);
      console.log(`Tipo: ${pet.getTipo}`);
      console.log(`--------------------------------------`);
    });
    console.log(`--------------------------------------`);
    console.log(`Serviços:`);
    console.log(`--------------------------------------`);
    cliente.getServicosConsumidos.forEach((servico) => {
      console.log(`--------------------------------------`);
      console.log(`ID: ${servico.getId}`);
      console.log(`Nome: ${servico.getNome}`);
      console.log(`Preço: ${servico.getValor.toFixed(2)}`);
      console.log(`Duração: ${servico.getRacaDoPet}`);
      console.log(`Duração: ${servico.getTipoDePet}`);
      console.log(`--------------------------------------`);
    });
    console.log(`--------------------------------------`);
    console.log(`Produtos:`);
    console.log(`--------------------------------------`);
    cliente.getProdutosConsumidos.forEach((produto) => {
      console.log(`--------------------------------------`);
      console.log(`ID: ${produto.getId}`);
      console.log(`Nome: ${produto.getNome}`);
      console.log(`Preço: ${produto.getValor.toFixed(2)}`);
      console.log(`Duração: ${produto.getRacaDoPet}`);
      console.log(`Duração: ${produto.getTipoDePet}`);
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
