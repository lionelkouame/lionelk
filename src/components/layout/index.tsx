

// create layout component
import React from "react";

const Layout : React.FC = ({children}) => {
  return (
    <div>
      <h1>Layout</h1>
      {children}
    </div>
  );
};

export default Layout;