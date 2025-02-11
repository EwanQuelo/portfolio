import React from 'react';
import "./cv.css";
import { Link } from 'react-router-dom';

const Cv = () => {
    return (
        <div className="cv-section">
            <section className="cv-container">
                <h1>CV 2025</h1>
                {/* Ajout du PDF */}
                <iframe 
                    src="/cv2024.pdf" 
                    title="CV 2025" 
                    width="500vw" 
                    height="700px" 
                    style={{ border: "none" }}
                />
            </section>

            <div className="back-to-projects">
                <Link to="/" className="btn-back">
                    Projets
                </Link>
            </div>
        </div>
    );
};

export default Cv;
