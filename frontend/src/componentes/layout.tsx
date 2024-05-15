import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white p-10 mt-10 rounded-2xl shadow-lg">
      {children}
    </div>
  );
};

export default Layout;
