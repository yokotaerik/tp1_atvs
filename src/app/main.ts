import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import AtualizarCliente from "../negocio/cliente/atualizarCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListarUmCliente from "../negocio/cliente/listaUmCliente";
import Consumistas from "../negocio/listagens/consumistas";
import ConsumistasPorValor from "../negocio/listagens/consumitasPorValor";
import ListagemProdutosMaisConsumidos from "../negocio/listagens/listagemProdutoServicosMaisConsumidos";
import ListagemProdutosMaisConsumidosFiltrados from "../negocio/listagens/listagemProdutoServicosMaisConsumidosComFIltro";
import AtualizarPet from "../negocio/pets/atualizarPet";
import CadastroPet from "../negocio/pets/cadastroPet";
import DeletarPet from "../negocio/pets/deletarPet";
import ListagemPets from "../negocio/pets/listagemPet";
import AtualizarProduto from "../negocio/produto/atualizarProduto";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ConsumirProduto from "../negocio/produto/consumirProduto";
import DeletarProduto from "../negocio/produto/deletarProduto";
import ListagemProdutos from "../negocio/produto/listagemProduto";
import AtualizarServico from "../negocio/servico/atualizarServico";
import CadastroServico from "../negocio/servico/cadastroServico";
import ConsumirServico from "../negocio/servico/consumirServico";
import DeletarServico from "../negocio/servico/deletarServico";
import ListagemServico from "../negocio/servico/listagemServico";

console.log(
  `Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`
);
let empresa = new Empresa();

// POPULANDO O BANCO
const clientsData = [
  {
    id: 1,
    nome: "Jose Da Silva",
    nomeSocial: "Joana Silva",
    cpf: "123",
    dataEmissaoCpf: "01/01/2000",
    rg: "12345678",
    dataEmissaoRg: "01/01/2010",
    ddd: "11",
    numeroTelefone: "99999-9999",
  },
  {
    id: 2,
    nome: "Maria Kira",
    nomeSocial: "Mario Almdeira",
    cpf: "321",
    dataEmissaoCpf: "02/02/2001",
    rg: "87654321",
    dataEmissaoRg: "02/02/2011",
    ddd: "22",
    numeroTelefone: "88888-8888",
  },
];
clientsData.forEach((clientData) => {
  const cpf = new CPF(clientData.cpf, new Date(clientData.dataEmissaoCpf));

  const cliente = new Cliente(
    clientData.id,
    clientData.nome,
    clientData.nomeSocial,
    cpf
  );

  empresa.getClientes.push(cliente);
});

const produtosData = [
  {
    id: 1,
    nome: "Racao de gato",
    valor: 20,
    tipo: "medio",
    raca: "persa",
  },
  {
    id: 2,
    nome: "Racao de poodle",
    valor: 15,
    tipo: "medio",
    raca: "poodle",
  },
  {
    id: 3,
    nome: "Racao de passaro",
    valor: 100,
    tipo: "pequeno",
    raca: "arara",
  },
];

produtosData.forEach((produtoData) => {
  const produto = new Produto(
    produtoData.id,
    produtoData.nome,
    produtoData.valor,
    produtoData.tipo,
    produtoData.raca
  );

  empresa.getProdutos.push(produto);
});

const servicoData = [
  {
    id: 1,
    nome: "Tosa de gato",
    valor: 200,
    tipo: "medio",
    raca: "persa",
  },
  {
    id: 2,
    nome: "Tosa de cachorro",
    valor: 100,
    tipo: "medio",
    raca: "poodle",
  },
  {
    id: 3,
    nome: "Tosa de passaro",
    valor: 500,
    tipo: "pequeno",
    raca: "arara",
  },
];

servicoData.forEach((data) => {
  const servico = new Servico(
    data.id,
    data.nome,
    data.valor,
    data.tipo,
    data.raca
  );

  empresa.getServicos.push(servico);
});

let execucao = true;

