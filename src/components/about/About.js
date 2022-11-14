import React from 'react';
import './About.css';
import ME from '../../assets/me-about.png'

import { FaAward } from 'react-icons/fa';

const About = () => {
    return(
        <div>
            <section id='about'>
                <h5>Get to know</h5>
                <h2>About me</h2>

                <div className='container about_container'>
                    <div className='about_me'>
                        <div className='about_me_image'>
                            <img src={ME} alt='about_image' />
                        </div>
                    </div>

                    <div className='about_content'>
                        <div className='about_cards'>
                            <article className='about_card'>
                                <FaAward className='about_icon'/>
                                <h5>Experience</h5>
                                <small>3+ years working</small>
                            </article>
                            <article className='about_card'>
                                <FaAward className='about_icon'/>
                                <h5>Experience</h5>
                                <small>3+ years working</small>
                            </article>
                            <article className='about_card'>
                                <FaAward className='about_icon'/>
                                <h5>Experience</h5>
                                <small>3+ years working</small>
                            </article>
                        </div>
                        <p>
                           I'm a student pursuing B.Tech in CSE with specialisation in Cloud Computing at SRM IST Delhi-NCR Campus. I'm frontend developer & a cloud enthusiast. I love connecting with people and having a network of like-minded people. I have a good command on C/C++. I'm AWS Certified Cloud Practitioner & 2x Azure certified. My short term goal as of now is to master Web Development and complete my AWS Certified Solution Architect Associate certification. I know how to work in team & I had also taken part in several Hackathons. I'm happy you stopped by! See what I can do for you,check out my portfolio and get in touch with me.
                        </p>
                        <a href='#contact' className='btn btn-primary'>Let's talk</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;