import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../componentes/home";
import FormularioCadastroCliente from "../componentes/formularioCadastroCliente";
import Clientes from "../pages/clientes";
import Produtos from "../pages/produtos";
import FormularioCadastroProduto from "../componentes/formularioCadastroProduto";
import Servico from "../pages/servico";
import FormularioCadastroServico from "../componentes/formularioCadastroServico";
import Erik, { Pet } from "../pages/erik";
import FormularioEditarCliente from "../pages/editarCliente";
import FormularioEditarServico from "../pages/editarServico";
import FormularioEditarProduto from "../pages/editarProduto";
import FormularioCadastrarPet from "../pages/cadastrarPet";
import { ClienteInfoProps } from "../componentes/clienteInfo";

function AppRouter() {
  const [pets, setPets] = useState<Pet[]>([
    {
      nome: "Nina",
      tipo: "Porte-médio",
      raca: "Vira-lata",
      genero: "Fêmea",
    },
  ]);
  const [cliente, setCliente] = useState<ClienteInfoProps>({
    nome: "Erik Camara Yokota",
    nomeSocial: "Jubaluba",
    cpf: "123.456.789-11",
    rg: ["53.125.810-5"],
    telefone: ["12 981552039"],
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<Clientes />} />
        <Route
          path="/cliente/1"
          element={<Erik cliente={cliente} pets={pets} />}
        />
        <Route
          path="/cliente/cadastrar"
          element={<FormularioCadastroCliente />}
        />
        <Route path="/cliente/editar/1" element={<FormularioEditarCliente />} />
        <Route path="/pet/cadastrar/1" element={<FormularioCadastrarPet />} />
        <Route path="/produto" element={<Produtos />} />
        <Route
          path="/produto/cadastrar"
          element={<FormularioCadastroProduto />}
        />
        <Route path="/produto/editar/1" element={<FormularioEditarProduto />} />
        <Route path="/servico" element={<Servico />} />
        <Route
          path="/servico/cadastrar"
          element={<FormularioCadastroServico />}
        />
        <Route path="/servico/editar/1" element={<FormularioEditarServico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
