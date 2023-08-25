import React from 'react';
import { hero } from '../app/data'
import Stats from './Stats';




const Hero = () => {
  const {title,subtitle,buttonText} = hero
  return (
    <section className='h-[850px]  bg-hero w-full  bg-right bg-auto bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28'>
      <div className='container mx-auto text-center'>
        <h1 className='text-2xl font-semibold mx-auto mb-[30px] lg:text-[54px] lg:leading-tight lg:max-w-[888px]'>{title}</h1>
        <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>{subtitle}</h2>
        <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:pc-[80px] lg:py-[16px] lg:mb-[194px]'>{ buttonText}</button>
      <div className='-top-[70px] relative'>
        <Stats/>
      </div>
      </div>

    </section>)
};

export default Hero;
