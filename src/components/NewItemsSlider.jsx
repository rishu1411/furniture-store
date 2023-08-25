'use client'
import React from 'react';

import { Swiper,SwiperSlide} from 'swiper/react'
import { newInStore, products } from '../app/data'
import Image from 'next/image';
import 'swiper/css'
import 'swiper/css/pagination'

const NewItemsSlider = () => {
  
  return (
    <Swiper grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween:18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween:20,
          
        }
    }}
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide key={index} className='max-w-[265px]'>
            <div className='relative'>
            <Image src={product.image} alt='new products' height={500} width={500} className='rounded-md'/>
              <span className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>{product.name}</span>
              </div>
            
         </SwiperSlide>
        )
      })}
    </Swiper>);
};

export default NewItemsSlider;
