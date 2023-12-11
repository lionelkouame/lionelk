import React from "react";
import {Link} from "gatsby";

const ProfilCard = ({children}) => {
    return (
        <>
            <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                            <div className="text-center text-xxl-start">
                                <div className="fs-3 fw-light text-muted">
                                    Disponible pour tous vos cas d'usages
                                </div>
                                <h1 className="display-3 fw-bolder mb-5">
                                    <span className=" d-inline">
                                        Développeur WEB
                                    </span>
                                </h1>
                                <div className="badge bg-black text-white mb-4">
                                    <div className="text-uppercase">
                                        Symfony &middot; GatbyJS &middot; TypeScript . ReactJS
                                    </div>
                                </div>
                                <div
                                    className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <a className="btn btn-dark btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                                       href="resume.html">Resume</a>
                                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                                       href="projects.html">Projects</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0 border-bottom">
                                <div className="profile">
                                    <img className="profile-img border-right" src="canva3.png" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );

}

export default ProfilCard;

