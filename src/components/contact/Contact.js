import React from 'react';
import './Contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2crac8w', 'template_3uopgza', form.current, 'ZQdDY_A9RQX5fz5RM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return(
        <div>
            <section id='contact'>
                <h5>Get in Touch</h5>
                <h2>Contact me</h2>

                <div className='container contact_container'>
                    <div className='contact_options'>
                        <article className='contact_option'>
                            <MdOutlineEmail />
                            <h4>Email</h4>
                            <h5>satyam19arya@gmail.com</h5>
                            <a href="mailto:satyam19arya@gmail.com" target="__blank">Send mail</a>
                        </article>

                        <article className='contact_option'>
                            <BsLinkedin />
                            <h4>LinkedIn</h4>
                            <h5>satyam arya</h5>
                            <a href="https://www.linkedin.com/in/satyam-arya-101764205/" target="__blank">Send a message</a>
                        </article>

                        <article className='contact_option'>
                            <BsWhatsapp />
                            <h4>WhatsApp</h4>
                            <h5>+91 9452851038</h5>
                            <a href="https://api.whatsapp.com/send?phone=9452851038" target="__blank">Send a message</a>
                        </article>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Enter your name' required />
                        <input type="email" name='email' placeholder='Enter your email' required />
                        <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;