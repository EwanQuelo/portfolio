import React from 'react';
import "./ongletContact.css";
import { Link } from 'react-router-dom';

const OngletContact = () => {
    return (
        <div className="contact-section">
            <section className="">
                <h1>Contact</h1>
                <p className='text-contact'>Pour toute question ou autres demandes vous pouvez me contacter à l'email ci-dessous ou remplir le formulaire de contact.</p>

                <p className='text-contact'>Mail: contact@ewanquelo.com</p>

            </section>

            

            <div className="back-to-projects">
                <Link to="/" className="btn-back">
                    Projets
                </Link>
            </div>
        </div>

    );
};

export default OngletContact;
