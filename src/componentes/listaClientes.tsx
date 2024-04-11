/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div>
                <div>
                    <a href="#">Cliente 1</a>
                    <a href="#">Cliente 2</a>
                    <a href="#">Cliente 3</a>
                    <a href="#">Cliente 4</a>
                    <a href="#">Cliente 5</a>
                    <a href="#">Cliente 6</a>
                </div>
            </div>
        )
    }
}