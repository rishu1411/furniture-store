import Features from '@/components/Features'
import FeaturesSecond from '@/components/FeaturesSecond'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NewItems from '@/components/NewItems'
import Newsletter from '@/components/Newsletter'
import Products from '@/components/Products'
import Testimonial from '@/components/Testimonial'
import React from 'react'

function page() {
  return (
    <div className='w-full mx-auto container max-w-[1440px] bg-[#fbfaf9] '>
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial/>
      <Newsletter />
      <Footer/>
    </div>
  )
}

export default page