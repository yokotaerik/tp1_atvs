export default class Produto {
    private id!: number
    private nome!: string
    private valor!: number
    private tipoDePet!: string
    private racaDoPet!: string

    constructor(id: number, nome: string, valor: number, tipoDePet: string, racaDoPet: string){
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.tipoDePet = tipoDePet;
        this.racaDoPet = racaDoPet;
    }

    public get getId(): number { return this.id; }
    public get getNome(): string { return this.nome; }
    public get getValor(): number { return this.valor; }
    public get getTipoDePet(): string { return this.tipoDePet; }
    public get getRacaDoPet(): string { return this.racaDoPet; }

    public set setNome(nome: string) { this.nome = nome; }
    public set setValor(valor: number) { this.valor = valor; }
    public set setTipoDePet(tipoDePet: string) { this.tipoDePet = tipoDePet; }
    public set setRacaDoPet(racaDoPet: string) { this.racaDoPet = racaDoPet; }
}
