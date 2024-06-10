export default class Telefone {
    private id: number
    private ddd: string
    private numero: string
    constructor(id: number,ddd: string, numero: string) {
        this.id = id
        this.ddd = ddd
        this.numero = numero
    }

    public get getId(): number {
        return this.id
    }

    public get getDdd(): string {
        return this.ddd
    }

    public get getNumero(): string {
        return this.numero
    }
}