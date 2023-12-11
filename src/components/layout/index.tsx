

// create layout component
import React from "react";
import "./layout.css"
import {Link} from "gatsby";
import Menu from "../menu/Menu"
import ProfilCard from "../profil-card/ProfilCard"
import AboutMe from "../about-me/AboutMe";

const Layout : React.FC = ({children}) => {
  return (
    <div className={"container"}>
      <main className="flex-shrink-0">
        <Menu/>
        <ProfilCard/>
        <AboutMe/>
        {children}
      </main>
    </div>
  );
};

export const Head: React.FC = () =>{
  return (
      <>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
      </>
  );
}
export default Layout;

