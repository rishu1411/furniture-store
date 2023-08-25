import React from 'react';
import logo from '../assets/img/logo.svg'
import { footer } from '@/app/data';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='section bg-primary text-white px-5'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a href="#" className='mb-6 lg:mb-0'>
            <Image src={logo} alt='Logo'/>
          </a>
          <div className='flex gap-4'>
            {footer.social.map((item, index) => {
              return (
                <div key={index} className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition'>
                  <a href="#">{ item.icon}</a>
                </div>
              )
            })}
          </div>
        </div >
        <p className='text-center'>&copy; FunrniShop 2023 - All rights reserved.</p>
      </div>
    </footer>
  )
};

export default Footer;
