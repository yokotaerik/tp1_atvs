import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../componentes/home";
import FormularioCadastroCliente from "../componentes/formularioCadastroCliente";
import ClienteFuncoes from "../componentes/clienteFuncoes";
import ProdutosFuncoes from "../componentes/produtosFuncoes";
import FormularioProdutoCliente from "../componentes/formularioCadastroProduto";
import FormularioProdutoServico from "../componentes/formularioCadastroServico";
import ServicoFuncoes from "../componentes/servicosFuncoes";

class AppRouter extends React.Component {
  router: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.router = createBrowserRouter([
      {
        path: "/",
        element: <Home tema="(255,0,255)" />,
      },
      {
        path: "/cadastrar_cliente",
        element: <FormularioCadastroCliente tema="(255,0,255)" />,
      },
      // {
      //     path: "/editar_cliente",
      //     element: <Home tema='(255,0,255)'/>
      // },
      {
        path: "/clientes",
        element: <ClienteFuncoes tema="(255,0,255)" />,
      },
      {
        path: "/produtos",
        element: <ProdutosFuncoes />,
      },
      {
        path: "/cadastrar_produto",
        element: <FormularioProdutoCliente />,
      },
      {
        path: "/servicos",
        element: <ServicoFuncoes />,
      },
      {
        path: "/cadastrar_servico",
        element: <FormularioProdutoServico/>
      }
    ]);
  }

  render() {
    return <RouterProvider router={this.router} />;
  }
}

export default AppRouter;
