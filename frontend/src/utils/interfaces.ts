import { PetInfoProps } from "../componentes/petInfo";

export interface RG {
  valor: string;
  dataEmissao: string; // Alterado para string
}

export interface CPF {
  valor: string;
  dataEmissao: string; // Alterado para string
}

export interface Telefone {
  ddd: string; // Adicionado DDD
  numero: string;
}


export interface ClienteCompletoProps {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: CPF;
  rgs?: RG[];
  telefones?: Telefone[];
  produtosConsumidos?: ProdutoServicoProps[];
  servicosConsumidos?: ProdutoServicoProps[];
}

export interface ClienteCompletoResponse {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: CPF;
  rgs?: RG[];
  telefones?: Telefone[];
  pets: PetInfoProps[];
  valorConsumido: number
  vezesConsumida: number
  produtosConsumidos?: ProdutosConsumidosResponse[];
  servicosConsumidos?: any[];
}

interface ProdutosConsumidosResponse {
  id: number;
  clienteId: number;
  produtoId: number;
  quantidade: number;
  dataCompra: string;
  produto: ProdutoServicoProps;
}

export interface FormularioEditarClienteProps {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: CPF;
  rg: RG[];
  telefone: Telefone[];
}

export interface ProdutoServicoProps {
  id: number;
  nome: string;
  valor?: number;
  tipo: string;
  raca: string;
}

export interface ProdutoServicoPropsResponse {
  id: number;
  nome: string;
  valor: number;
  tipo: string;
  raca: string;
  vezesConsumidas: number;
}

export interface Cliente {
    nome: string;
    nomeSocial: string;
    cpf: CPF;
    rgs: RG[];
    telefones: Telefone[];
  }