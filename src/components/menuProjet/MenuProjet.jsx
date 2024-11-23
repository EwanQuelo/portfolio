// src/components/Menu.js
import "./menuProjet.css";
import React from 'react';

const projects = [
    { title: "FLUX AI", date: "2024", description: "Chat utilisant l'api gemini" },
    { title: "3D Tools", date: "2024", description: "Cube 3d d'outils" },
    { title: "Good or Not", date: "2024", description: "Jeu pour vision os" },
    { title: "V.OS Form", date: "2024", description: "Formulaires simple pour vision os" },
    { title: "Portfolio1", date: "2024", description: "Portfolio en html/css uniquement" },
];

const Menu = () => {
    return (
        <section className="menu">
            <ul>
                <h2>Projets</h2>
                {projects.map((project, index) => (
                    <li key={index} className="menu-item">
                        <a href={`#${project.title.toLowerCase().replace(/ /g, '-')}`} className="titreMenu">
                            {project.title}
                        </a>
            
                        <span className="project-date">{project.date}</span>
                        <div className="project-details">
                            <span className="project-description">{project.description}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Menu;
