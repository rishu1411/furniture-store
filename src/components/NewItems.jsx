import React from 'react';
import {newInStore } from '../app/data'
import Link from 'next/link';
import NewItemsSlider from './NewItemsSlider';


const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore
  
  return (
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <div className='flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0 '>
            <h2 className='title max-w-[245px] lg:mt-[30px] lg:mb-[90px]'>{title}</h2>
            <p className='max-w-[245px] lg:mb-12'>{ subtitle}</p>
          <span className='hidden lg:flex items-center'>
              <Link href='#' className='hover:border-b border-primary lg:items-center font-medium transition-all'>Check All</Link>
              <span className='text-3xl'>{ icon}</span>
          </span>
          </div>
          {/* slider */}
          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:right-2 '>

         <NewItemsSlider/>
          </div>
        </div>
      </div>
    </section>)
};

export default NewItems;
