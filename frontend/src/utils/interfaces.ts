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
  produtosConsumidos?: any[];
  servicosConsumidos?: any[];
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
  valor: number;
  tipo: string;
  raca: string;
}


export interface Cliente {
    nome: string;
    nomeSocial: string;
    cpf: CPF;
    rgs: RG[];
    telefones: Telefone[];
  }