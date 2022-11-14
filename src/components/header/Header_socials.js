import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/satyam-arya-101764205/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/satyam19arya" target="__blank"><BsGithub/></a>
        <a href="https://www.instagram.com/satyam19arya/" target="__blank"><BsInstagram/></a>
    </div>
  )
}

export default Headersocials;