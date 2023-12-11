import React  from "react";
import { Link } from "gatsby";
import 'bootstrap-icons/font/bootstrap-icons.css';


const AboutMe: React.FC = () => {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                                <h2 className="display-5 fw-bolder">
                                    <span className="d-inline">
                                        A propos de moi
                                    </span>
                                </h2>
                                <p className="lead fw-light mb-4">
                                    Par les différents cas d'utilisation rencontés depuis 2012, j'ai pu acquérir des
                                    compétences sur le langage PHP
                                </p>
                                <p className="text-muted">
                                    c'est le caractère gratifiant d'apporter une réponse à un besoin digital qui est mon
                                    lite motiv.
                                    j'ai participé à la réalisation de plusieurs projets en tant que développeur web et
                                    je suis disponible pour vos projets.
                                    Des projets divers et variés qui m'ont permis de grandir dans mes comptétences
                                    tecniques et humaines.
                                </p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                    <a className="text-dark" target="_blank"
                                       href="https://www.linkedin.com/in/lionel-kouame-50760865">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a className="text-dark" target="_blank" href="https://github.com/lionelkouame">
                                        <i className="bi bi-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default AboutMe;