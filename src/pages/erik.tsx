import { Component } from "react";
import PetInfo from "../componentes/petInfo";
import ClienteInfo, { ClienteInfoProps } from "../componentes/clienteInfo";

interface Pet {
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
}

export default class Erik extends Component {
  pets: Pet[];
  cliente: ClienteInfoProps;

  constructor(props: Readonly<{}>) {
    super(props);
    this.pets = [
      {
        nome: "Nina",
        tipo: "Porte-médio",
        raca: "Vira-lata",
        genero: "Fêmea",
      },
    ];
    this.cliente = {
      nome: "Erik Camara Yokota",
      nomeSocial: "Jubaluba",
      cpf: "123.456.789-11",
      rg: ["53.125.810-5"],
      telefone: ["12 981552039"],
    };
  }

  render() {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 my-10 items-center">
          <h1 className="text-center text-7xl font-bold">Perfil do Cliente</h1>
        </div>
        <h2 className="text-4xl font-bold">Informações do cliente</h2>
        <ClienteInfo
          nome={this.cliente.nome}
          nomeSocial={this.cliente.nomeSocial}
          cpf={this.cliente.cpf}
          rg={this.cliente.rg}
          telefone={this.cliente.telefone}
        />
        <h3 className="text-4xl font-bold">Pets do cliente</h3>
        {this.pets.map((pet, index) => {
          return (
            <PetInfo
              key={index}
              id="1"
              nome={pet.nome}
              tipo={pet.tipo}
              raca={pet.raca}
              genero={pet.genero}
            />
          );
        })}
      </div>
    );
  }
}
