import { Component } from "react";

type props = {
    tema: string
}

export default class ClienteFuncoes extends Component<props>{
    render() {
        let tema = this.props.tema
            return (
                <div>
                    <h1>Clientes</h1>
                    <a href="cadastrar_cliente">Cadastrar cliente</a>
                    <div className="flex flex-col gap-3">
                        <div>
                            <a href="/">Nome: Erik</a>
                            <p>Nome social: DASDA</p>
                            <p>CPF: 12345678911</p>
                            <button className="/editar">Editar esse cliente</button>
                            <button>Delete esse cliente</button>
                        </div>
                </div>
            </div>
        )
    }
}