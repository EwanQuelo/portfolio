// src/components/About.js
import "./menu.css";
import React from 'react';

const Menu = () => {
    return (

        <nav className="menuRight">
            <ul className="">
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">mon CV</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Menu;
