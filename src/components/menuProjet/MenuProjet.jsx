import "./menuProjet.css";
import React from "react";
import { Link } from "react-router-dom";


export const projects = [

];



const MenuProjet = () => {
    return (
        <section className="menu">
            <ul>
                <h2>Projets</h2>
                {projects.map((project) => (
                    <li key={project.id} className="menu-item">
                        <Link to={`/projet/${project.id}`} className="titreMenu">
                            {project.title}
                        </Link>

                        <span className="project-date">{project.date}</span>
                        <div className="project-details">
                            <span className="project-description">{project.description}</span>
                            {project.enCours && (
                                <span className="enCours">|{project.enCours}|</span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MenuProjet;
