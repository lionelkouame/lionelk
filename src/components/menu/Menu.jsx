import React from "react";
import MenuItem from "./MenuItem";
import {Link} from "gatsby";

const Menu = ({children}) => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                    <div className="container px-5">
                        <a className="navbar-brand" href="index.html">
                            <Link to={"/"}>
                                <img className="profile-img border-right" src="logo_lk.png" alt="..."/>
                            </Link>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                                <li className="nav-item">
                                    <Link className={"nav-link"} to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link"} to="/about">about</Link>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="resume.html">Resume</a></li>
                                <li className="nav-item"><a className="nav-link" href="projects.html">Projects</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Menu;