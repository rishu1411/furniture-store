'use client'
import React from 'react';
// import { register } from 'swiper/element/bundle';
// // register Swiper custom elements
// register();
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../app/slider.css'
import SwiperCore,{ Navigation, Pagination,Keyboard } from 'swiper/modules'

import { productList,stats } from '../app/data'
import { HiPlus, } from 'react-icons/hi'
import Image from 'next/image';

const ProductSlider = () => {
 
  return (
    <Swiper modules={[Pagination, Navigation,  Keyboard]} navigation={ true} pagination={{clickable:true}} spaceBetween={30} speed={800}  scrollbar={ true} className='productSlider min-h-[1300px]'>
      {
        stats.map((index) => {
          return (
            <SwiperSlide key={index}>
            <div className='grid max-[550px]:grid-cols-1 grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-[30px] '>
            {
              productList.map((product, index) => {
                const {name,price,oldPrice,image,icon } = product
                return (
                  
                    <div className='w-full max-w-[290px] h-[380px] text-left mb-6' key={index}>
                      <div className='border hover:border-accent  rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition bg-zinc-100 '>
                        <Image src={image} alt='product image' />
                      <span className='absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-300 transition'>
                        <HiPlus className='text-xl text-primary'/>
                      </span>
                      </div>
                      <span className='font-semibold lg:text-xl'>{name}</span>
                      <div className='flex items-center gap-x-3'>
                        <span className=' bg-gray-100'>$ { price}</span>
                        <span className='text-sm text-grey line-through'>$ { oldPrice}</span>
                      </div>
                    </div>

                )
              })
                }
                </div>
                </SwiperSlide>
                     

          )
        })
      }
      
   </Swiper>
  )
};

export default ProductSlider;
