import React from 'react'
import "./testimonials.css"
import AVAT1 from "../../assets/avatar1.jpg"
import AVAT2 from "../../assets/avatar2.jpg"
import AVAT3 from "../../assets/avatar3.jpg"

// import Swiper core and required modules
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVAT1,
    name: 'Ali',
    review: 'Phasellus ullamcorper sed eros vitae tincidunt. Mauris et pretium felis.Quisque sodales neque quam, sed euismod eros hendrrit non. Morbi viverra, ante.'
  },
  {
    avatar: AVAT2,
    name: 'Ayesha',
    review: 'Phasellus ullamcorper sed eros vitae tincidunt. Mauris et pretium felis.Quisque sodales neque quam, sed euismod eros hendrerit non. Morbi viverra, ante.'
  },
  {
    avatar: AVAT3,
    name: 'Ahmed',
    review: 'Phasellus ullamcorper sed eros vitae tincidunt. Mauris et pretium felis.Quisque sodales neque quam, sed euismod eros hendrerit non. Morbi viverra, ante.'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials