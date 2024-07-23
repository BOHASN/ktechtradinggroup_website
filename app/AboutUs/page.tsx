/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Hero from '@/components/Hero/Hero'
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'

const page = () => {
  const [text, setText] = useState('');
  const phrases = [
    "At K-TECH TRADING GROUP, we stand as a premier destination for sourcing top-grade car spare parts meticulously curated from renowned manufacturers across the globe. With a dedicated focus on excellence and precision, we specialize in delivering wholesale quantities of premium-quality automotive components to meet the diverse needs of our clients."
  ];
  const typingSpeed = 30; // Speed in milliseconds

  useEffect(() => {
    let currentText = '';
    let currentPhraseIndex = 0;
    let letterIndex = 0;
    let typingTimeout: string | number | NodeJS.Timeout | undefined;

    const typing = () => {
      if (currentPhraseIndex === phrases.length) return;

      if (letterIndex < phrases[currentPhraseIndex].length) {
        currentText += phrases[currentPhraseIndex].charAt(letterIndex);
        setText(currentText);
        letterIndex++;
        typingTimeout = setTimeout(typing, typingSpeed);
      } else {
        currentPhraseIndex++;
        letterIndex = 0;
        setTimeout(typing, 500); // Delay before typing the next phrase (if any)
      }
    };

    typing();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);
  return (
    <main>
        <div className="flex-1 pt-40 padding-x pb-30">
        <h1 className="hero__title">
        About Us
        </h1>
      </div>

      <div>
      <h2 className="2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
        {text}
</h2>
      </div>
      <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
  <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Our Commitment to Quality</h1>
  </div>
</div>

<div>
<h2 className="  2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
Quality assurance stands at the core of our operations. We prioritize sourcing only the finest spare parts from trusted manufacturers,
 ensuring reliability, durability, and performance across an extensive range of car models and brands. Our commitment
 to industry standards guarantees that our clients receive products of exceptional quality, meeting their expectations consistently.</h2>
</div>


      <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
  <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Efficiency and Timeliness</h1>
  </div>
</div>

<div>
      <h2 className=" 2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme  items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
   
      With an efficient fleet and logistics network, we pride ourselves on swift and timely deliveries. Our rapid deployment ensures that 
      wholesale orders are delivered promptly to your warehouse or business location, enabling your operations to run seamlessly and efficiently.

</h2>
      </div>

      
      <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
  <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Dedicated Support</h1>
  </div>
</div>

<div>
      <h2 className="2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme  items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
   
      Our team of professionals is committed to providing expert support tailored to your requirements. Whether you seek guidance in 
      selecting the right spare parts or need assistance with wholesale orders, our dedicated team is here to assist you at every step.

</h2>
      </div>

    </main>
  )
}

export default page



