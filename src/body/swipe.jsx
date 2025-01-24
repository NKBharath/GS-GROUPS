import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './swipe.css'
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import image_slide_1 from '../assets/bus-photos/img_1.jpg'
import image_slide_2 from '../assets/bus-photos/img_2.jpg'
import image_slide_3 from '../assets/bus-photos/img_3.jpg'
import image_slide_4 from '../assets/bus-photos/img_4.jpg'
import image_slide_5 from '../assets/bus-photos/img_5.jpg'
import image_slide_6 from '../assets/bus-photos/img_6.jpg'
import image_slide_8 from '../assets/bus-photos/img_8.jpg'
import image_slide_7 from '../assets/bus-photos/img_7.jpg'

const Swipe = () => {
  return (
    <div className='swiper-main-container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5,
          }
        }
        pagination={{el:'.swiper-pagination',clickable:true}}
        navigation={{
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
          clickable:true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper-container'
      >
        <SwiperSlide>
          <img src={image_slide_1} alt="image slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_slide_2} alt="image slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_slide_3} alt="image slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_slide_4} alt="image slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_slide_5} alt="image slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_slide_6} alt="image slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_slide_7} alt="image slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_slide_8} alt="image slide" />
        </SwiperSlide>
        <div className="slider-controler">
          
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Swipe
