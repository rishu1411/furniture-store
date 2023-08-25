import React from 'react';
import { features } from '../app/data'
import Image from 'next/image';

const FeaturesSecond = () => {
  const {title,subtitle,image} = features.feature2
  return (
    <section className='section mx-5'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
        <span className='flex-1 flex flex-col justify-end'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
          </span>
          <div className='flex-1 '>
            <Image src={image} alt='' />
          </div>
         
        </div>
      </div>
  </section>)
};

export default FeaturesSecond;
