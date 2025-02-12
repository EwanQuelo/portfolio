import "./menuProjet.css";
import React from "react";
import { Link } from "react-router-dom";


export const projects = [
    
    {
        id: 13, title: "OBJ Detector", date: "2025", description: "Notebook permettant de detecter un type d'objet", descDetaille: "En utilisant le modèle entraîné de YoloV11 avec PyTorch ce notebook permet de classer les objets qu'il voit.", githubUrl: "https://github.com/EwanQuelo/simple-objet-detector/blob/e51261072d9396c73e066c16e94b2438ba5ceac1/detection-img.ipynb", gallery: [
            "https://i.postimg.cc/xdMMj5CL/image.png",
            "https://i.postimg.cc/Kz3V8dTJ/image.png",
            "https://i.postimg.cc/vHtrf3Lh/image.png"
        ]
    },
    {
        id: 12, title: "Marienbad IA", date: "2024", description: "Jeu avec apprentissage IA", descDetaille: "Réalisation d'une version du jeu de Marienbad avec une IA qui apprend à jouer. Projet réalisé en python dans le cadre de ma première année de BUT informatique. Cela fonctionne par le biais de ‘punition‘ de la position actuelle de jeu lorsque la situation va amener a une défaite et un système de récompense si l'inverse, c'est comme cela que sont gérer les choix du robot.", gallery: [
            "https://i.postimg.cc/SshYxYjs/image.png",
        ],
    },
    {
        id: 11, color: "#FF0000", title: "TCG Poké Web", date: "2024", description: "Jeu d'ouverture de booster Pokémon en ligne", descDetaille: "J'ai réalisé rapidement un site internet reprennant le système de tirage de carte aléatoire de pokémon. Précision: Je n'ai pas réalisé l'animation de chargement elle a été faite par Vincenzo Bianco.", gallery: [
            "https://i.postimg.cc/cC5TZfnK/CPT2412121947-1512x832.gif",
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
        id: 10, color: "#1D99DB", title: "Portfolio", date: "2024", description: "Site sur lequel vous naviguez", descDetaille: "Blabla le projet façon détaillé Blabla le projet façon détaillé Blabla le projet façon détaillé Blabla le projet façon détaillé ", githubUrl: "https://github.com/ewanquelo", projectUrl: "ewanquelo.com", gallery: [
            "https://i.postimg.cc/cJ4W5S0F/image.png",
            "https://i.postimg.cc/76jy6J7R/image.png",
            "https://i.postimg.cc/G3sCfznn/image.png",
        ]
    },
    {
        id: 9, enCours: "en cours", title: "FLUX AI", date: "2024", description: "Chat utilisant l'api gemini", descDetaille: "Réalisation d'une interface pour utiliser l'API de Gemini (React, Express, MongoDB). Projet en  cours 60% effectué.", gallery: [
            "https://i.postimg.cc/6p93DfkM/image.png",
        ],
    },
    { id: 8, title: "3D Tools", date: "2024", description: "Cube 3d d'outils", descDetaille: "Interface web d'un cube en three.js permettant d'accéder rapidement a différents outils.", projectUrl: "https://ewanquelo.github.io/toolbox3d/", gallery: [
        "https://i.postimg.cc/Jhd2kX91/CPT2502112207-1511x774.gif",
    ],
    },
    {
        id: 7, color: "#48484A", title: "Good or Not", date: "2024", description: "Jeu pour vision os", descDetaille: "Jeu de reflex fait en SwiftUI pour visionOS ou il suffit de selectionné les bonnes couleurs pour gagner des points", gallery: [
            "https://i.postimg.cc/NFPBRCWd/image.png",
        ]
    },
    { id: 6, title: "V.OS Form", date: "2023", description: "Formulaires simple pour vision os", descDetaille: "Réalisation d'un formulaire de contact en swiftUI pour visionOS (uniquement interface).", githubUrl: "https://github.com/EwanQuelo/vision-os-form", gallery: ["https://i.postimg.cc/T2BVcjGB/image.png"] },
    {
        id: 5, title: "Portfolio1", date: "2023", description: "Portfolio en html/css uniquement", descDetaille: "Dans le cadre de ma première année de BUT MMI j'ai eu comme projet scolaire de réaliser un portfolio uniquement en HTML/CSS. Seul le formulaire de contact a été fait en PHP.", gallery: [
            "https://i.postimg.cc/sDZtn2Sj/image.png",
            "https://i.postimg.cc/3Jm3k1tF/image.png",
        ],
        projectUrl: "https://perso.univ-lemans.fr/~i2300634/portfolio/", githubUrl: "https://github.com/EwanQuelo/portfolio1",
    },
    // { id: 3, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
    // { id: 2, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
    // { id: 1, title: "Projet blabla", date: "2023", description: "Projet blabla", descDetaille: "Blabla le projet façon détaillé", },
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
