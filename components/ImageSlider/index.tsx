/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function ImageSlider() {
  const slides = [
    { src: '/car1.JPG', width: 6000, height: 4000 },
    { src: '/Eurolubproducts.JPG', width: 6000, height: 4000 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <div className=" max-w-[1100px] h-[600px] w-full m-auto py-16  relative group mb-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity ${
            currentSlide === index ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <Image
            src={slide.src}
            alt={`Slide ${index}`}
            width={slide.width}
            height={slide.height}
            className="w-full h-full rounded-2xl object-cover duration-500"
          />
        </div>
      ))}

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex items-center justify-center absolute bottom-8 w-full">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`mx-2 h-4 w-4 rounded-full bg-black/50 cursor-pointer ${
              currentSlide === slideIndex ? 'bg-black' : ''
            }`}
          >
            <RxDotFilled className=" text-white"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
