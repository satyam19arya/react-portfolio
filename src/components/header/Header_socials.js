import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineVerified } from 'react-icons/md';


const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/satyam-arya-101764205/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/satyam19arya" target="__blank"><BsGithub/></a>
        <a href="https://www.instagram.com/satyam19arya/" target="__blank"><BsInstagram/></a>
        <a href="https://www.credly.com/users/satyam-arya.f0a430e7/badges" target="__blank"><MdOutlineVerified/></a>
    </div>
  )
}

export default Headersocials;