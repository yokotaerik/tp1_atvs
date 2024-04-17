import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../componentes/home";
import FormularioCadastroCliente from "../componentes/formularioCadastroCliente";
import Clientes from "../pages/clientes";
import Produtos from "../pages/produtos";
import FormularioCadastroProduto from "../componentes/formularioCadastroProduto";
import Servico from "../pages/servico";
import FormularioCadastroServico from "../componentes/formularioCadastroServico";
import Erik from "../pages/erik";
import FormularioEditarCliente from "../pages/editarCliente";
import FormularioEditarServico from "../pages/editarServico";
import FormularioEditarProduto from "../pages/editarProduto";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home tema="(255,0,255)" />} />
          <Route path="/cliente" element={<Clientes tema="(255,0,255)" />} />
          <Route path="/cliente/1" element={<Erik />} />
          <Route
            path="/cliente/cadastrar"
            element={<FormularioCadastroCliente />}
          />
          <Route
            path="/cliente/editar/1"
            element={<FormularioEditarCliente />}
          />
          <Route path="/produto" element={<Produtos />} />
          <Route
            path="/produto/cadastrar"
            element={<FormularioCadastroProduto />}
          />
          <Route
            path="/produto/editar/1"
            element={<FormularioEditarProduto />}
          />
          <Route path="/servico" element={<Servico />} />
          <Route
            path="/servico/cadastrar"
            element={<FormularioCadastroServico />}
          />
          <Route
            path="/servico/editar/1"
            element={<FormularioEditarServico />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
