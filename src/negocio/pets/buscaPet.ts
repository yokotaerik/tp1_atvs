import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Busca from "../busca";

export default class BuscarPet extends Busca {
  private pets: Pet[];
  private entrada: Entrada;

  constructor(pets: Pet[]) {
    super()
    this.pets = pets;
    this.entrada = new Entrada();
  }

  public buscar(): Pet | null {
    let id = this.entrada.receberNumero(
      "Digite o ID do pet: "
    );

    const pet = this.pets.find(
      (p) => p.getId === id
    );

    return pet || null;
  }
}
