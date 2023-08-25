'use client'
import React,{useEffect, useState} from 'react';
import logo from '@/assets/img/logo.svg'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { navigation } from '@/app/data';
import NavMobile from './NavMobile';
import Image from 'next/image';

const Header = () => {
  const [ bg, setBg ] = useState(false)
  const [mobile, setMobile] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true):setBg(false)
    })
  })
  
  return (
    <header className={`${bg ? 'bg-primary py-4 lg:py-6' : 'bg-none'} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#">
            <Image src={ logo} alt='logo' className='h-6 lg:h-8'/>
          </a>
          <div className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer mr-6 md:mr-0 ' onClick={()=> setMobile(!mobile)}>
            {mobile? <CgClose/>:<CgMenuRight/>}
          </div>
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} className='text-white capitalize hover:border-b transition-all'>{ item.name}</a>
                </li>
              )
            })}</ul>
          </nav>
          <div className={`${mobile? 'left-0':'-left-full'} md:hidden fixed bottom-0 w-[70%] max-w-xs h-screen transition-all duration-300`}>
            <NavMobile/>
          </div>
        </div>
      </div>
    </header>
    
  )
}

export default Header;
