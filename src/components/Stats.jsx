import React from 'react';
import {stats} from '../app/data'

const Stats = () => {
  return <div className='bg-accent rounded-[20px]  sm:p-6 lg:p-12 p-3' >
    <div className='flex flex-wrap  gap-y-8'>
      {
        stats.map((item, index) => {

          return (<div key={index} className='min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none '>
            <div className='text-xl md:text-2xl font-semibold lg:text-4xl'>{ item.value}</div>
            <div className='text-sm sm:text-base font-light max-w-[110px] mx-auto lg:text-lg'>{ item.text}</div>
          </div>)
        })
      }
    </div>
  </div>;
};

export default Stats;
