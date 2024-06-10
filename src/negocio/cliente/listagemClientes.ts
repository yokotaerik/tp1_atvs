import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {

        if(this.clientes.length == 0 ){
            console.log("Sem clientes, você vai falir :P")
        }

        console.log(`\nLista de todos os clientes:`);
        console.log(`--------------------------------------`);
        this.clientes.forEach(cliente => {
            console.log("Id: " + cliente.id);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg => console.log(`RG: ${rg.getValor}`));
            cliente.getTelefones.forEach(telefone => console.log(`ID: ${telefone.getId} - Telefone: ${telefone.getDdd} ${telefone.getNumero}`));
            let data = new Date()
            console.log(`Data de cadastro: ${data.toLocaleDateString()}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}