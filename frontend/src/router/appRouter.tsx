import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import FormularioCadastroCliente from "../pages/cliente/formularioCadastroCliente";
import Clientes from "../pages/cliente/clientes";
import Produtos from "../pages/produto/produtos";
import FormularioCadastroProduto from "../pages/produto/formularioCadastroProduto";
import FormularioCadastroServico from "../pages/servico/formularioCadastroServico";
import FormularioEditarCliente from "../pages/cliente/editarCliente";
import FormularioEditarServico from "../pages/servico/editarServico";
import FormularioEditarProduto from "../pages/produto/editarProduto";
import FormularioCadastrarPet from "../pages/pet/cadastrarPet";
import ClientesConsumidores from "../pages/cliente/clientesConsumidores";
import MaisConsumidos from "../pages/maisConsumidos";
import FormularioEditarPet from "../pages/pet/editarPet";
import Consumir from "../pages/cliente/consumir";
import Cliente from "../pages/cliente/cliente";
import Servico from "../pages/servico/servico";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/:id" element={<Cliente />} />
        <Route
          path="/clientes/cadastrar"
          element={<FormularioCadastroCliente />}
        />
        <Route
          path="/clientes/editar/:id"
          element={<FormularioEditarCliente />}
        />
        <Route path="/pet/cadastrar/:id" element={<FormularioCadastrarPet />} />
        <Route path="/pet/editar/:id" element={<FormularioEditarPet />} />
        <Route path="/produto" element={<Produtos />} />
        <Route
          path="/produto/cadastrar"
          element={<FormularioCadastroProduto />}
        />
        <Route path="/produto/editar/:id" element={<FormularioEditarProduto />} />
        <Route path="/servico" element={<Servico />} />
        <Route
          path="/servico/cadastrar"
          element={<FormularioCadastroServico />}
        />
        <Route path="/servico/editar/:id" element={<FormularioEditarServico />} />
        <Route
          path="/clientes/consumidores"
          element={<ClientesConsumidores />}
        />
        <Route path="/clientes/consumir/:id" element={<Consumir />} />
        <Route path="/mais_consumidos" element={<MaisConsumidos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
