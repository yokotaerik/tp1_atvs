import { Component, ReactNode } from "react";

export type ClienteInfoProps = {
  nome: string;
  nomeSocial: string;
  cpf: string;
  rg: string[];
  telefone: string[];
};

export default class ClienteInfo extends Component<ClienteInfoProps> {
  render() {
    return (
      <div>
        <div className="bg-white p-5 rounded-lg mb-5 shadow-md">
          <p className="mb-1">Nome: {this.props.nome}</p>
          <p className="mb-1">Nome Social: {this.props.nomeSocial}</p>
          <p className="mb-1">CPF: {this.props.cpf}</p>
          {this.props.rg.map((rg, index) => {
            return (
              <p key={index} className="mb-1">
                RG: {rg}
              </p>
            );
          })}
          {this.props.telefone.map((telefone, index) => {
            return (
              <p key={index} className="mb-1">
                Telefone: {telefone}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}
