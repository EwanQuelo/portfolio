// src/components/About.js
import "./projetHome.css";
import React from 'react';

const ProjetHome = () => {
    return (
        <section className="about">
            <h2 className="titleProjetHome">Mes projets</h2>
            <p>Je suis un développeur passionné par la technologie...</p>
            <section>
                <h3>Projet 1</h3>
                <p>Voici quelques-uns de mes projets...</p>
            </section>
        </section>
    );
};

export default ProjetHome;
