// src/components/About.js
import "./menu.css";
import { Link } from 'react-router-dom';
import React from 'react';

const Menu = () => {
    return (

        <nav className="menuRight">
            <ul className="">
                <li><Link to="/apropos">À propos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cv">Mon CV</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
