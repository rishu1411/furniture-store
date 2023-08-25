'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../app/slider.css'
import { Autoplay, Navigation } from 'swiper/modules'
import { testimonial } from '../app/data'
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper modules={[Navigation, Autoplay]} className='testimonialSlider' navigation={true} autoplay={ true}>
      {
        testimonial.persons.map((person, index) => {
          const {avatar,name,occupation,message } = person
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col min-h-[250px]'>
                <div className='flex items-center gap-x-5 mb-9'>
                  <Image src={avatar} alt='Avatar image' />
                  <div className='flex flex-col'>
                    <span className='text-xl font-semibold '>{ name}</span>
                    <span className='text-gray-500'>{ occupation}</span>
                  </div>
                </div>
                  <span className='text-xl max-[570px] mb-10'>{ message}</span>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default TestimonialSlider;
