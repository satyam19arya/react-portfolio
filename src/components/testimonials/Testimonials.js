import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Satyam Arya',
        review: ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
    {
        avatar: AVTR2,
        name: 'Satyam Arya',
        review: ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
    {
        avatar: AVTR3,
        name: 'Satyam Arya',
        review: ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
    {
        avatar: AVTR4,
        name: 'Satyam Arya',
        review: ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
    },
]

const Testimonials = () => {
    return(
        <div>
            <section id='testimonials'>
                <h5>Review from clients</h5>
                <h2>Testimonials</h2>

                <Swiper className='container testimonials_container'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                    {
                        data.map(({avatar, name, review}, index) =>{
                            return (
                                <SwiperSlide key={index} className='testimonial'>
                                    <div className='client_avatar'>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <h5 className='client_name'>{name}</h5>
                                    <small className='client_review'>{review}</small>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </section>
        </div>
    );
}

export default Testimonials;