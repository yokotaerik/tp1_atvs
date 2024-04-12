import { Component } from "react";

type props = {
    cor: string
    texto: string
}

export default class Botao extends Component<props> {

    render() {
        let cor = this.props.cor
        let texto = this.props.texto
        return (
            <button className={`${cor} p-2 rounded-md`}>{texto}</button>
        )
    }
}