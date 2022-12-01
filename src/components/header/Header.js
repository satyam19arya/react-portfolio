import React from 'react';
import './Header.css';
import ME from '../../assets/me.png'
import Button from './Button';
import Headersocials from './Header_socials'


const Header = () => {
    return(
        <div>
            <header id='home'>
                <div className='container header_container'>
                    <h5>Hello I'm</h5>
                    <h1>Satyam Arya</h1>
                    <h5 className='text-light'>Frontend Developer & Cloud Enthusiast</h5>
                    <Button />
                    <Headersocials />

                    <div className='me'>
                        <img src={ME} alt="me" />
                    </div>

                    <a href="#contact" className='scroll_down'>Contact me</a>
                </div>
            </header>
        </div>
    );
}

export default Header;