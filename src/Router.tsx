import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioDeCadastro from "./pages/clienteFormulario";
import TodosClientes from "./pages/PaginaTodosClientes";
import FormularioEditarCliente from "./pages/formularioEditarCliente";
import PaginaCliente from "./pages/PaginaCliente";

// Import your components here

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={TodosClientes} />
        <Route path="/cadastro" Component={FormularioDeCadastro} />
        <Route path="/editar/:id" Component={FormularioEditarCliente}/>
        <Route path="/cliente/:id" Component={PaginaCliente}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
