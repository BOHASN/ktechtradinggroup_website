/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero/Hero'
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'
import { RxContainer } from 'react-icons/rx'
import Link from 'next/link';

const page = () => {
  const [text, setText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  const phrases = [
    "Welcome to K-TECH Trading Group s.a.l",
    "Your Premier Wholesale Destination for Top-Quality Car Spare Parts"
  ];
  const typingSpeed = 30; // Speed in milliseconds

  useEffect(() => {
    const typeText = (phrase: string, setTextFunction: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: any): void; }) => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= phrase.length) {
          setTextFunction(phrase.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    };

    typeText(phrases[0], setText);
    setTimeout(() => typeText(phrases[1], setDestinationText), phrases[0].length * typingSpeed);

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <main>
<div>
      <div className="flex-1 pt-40 padding-x">
        <h1 className="hero__title">
        {text}

        </h1>
        <h1 className="hero__title pt-10 pb-10">
        {destinationText}

        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-40">
      <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125">
        <Image
          src="/renault-kangoo-rapid.png"
          alt="logo"
          className="cursor-pointer w-full h-auto"
          width="160"
          height="100"
        />
      </div>
      <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125">
        <Image
          src="/renault-kangoo-rapid.png"
          alt="logo"
          className="cursor-pointer w-full h-auto"
          width="160"
          height="100"
        />
      </div>
      <div className="w-1/3 md:w-auto transform transition-transform hover:scale-125">
        <Image
          src="/renault-kangoo-rapid.png"
          alt="logo"
          className="cursor-pointer w-full h-auto"
          width="160"
          height="100"
        />
      </div>
    </div>
      
      <div>
      <h2 className="  2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme  items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
   
   At K-TECH TRADING GROUP, we specialize in sourcing premium-grade car spare parts from renowned
   manufacturers worldwide. Our comprehensive catalog features meticulously curated selections of engine components, body
   parts, and various spare parts tailored for automobiles. With a commitment to reliability and precision, we prioritize
   delivering wholesale quantities of top-tier car spare parts swiftly and efficiently to your warehouse or business location.
   Our rapid fleet of vehicles ensures timely deliveries across diverse regions to meet your operational needs.

</h2>
      </div>
      <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
  <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Why Choose Us :</h1>
  </div>
</div>

<div>
<h2 className="  2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme items-center pt-10 pl-10 pr-10 pb-20 leading-loose">


<li>Quality Assurance: We prioritize top-quality spare parts sourced from trusted manufacturers.</li>
<li>Diverse Range: Catering to various car models and brands, ensuring compatibility.</li>
<li>Efficient Delivery: Rapid fleet deployment for timely and efficient deliveries.</li>
<li>Expert Support: Dedicated team of professionals to assist with your requirements.</li>
<li>Industry Standards: Compliance with industry standards ensuring reliability.</li></h2>
</div>


      <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
      <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Partner With Us :</h1>
  </div>
</div>

<div>
      <h2 className="  2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme  items-center pt-10 pl-10 pr-10 pb-20 leading-loose">
   
      Elevate your wholesale automotive business with K-TECH TRADING GROUP – your reliable source for top-tier car spare parts. 
      Contact us today to place wholesale orders or inquire about our extensive range of products. 
      Our dedicated team of experts is here to assist you in fulfilling your bulk automotive component requirements.

</h2>
      </div>

      
      <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
      <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Experience the Difference :</h1>
  </div>
</div>

<div>
      <h2 className="  2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme items-center pt-10 pl-10 pr-10 pb-20 leading-loose">
   
      Count on K-TECH TRADING GROUP as your trusted wholesale supplier. 
      We pride ourselves on delivering excellence and reliability to ensure that your business operates smoothly and efficiently. 
      Experience the difference with our commitment to providing exceptional service and superior car spare parts exclusively for professionals in the automotive industry. 

</h2>
<a href="/AboutUs" className="flex justify-center items-center mb-16 cursor-pointer">
  <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 transform transition-transform hover:scale-105">
    <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
      <h1>Learn More About Our Company</h1>
    </div>
  </div>
</a>

</div>

      

    
    </div>
    </main>
  )
}

export default page



