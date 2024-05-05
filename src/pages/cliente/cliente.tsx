import { Component } from "react";
import ClienteInfo, { ClienteInfoProps } from "../../componentes/clienteInfo";
import PetInfo from "../../componentes/petInfo";
import Layout from "../../componentes/layout";

interface Pet {
  nome: string;
  tipo: string;
  raca: string;
  genero: string;
}

export default class Cliente extends Component {
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
      <Layout>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 my-10 items-center">
            <h1 className="text-center text-7xl font-bold">
              Perfil do Cliente
            </h1>
          </div>
          <h2 className="text-3xl font-bold">Informações do cliente</h2>
          <ClienteInfo
            nome={this.cliente.nome}
            nomeSocial={this.cliente.nomeSocial}
            cpf={this.cliente.cpf}
            rg={this.cliente.rg}
            telefone={this.cliente.telefone}
          />
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold">Pets do cliente</h3>
            <a href="/pet/cadastrar/1">
              <button className="bg-blue-400 p-2 rounded-md text-xl font-bold text-white">
                Adicionar pet{" "}
              </button>
            </a>
          </div>
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
      </Layout>
    );
  }
}
