import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioDeCadastro from "./components/clienteFormulario";
import ListaDeClientes from "./components/listarCliente";
import Home from "./pages/PaginaTodosClientes";
import TodosClientes from "./pages/PaginaTodosClientes";

// Import your components here

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={TodosClientes} />
        <Route path="/cadastro" Component={FormularioDeCadastro} />
        <Route path="/editar" Component={FormularioDeCadastro} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
