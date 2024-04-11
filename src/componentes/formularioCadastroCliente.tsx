import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <form className="flex flex-col gap-3 justify-center items-center bg-neutral-300 p-10 flex-wrap">
                    <div>
                        <input type="text" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <input type="text" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <span style={{ background: tema }}>@</span>
                        <input type="text" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <input type="text" placeholder="CPF" />
                        <span>Data de emissao</span>
                        <input type="date" placeholder="Data de emissão do CPF" />
                    </div>
                    <div>
                        <input type="text" placeholder="RG" />
                        <span>Data de emissao</span>
                        <input type="date" placeholder="Data de emissão do RG" />

                    </div>
                    <div>
                        <button type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}