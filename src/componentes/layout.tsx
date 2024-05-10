import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div className="bg-white p-10 mt-10 rounded-2xl shadow-lg">
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
