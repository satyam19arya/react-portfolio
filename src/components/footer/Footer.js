import React from 'react';
import './Footer.css';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return(
        <div>
            <footer data-aos="fade-up" data-aos-duration="1000">
                <a href="#home" className="footer_logo">Satyam Arya</a>

                <ul className="permalinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer_socials">
                    <a href="https://www.linkedin.com/in/satyam-arya-101764205/" target="__blank"><BsLinkedin /></a>
                    <a href="https://github.com/satyam19arya" target="__blank"><BsGithub /></a>
                    <a href="https://www.instagram.com/satyam19arya/" target="__blank"><BsInstagram /></a>
                </div>

                <div className="footer_copyright">
                    <small>Copyright &copy; 2023 Satyam Arya | All rights reserved</small>
                </div>
            </footer>
        </div>
    );
}

export default Footer;