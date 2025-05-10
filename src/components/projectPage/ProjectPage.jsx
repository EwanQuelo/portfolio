import React, { useEffect, useState } from 'react';
import './projectPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from "../menuProjet/MenuProjet";

const ProjectPage = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 

    const project = projects.find((project) => project.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(null); // Gestion de l'image en modal

    useEffect(() => {
        if (!project) {
            navigate('/');
        }
    }, [project, navigate]);

    if (!project) {
        return null;
    }

    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="project-page">
            <style>
                {`
                    body { 
                        background-color: ${project.color };
                    }
                `}
            </style>
            <button onClick={() => navigate(-1)} className="back-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>
            <h2>{project.title}</h2>
            <span className="project-date">Année : {project.date}</span>
            <p className="desc-projet">{project.descDetaille}</p>
            {project.urlImg && <img src={project.urlImg} alt={`${project.title}`} className="project-image" />}
            <div className="project-links">
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                        GitHub
                    </a>
                )}
                {project.projectUrl && (
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn link-btn">
                        Site
                    </a>
                )}
            </div>

            {/* Galerie image */}
            <div className="gallery">
                {project.gallery && project.gallery.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Galerie ${index}`} 
                        className="gallery-image"
                        onClick={() => openImageModal(image)} // Ouvre la modal
                    />
                ))}
            </div>

            {/* Modal image en grand */}
            {selectedImage && (
                <div className="modal" onClick={closeImageModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Aperçu agrandi" className="modal-image" />
                        <button className="modal-close" onClick={closeImageModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectPage;
