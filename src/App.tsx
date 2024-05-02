import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormularioDeCadastro from "./pages/clienteFormulario";
import AppRouter from "./Router";

function App() {
  return (
    <div className="bg-blue-900">
      <AppRouter />;
    </div>
  )
}

export default App;
