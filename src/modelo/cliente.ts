import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public id: number
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private valorTotalGasto: number
    private totalDeVezesConsumidas: number
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(id: number, nome: string, nomeSocial: string, cpf: CPF) {
        this.id = id
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataCadastro = new Date()
        this.totalDeVezesConsumidas = 0
        this.valorTotalGasto = 0
        this.cpf = cpf
        this.rgs = []
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public set setNome(nome: string){
        this.nome = nome;
    }
    public set setNomeSocial(nomeSocial: string){
        this.nomeSocial = nomeSocial;
    }
    public get getValorTotalGasto(): number {
        return this.valorTotalGasto
    }
    public get getTotalDeVezesConsumidas(): number {
        return this.totalDeVezesConsumidas
    }
    public set setValorTotalGasto(valorTotalGasto: number) {
        this.valorTotalGasto = valorTotalGasto
    }
    public set setTotalDeVezesConsumidas(totalDeVezesConsumidas: number) {
        this.totalDeVezesConsumidas = totalDeVezesConsumidas
    }

}