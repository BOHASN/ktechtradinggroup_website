'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter
} from 'react-icons/ai';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full shadow-xl bg-white z-50" style={{ height: '100px' }}>
          <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 ">
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
        <div className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} onClick={handleNav} />
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8 mr-20">
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:bg-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/" onClick={closeMenu}>
               Home
              </Link>
            </li>
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:bg-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/Services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:bg-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/Partners"  onClick={closeMenu}>
                Partners
              </Link>
            </li>
            {/* <li className="font-biorhyme text-[#1C1D4D] text-center hover:bg-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/News"  onClick={closeMenu}>
                News
              </Link>
            </li> */}
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:bg-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/AboutUs"  onClick={closeMenu}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-full h-screen bg-white p-10 transition duration-500'
            : 'fixed left-full top-0 p-10 transition duration-500'
        }
      >
        <div className="flex justify-end mb-10 md:hidden">
          <AiOutlineClose size={25} onClick={handleNav} />
        </div>
        <div className="flex flex-col space-y-14">
          <ul>
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:text-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/"  onClick={closeMenu}>
                Home
              </Link>
            </li>
          </ul>
          <ul>
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:text-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/Services"  onClick={closeMenu}>
                Services
              </Link>
            </li>
          </ul>
          <ul>
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:text-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/Partners"  onClick={closeMenu}>
                Partners
              </Link>
            </li>
          </ul>
          {/* <ul>
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:text-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/News"  onClick={closeMenu}>
                News
              </Link>
            </li>
          </ul> */}
          <ul>
            <li className="font-biorhyme text-[#1C1D4D] text-center hover:text-[#D9D9D9] rounded-lg not-italic font-bold text-xl py-2 px-4">
              <Link href="/AboutUs"  onClick={closeMenu}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-around py-6 mt-10">
          <AiOutlineInstagram size={30} className="hover:text-[#D9D9D9] text-[#1C1D4D] cursor-pointer"/>
          <AiOutlineFacebook size={30} className="hover:text-[#D9D9D9] text-[#1C1D4D] cursor-pointer"/>
          <AiOutlineTwitter size={30} className="hover:text-[#D9D9D9] text-[#1C1D4D] cursor-pointer" />
        </div>
        <div className="flex justify-center">
          <Image
            src="/LOGO-removebg-preview.png"
            alt="logo"
            width={160}
            height={100}
            className="cursor-pointer"
            priority
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
