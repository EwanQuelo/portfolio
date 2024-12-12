import "./menuProjet.css";
import React from "react";
import { Link } from "react-router-dom";


export const projects = [
    { id: 11, color: "#FF0000", title: "TCG Poké Web", date: "2024", description: "Jeu d'ouverture de booster Pokémon en ligne", descDetaille: "Blabla le projet façon détaillé", projectUrl: "", gallery: [
        "https://i.postimg.cc/NjjRsK4Y/image.png",
        "https://i.postimg.cc/k4Q2FCcf/image.png",
        "https://i.postimg.cc/SRmJgP1q/image.png",
        "https://i.postimg.cc/85mCfHpY/image.png",
        "https://i.postimg.cc/Gh2p9GZM/image.png",
        "https://i.postimg.cc/j5bHrZ33/image.png",
        "https://i.postimg.cc/65LDsmHg/image.png",
        ],
    },
 {
        id: 10, color: "#3abbcf" , enCours: "en cours", title: "Portfolio", date: "2024", description: "Site sur lequel vous naviguez", descDetaille: "Blabla le projet façon détaillé Blabla le projet façon détaillé Blabla le projet façon détaillé Blabla le projet façon détaillé ", githubUrl: "https://github.com/ewanquelo", projectUrl: "ewanquelo.com", gallery: [
            "https://i.postimg.cc/cJ4W5S0F/image.png",
            "https://i.postimg.cc/76jy6J7R/image.png",
            "https://i.postimg.cc/G3sCfznn/image.png",
        ]
    },
    {
        id: 9, enCours: "en cours", title: "FLUX AI", date: "2024", description: "Chat utilisant l'api gemini", descDetaille: "Blabla le projet façon détaillé", githubUrl: "https://github.com/ewanquelo", projectUrl: "https://3d-tools.com", gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s"
        ],
    },
    { id: 8, title: "3D Tools", date: "2024", description: "Cube 3d d'outils", descDetaille: "Blabla le projet façon détaillé", projectUrl: "https://3d-tools.com" },
    {
        id: 7, title: "Good or Not", date: "2024", description: "Jeu pour vision os", descDetaille: "Jeu de reflex fait en SwiftUI pour visionOS ou il suffit de selectionné les bonnes couleurs pour gagner des points", gallery: [
            "https://i.postimg.cc/NFPBRCWd/image.png",
            ]
    },
    { id: 6, title: "V.OS Form", date: "2023", description: "Formulaires simple pour vision os", descDetaille: "Blabla le projet façon détaillé", githubUrl: "https://github.com/ewanquelo", projectUrl: "https://vos-form.com" },
    { id: 5, title: "Portfolio1", date: "2023", description: "Portfolio en html/css uniquement", descDetaille: "Dans le cadre de ma première année de BUT MMI j'ai eu comme projet scolaire de réaliser un portfolio uniquement en HTML/CSS. Seul le formulaire de contact a été fait en PHP.", gallery: [
        "https://i.postimg.cc/sDZtn2Sj/image.png",
        "https://i.postimg.cc/3Jm3k1tF/image.png",
    ],
     projectUrl: "https://perso.univ-lemans.fr/~i2300634/portfolio/", githubUrl: "https://github.com/EwanQuelo/portfolio1", },
    { id: 3, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
    { id: 2, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
    { id: 1, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
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
