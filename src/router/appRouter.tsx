import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../componentes/home';
import FormularioCadastroCliente from '../componentes/formularioCadastroCliente';
import ClienteFuncoes from '../componentes/clienteFuncoes';

class AppRouter extends React.Component {
    router: any;
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.router = createBrowserRouter([
            {
                path: "/",
                element: <Home tema='(255,0,255)'/>
            },
            {
                path: "/cadastrar_cliente",
                element: <FormularioCadastroCliente tema='(255,0,255)'/>
            },
            // {
            //     path: "/editar_cliente",
            //     element: <Home tema='(255,0,255)'/>
            // },
            {
                path: "/cliente",
                element: <ClienteFuncoes tema='(255,0,255)'/>
            
            }
        ]);
    }

    render() {
        return (
            <RouterProvider router={this.router} />
        );
    }
}

export default AppRouter;
