import { Component } from "react";

type props = {
    tema: string
}

export default class Home extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <h1>Home</h1>
                <p>Seja bem-vindo!</p>
            </div>
        )
    }
}