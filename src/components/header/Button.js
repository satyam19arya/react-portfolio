import React from 'react'
import CV from '../../assets/cv.pdf'
import './Header.css';

const Button = () => {
  return (
    <div className='cta'>
        <a href={CV} target="__blank" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Button;