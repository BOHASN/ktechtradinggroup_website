'use client'

import React from 'react';
import Hero from '@/components/Hero/Hero'
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'
import ProductsSlider from '@/components/NewsImagesSliders/ProductsSlider/products'
import PartnersSlider from '@/components/NewsImagesSliders/PartnersSlider/partners'
import ItemsSlider from '@/components/NewsImagesSliders/ItemsSlider/items'
import OffersSlider from '@/components/NewsImagesSliders/OffersSlider/offers'
import BrandSlider from '@/components/NewsImagesSliders/BrandSlider/brand'
import ArrivalsSlider from '@/components/NewsImagesSliders/ArrivalsSlider/arrivals'

const page = () => {
  return (
    <main>
  
      <div className="flex-1 pt-40 padding-x pb-40">
        <h1 className="hero__title">
        Our News
        </h1>
      </div>

          
      <div className="flex flex-wrap justify-center gap-96">
      <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125">
        
          <ProductsSlider/>
          <h1 className="2xl:text-[25px] sm:text-[30px] text-[20px] not-italic text-center text-xl font-bold text-white font-biorhyme">New Products</h1>
          <p className="font-bold text-white font-biorhyme pt-3">We have new Products coming in 2 weeks</p>
        
  </div>
  <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125 mb-56">
      <div className="w-full h-3/4">
      <PartnersSlider />
      </div>
      <h1 className="2xl:text-[25px] sm:text-[30px] text-[20px]  not-italic  text-center text-xl font-bold text-white font-biorhyme">New Partner</h1>
      <p className="font-bold text-white font-biorhyme pt-3">We have new Products coming in 2 weeks</p>
    </div>
  </div>


  <div className="flex flex-wrap justify-center gap-96">
      <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125">
        
          <ItemsSlider />
          <h1 className="2xl:text-[25px] sm:text-[30px] text-[20px] not-italic text-center text-xl font-bold text-white font-biorhyme"> New Items</h1>
          <p className="font-bold text-white font-biorhyme pt-3">We have new Products coming in 2 weeks</p>
        
  </div>
  <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125 mb-56">
      <div className="w-full h-3/4">
      <ArrivalsSlider />
      </div>
      <h1 className="2xl:text-[25px] sm:text-[30px] text-[20px]  not-italic  text-center text-xl font-bold text-white font-biorhyme">New Arrivals </h1>
      <p className="font-bold text-white font-biorhyme pt-3">We have new Products coming in 2 weeks</p>
    </div>
  </div>

  <div className="flex flex-wrap justify-center gap-96">
      <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125">
        
          <OffersSlider />
          <h1 className="2xl:text-[25px] sm:text-[30px] text-[20px] not-italic text-center text-xl font-bold text-white font-biorhyme">New Offer</h1>
          <p className="font-bold text-white font-biorhyme pt-3">Our Monthly offer with every 10 brake pads a free pad</p>
        
  </div>
  <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125 mb-56">
      <div className="w-full h-3/4">
      <BrandSlider />
      </div>
      <h1 className="2xl:text-[25px] sm:text-[30px] text-[20px]  not-italic  text-center text-xl font-bold text-white font-biorhyme"> New Brand</h1>
      <p className="font-bold text-white font-biorhyme pt-3">We have new Products coming in 2 weeks</p>
    </div>
  </div>

    </main>
  )
}

export default page



