/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero/Hero'
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'

const page = () => {
  const [text, setText] = useState('');
  const phrases = [
    "At K-TECH TRADING GROUP, we take pride in our strategic collaborations and strong alliances with industry leaders. These partnerships enable us to provide you with the highest quality products and exceptional service. We are honored to be associated with esteemed companies such as:"
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
     <div>
      <div className="flex-1 pt-40 padding-x">
        <h1 className="hero__title">
        Our Partners

        </h1>
      </div>
    
      
      <div>
      <h2 className="  2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme  items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
        {text}

</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-40">
  <div className="w-auto md:w-auto transform transition-transform hover:scale-125">
    <a href="https://www.master-sport.de/?lang=en" target="_blank" rel="noopener noreferrer">
      <div className="bg-white p-4 rounded-lg flex justify-center items-center" style={{ width: '260px', height: '200px' }}>
        <Image
          src="/mastersports.png"
          alt="logo"
          className="cursor-pointer w-full h-auto"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </a>
  </div>
  <div className="w-auto md:w-auto transform transition-transform hover:scale-125">
    <a href="https://eurolub.com/en/" target="_blank" rel="noopener noreferrer">
      <div className="bg-white p-4 rounded-lg flex justify-center items-center" style={{ width: '260px', height: '200px' }}>
        <Image
          src="/Eurolub.png"
          alt="logo"
          className="cursor-pointer w-full h-auto"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </a>
  </div>
</div>


      <a href="https://www.master-sport.de/?lang=en" className="inline-block border-2 bg-white rounded-lg p-1 mt-36 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
  <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Master-Sport-Automobiltechnik
</h1>
  </div>
</a>

<div>
<h2 className="  2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
Master Sports is renowned for its expertise in manufacturing and supplying high-performance automotive components. 
Partnering with Master Sports allows us to offer a wide range of premium-grade sports car parts and accessories, 
catering to enthusiasts and professionals alike. 
Together, we aim to elevate your automotive experience with top-notch products.</h2>
</div>

<a href="https://eurolub.com/en/" className="inline-block border-2 bg-white rounded-lg p-1  pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
  <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Eurolub Efficiency in Fluids</h1>
  </div>
</a>

<div>
<h2 className=" 2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme  items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
Eurolub stands as a beacon of excellence in the automotive lubricant industry. Their commitment to innovation and superior product quality aligns seamlessly with our mission at K-TECH TRADING GROUP.
 Our collaboration with Eurolub ensures that you receive top-tier lubricants and related products,
  meeting and exceeding industry standards.</h2>
</div>
      <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
      <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Why Partner With Us :</h1>
  </div>
</div>

<div>
      <h2 className=" 2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme  items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
      Our partnerships with Eurolub and Master Sports signify our dedication to providing you with an unparalleled range of top-quality automotive products.
       Through these collaborations, we ensure that our customers receive only the best, 
       backed by innovation, reliability, and industry expertise.

</h2>
      </div>

      
      <div className="inline-block border-2 bg-white rounded-lg p-1 pr-10 pl-10 ml-10 mb-10 transform transition-transform hover:scale-105 cursor-pointer">
      <div className="2xl:text-[28px] sm:text-[15px] text-[15px] not-italic font-bold text-[#1C1D4D] font-biorhyme text-justify items-center pt-0 pl-0 pr-0 pb-0 leading-relaxed">
    <h1>Join Us :</h1>
  </div>
</div>

<div>
      <h2 className="  2xl:text-[25px] sm:text-[20px] text-[15px]  not-italic font-bold text-white font-biorhyme items-center pt-20 pl-10 pr-10 pb-20 leading-relaxed">
   
      Interested in collaborating with K-TECH TRADING GROUP? We are open to exploring new partnerships and alliances that align with our commitment to 
      excellence in the automotive industry. Contact us today to discuss potential collaborations or learn more about our partnership programs.

</h2>

</div>

      

    
    </div>
    </main>
  )
}

export default page



