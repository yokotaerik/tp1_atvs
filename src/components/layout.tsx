import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}


function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-blue-900">
      <nav className="bg-neutral-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-black text-2xl font-semibold">ATV4</h1>
          <a href="/cadastro">Cadastrar</a>
          <a href="/">Clientes</a>
        </div>
      </nav>

      <main className="flex-grow container mx-auto py-8">
        {children}
      </main>
    </div>
  );
}

export default Layout;
