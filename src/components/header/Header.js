import React from 'react';
import './Header.css';
import Button from './Button';
import Headersocials from './Header_socials'

import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Header = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return(
        <div>
            <header id='home'>
                <div className='container header_container'>
                    <h3 data-aos="fade-right" className="title2">Hello I'm</h3>
                    <h1 data-aos="fade-right" className='title'>Satyam Arya</h1>
                    <h4  data-aos="fade-right"className='text-light'>MERN Stack Developer & Cloud Enthusiast</h4>
                 
                    <Button/>
                    <Headersocials />
                    <a href="#contact" className='scroll_down'>Contact me</a>
                </div>
            </header>
        </div>
    );
}

export default Header;