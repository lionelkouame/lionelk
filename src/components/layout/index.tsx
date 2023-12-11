

// create layout component
import React from "react";
import "./layout.css"
import {Link} from "gatsby";
import Menu from "../menu/Menu"

const Layout : React.FC = ({children}) => {
  return (
    <div className={"container"}>
      <main className="flex-shrink-0">
          <Menu/>
      </main>
        {children}
    </div>
  );
};

export default Layout;