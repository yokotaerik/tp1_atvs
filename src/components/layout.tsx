import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode
}


function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-blue-900 p-4">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-white text-2xl font-semibold">ATIVIDADE 4 DO GERSON :P</h1>
        </div>
      </nav>

      <main className="flex-grow container mx-auto py-8">
        {children}
      </main>
    </div>
  );
}

export default Layout;