while (execucao) {
  console.log(`Opções:`);
  // Clientes
  console.log("\n-- Cliente --")
  console.log(`1 - Cadastrar cliente`);
  console.log(`2 - Listar todos os clientes`);
  console.log(`3 - Listar um cliente`);
  console.log(`4 - Atualizar o cliente`);
  console.log(`5 - Deletar um cliente`);
  // Pets
  console.log("\n -- Pet --")
  console.log(`6 - Cadastrar pet de um cliente`);
  console.log(`7 - Listar pets de um cliente`);
  console.log(`8 - Atualizar o pet`);
  console.log(`9 - Deletar um pet de um cliente`);
  console.log("\n -- Produto --")
  // Produtos
  console.log("10 - Cadastrar um produto");
  console.log("11 - Listar os produtos");
  console.log("12 - Atualizar o produto");
  console.log("13 - Deletar um produto");
  // Serviços
  console.log("\n -- Serviço --")
  console.log("14 - Cadastrar um serviço");
  console.log("15 - Listar os serviços");
  console.log("16 - Atualizar o serviço");
  console.log("17 - Deletar um serviço");
  // Operações Especiais
  console.log("\n -- Consumir --")
  console.log("18 - Adicionar um produto ao cliente");
  console.log("19 - Adicionar um serviço ao cliente");
  console.log("\n -- Listagens --")
  console.log("20 - Listar os clientes que mais consumiram em valor");
  console.log("21 - Listar os clientes que mais consumiram em quantidade");
  console.log("22 - Listar os produtos e serviços mais consumidos");
  console.log("23 - Listar os produtos e serviços mais consumidos com filtro");
  console.log(`0 - Sair`);

  let entrada = new Entrada();
  let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

  switch (opcao) {
    case 1:
      new CadastroCliente(empresa.getClientes).cadastrar();
      break;
    case 2:
      new ListagemClientes(empresa.getClientes).listar();
      break;
    case 3:
      new ListarUmCliente(empresa.getClientes).listar();
      break;
    case 4:
      new AtualizarCliente(empresa.getClientes).atualizar();
      break;
    case 5:
      new DeletarCliente(empresa.getClientes).deletar();
      break;
    case 6:
      new CadastroPet(empresa.getClientes).cadastrar();
      break;
    case 7:
      new ListagemPets(empresa.getClientes).listar();
      break;
    case 8:
      new AtualizarPet(empresa.getClientes).atualizar();
      break;
    case 9:
      new DeletarPet(empresa.getClientes).deletar();
      break;
    case 10:
      new CadastroProduto(empresa.getProdutos).cadastrar();
      break;
    case 11:
      new ListagemProdutos(empresa.getProdutos).listar();
      break;
    case 12:
      new AtualizarProduto(empresa.getProdutos).atualizar();
      break;
    case 13:
      new DeletarProduto(empresa.getProdutos).deletar();
      break;
    case 14:
      new CadastroServico(empresa.getServicos).cadastrar();
      break;
    case 15:
      new ListagemServico(empresa.getServicos).listar();
      break;
    case 16:
      new AtualizarServico(empresa.getServicos).atualizar();
      break;
    case 17:
      new DeletarServico(empresa.getServicos).deletar();
      break;
    case 18:
      new ConsumirProduto(empresa.getProdutos, empresa.getClientes).consumir();
      break;
    case 19:
      new ConsumirServico(empresa.getServicos, empresa.getClientes).consumir();
      break;
    case 20:
      new ConsumistasPorValor(empresa.getClientes).listar();
      break;
    case 21:
      new Consumistas(empresa.getClientes).listar();
      break;
    case 22:
      new ListagemProdutosMaisConsumidos(empresa.getClientes).listar();
      break;
    case 23:
      new ListagemProdutosMaisConsumidosFiltrados(empresa.getClientes).listar();
      break;
    case 0:
      execucao = false;
      console.log(`Programa finalizado!`);
      break;
    default:
      console.log(`Operação não entendida :(`);
  }
}
