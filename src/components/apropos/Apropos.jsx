// src/components/About.js
import { Link } from "react-router-dom";
import "./apropos.css";
import React from 'react';

const Apropos = () => {
  return (
    <div className="apropos">
      <h1>À propos</h1>
      <p className="text-apropos">Je m'appelle Ewan Quélo et je suis actuellement étudiant en première année de BUT informatique. Je souhaite suivre le parcours réalisation d'application en deuxième année tout en étant en Alternance.</p>
      <p></p>
      <p className="text-apropos">Je recherche donc actuellement une alternance pour une durée de 1 à 2 ans en tant que développeur dans la région nantaise.</p>

      <section className="timeline">
        <h2>Formations</h2>
        <section className="encadre">
          <div className="uneligne">
            <p className="text-encadre2">BUT Informatique</p>
            <p className="text-encadre1">2024-2027</p>
          </div>
          <p className="text-encadre3">Développement sur Java, Python orienté IA, bash, gestion de base de donnée, GIT, Wordpress.</p>
          <p className="lieu">IUT de Vannes</p>
        </section>

        <section className="encadre">
          <div className="uneligne">
            <p className="text-encadre2">BUT Métiers Multimédia et de l'Internet (MMI)</p>
            <p className="text-encadre1">2023-2024</p>
          </div>
          <p className="text-encadre3">Apprentissage en design UI/UX, développement front-end et back-end), gestion de projets, intégration multimédia, création de maquettes (Figma), développement avec PHP/MySQL, JAVA.</p>
          <p className="lieu">IUT de Laval</p>
        </section>

        <section className="encadre">
          <div className="uneligne">
            <p className="text-encadre2">BAC STMG (Gestion Finance)</p>
            <p className="text-encadre1">2023</p>
          </div>
          <p className="text-encadre3">Apprentissage sur la gestion d’entreprise, la comptabilité, et la finance. Acquisition de bases solides en analyse financière, gestion de projets, et organisation d’entreprise.
          </p>
            <p className="lieu">Lycée Jeanne d'arc Montaigu</p>
        </section>
      </section>

      

      <section className="experiences">
        <h2>Mes expériences professionnelles</h2>
        <section className="encadre">
          <div className="uneligne">
            <p className="text-encadre2">Cariste chez Sodebo (CDI)</p>
            <p className="text-encadre1">juillet 2024 - Aujourd'hui</p>
          </div>
          <p className="text-encadre3">Travail étudiant le week end. Préparation des chargements dans un environnement froid, avec des horaires matinaux.</p>
        </section>

        <section className="encadre">
          <div className="uneligne">
            <p className="text-encadre2">Stage d’observation chez “Envol”</p>
            <p className="text-encadre1">2022</p>
          </div>
          <p className="text-encadre3">Observation d’un cadre professionnel d’une entreprise d’évenementiel. Aide a la gestion des pages produits sur Wordpress.</p>
        </section>

        <section className="encadre">
          <div className="uneligne">
            <p className="text-encadre2">Stage d’observation au “Théâtre de Thalie”</p>
            <p className="text-encadre1">2020</p>
          </div>
          <p className="text-encadre3">Observation de la gestion et de la programmation des spectacles. Découverte de la programmation lumière pour le spectacle vivant.</p>
        </section>

        </section>

        <section className="langues">
          <h2>Langues</h2>
          <div className="langues-container">
            <div className="langue">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                alt="Français"
                className="drapeau"
              />
              <p className="niveau">Natal</p>
            </div>
            <div className="langue">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="Anglais"
                className="drapeau"
              />
              <p className="niveau">C1</p>
            </div>
            <div className="langue">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-2560px-Flag_of_Germany.svg.png"
                alt="Allemand"
                className="drapeau"
              />
              <p className="niveau">A2</p>
            </div>
          </div>
        </section>
        

      <div className="back-to-projects">
          <Link to="/" className="btn-back">
            Projets
          </Link>
      </div>
    </div> 
  );  
};

export default Apropos;
// METTRE UNE TIMELINE DE MA SCOLARITÉ
// Mettre image 
// mettre mes compétences avec nuages de logos peut être bubble widgets 
// mettre mes expériences professionnelles


