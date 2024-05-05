import React, { Component, ChangeEvent } from "react";

interface Field {
  id: number;
  value: string;
}

interface State {
  rgFields: Field[];
  telefoneFields: Field[];
}

export default class FormularioEditarCliente extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      rgFields: [{ id: 1, value: "" }],
      telefoneFields: [{ id: 1, value: "" }],
    };
  }

  handleAddField = (field: string): void => {
    if (field === "rg") {
      const newRgFields: Field[] = this.state.rgFields.concat({
        id: this.state.rgFields.length + 1,
        value: "",
      });
      this.setState({ rgFields: newRgFields });
    } else if (field === "telefone") {
      const newTelefoneFields: Field[] = this.state.telefoneFields.concat({
        id: this.state.telefoneFields.length + 1,
        value: "",
      });
      this.setState({ telefoneFields: newTelefoneFields });
    }
  };

  handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: string,
    index: number
  ): void => {
    if (field === "rg") {
      const newRgFields: Field[] = this.state.rgFields.map((item) =>
        item.id === index ? { ...item, value: e.target.value } : item
      );
      this.setState({ rgFields: newRgFields });
    } else if (field === "telefone") {
      const newTelefoneFields: Field[] = this.state.telefoneFields.map(
        (item) =>
          item.id === index ? { ...item, value: e.target.value } : item
      );
      this.setState({ telefoneFields: newTelefoneFields });
    }
  };

  render() {
    return (
      <div className="w-full md:w-2/3 lg:w-1/3">
        <h1 className="text-3xl font-bold my-8 text-center">Editar de cliente</h1>
        <form className="w-full bg-gray-200 rounded-md p-6 shadow-md">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="nome" className="block mb-1">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full rounded-md p-2"
                type="text"
                id="nome"
                placeholder="Digite o nome completo"
                required
              />
            </div>
            <div>
              <label htmlFor="nomeSocial" className="block mb-1">
                Nome social
              </label>
              <input
                className="w-full rounded-md p-2"
                type="text"
                id="nomeSocial"
                placeholder="Digite o nome social"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="email" className="block mb-1">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full rounded-md p-2"
                type="email"
                id="email"
                placeholder="Digite o endereço de e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="cpf" className="block mb-1">
                CPF <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full rounded-md p-2"
                type="text"
                id="cpf"
                placeholder="Digite o CPF"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {this.state.rgFields.map((field) => (
              <div key={field.id}>
                <label htmlFor={`rg${field.id}`} className="block mb-1">
                  RG
                </label>
                <input
                  className="w-full rounded-md p-2"
                  type="text"
                  id={`rg${field.id}`}
                  placeholder="Digite o RG"
                  value={field.value}
                  onChange={(e) => this.handleChange(e, "rg", field.id)}
                />
              </div>
            ))}
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700"
              onClick={() => this.handleAddField("rg")}
            >
              + Adicionar RG
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="dataEmissaoCpf" className="block mb-1">
                Data de emissão do CPF
              </label>
              <input
                className="w-full rounded-md p-2"
                type="date"
                id="dataEmissaoCpf"
                placeholder="DD/MM/AAAA"
              />
            </div>
            <div>
              <label htmlFor="dataEmissaoRg" className="block mb-1">
                Data de emissão do RG
              </label>
              <input
                className="w-full rounded-md p-2"
                type="date"
                id="dataEmissaoRg"
                placeholder="DD/MM/AAAA"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {this.state.telefoneFields.map((field) => (
              <div key={field.id}>
                <label htmlFor={`telefone${field.id}`} className="block mb-1">
                  Telefone
                </label>
                <input
                  className="w-full rounded-md p-2"
                  type="text"
                  id={`telefone${field.id}`}
                  placeholder="(DDD) 99999-9999"
                  value={field.value}
                  onChange={(e) =>
                    this.handleChange(e, "telefone", field.id)
                  }
                />
              </div>
            ))}
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700"
              onClick={() => this.handleAddField("telefone")}
            >
              + Adicionar telefone
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
          >
            Editar cliente
          </button>
        </form>
      </div>
    );
  }
}
