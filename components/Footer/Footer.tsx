'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineHeatMap,
  AiOutlineLinkedin
} from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';


const Footer = () => {
  return (
    <>
    <div className="bg-white h-full w-full flex md:flex-row flex-col justify-around items-start pt-10">
      <div className="p-2">
        <ul>
          <p className="text-[#1C1D4D] font-bold text-3xl pb-6">
          <Link href="/">
            <Image
              src="/LOGO-removebg-preview.png"
              alt="logo"
              width={120}
              height={60}
              className="cursor-pointer"
              priority
            />
        </Link>
          </p>
          <div className="flex gap-6 pb-10">
          <a href="https://www.instagram.com/ktechtrading.group/" target="_blank" rel="noopener noreferrer">          
  <AiOutlineInstagram className="text-2xl cursor-pointer text-[#1C1D4D] transition duration-300 hover:text-[#D9D9D9] transform hover:scale-110"/>
  </a>
  <a href="https://www.linkedin.com/company/k-tech-trading-group-s-a-l/" target="_blank" rel="noopener noreferrer">          
  <AiOutlineLinkedin className="text-2xl cursor-pointer text-[#1C1D4D] transition duration-300 hover:text-[#D9D9D9] transform hover:scale-110"/>
  </a>
  <a href="https://www.facebook.com/ktechtradinggroup/" target="_blank" rel="noopener noreferrer">
    <AiOutlineFacebook className="text-2xl cursor-pointer text-[#1C1D4D] transition duration-300 hover:text-[#D9D9D9] transform hover:scale-110"/>
  </a>
</div>


        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="font-biorhyme  text-[#1C1D4D] font-bold text-2xl pb-4">Contact Us :</p>
          
          
        


          <li className="font-biorhyme text-[#1C1D4D] text-md pb-8 font-extrabold cursor-pointer transition duration-300 transform hover:text-[#D9D9D9] hover:scale-105">
  <a href="https://wa.me/96181001320" className="text-[#1C1D4D] hover:text-[#D9D9D9] flex items-center">
    <AiOutlineWhatsApp className="text-[#1C1D4D] inline-block mr-5 w-6 h-6 hover:text-[#D9D9D9]" />
    +961 81 001 320
  </a>
</li>

<li className="font-biorhyme text-[#1C1D4D] text-md pb-8 font-extrabold cursor-pointer transition duration-300 transform hover:text-[#D9D9D9] hover:scale-105">
      <a href="tel:+9611455901" className="text-[#1C1D4D] hover:text-[#D9D9D9] flex items-center">
        <AiOutlinePhone className="text-[#1C1D4D] inline-block mr-5 transform scale-x-[-1] w-6 h-6 hover:text-[#D9D9D9]" />
        +961 1 455 901 - 2
      </a>
    </li>
          
    <li className="font-biorhyme text-[#1C1D4D] text-md pb-8 font-extrabold cursor-pointer transition duration-300 transform hover:text-[#D9D9D9] hover:scale-105">
  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@k-techgroups.com" className="text-[#1C1D4D] hover:text-[#D9D9D9] flex items-center">
    <AiOutlineMail className="text-[#1C1D4D] inline-block mr-5 w-6 h-6 hover:text-[#D9D9D9]" />
    info@k-techgroups.com
  </a>
</li>
<li className="font-biorhyme text-[#1C1D4D] text-md pb-4 font-extrabold cursor-pointer transition duration-300 transform hover:text-[#D9D9D9] hover:scale-105">
  <a href="https://maps.app.goo.gl/fsZLCQaPmC4Fo2ge8" className="text-[#1C1D4D] hover:text-[#D9D9D9] flex items-center">
    <SlLocationPin className="text-[#1C1D4D] inline-block mr-5 w-6 h-6 hover:text-[#D9D9D9]" />
    Bourj EL Brajne Beirut, Lebanon
  </a>
</li>
        </ul>
      </div>
      <div className="map-responsive pl-3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3313.603549212697!2d35.4966389!3d33.8483333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUwJzU0LjAiTiAzNcKwMjknNDcuOSJF!5e0!3m2!1sen!2slb!4v1703236961485!5m2!1sen!2slb" width="350" height="300" loading="lazy" className=""></iframe>
      </div>
      <div className='pl-8'>
      <Image
  src="/BRANDS.png"
  alt="logo"
  width={300}
  height={200}
  className="cursor-pointer"
  priority
/>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center text-center pb-5 pt-5 bg-white">
      <h1 className="text-[#1C1D4D] font-semibold">Copyright © 2023
      <span className="hover:text-[#D9D9D9] font-semibold cursor-pointer "> <Link href="/">K-TECH TRADING GROUP</Link></span></h1>
    </div>
    </>
  )
}

export default Footer