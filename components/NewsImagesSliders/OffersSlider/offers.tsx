/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function ImageSlider() {
  const slides = [
    { src: '/NeoBrake-Air-Disc-Brake-Pads-2.1.png', width: 400, height: 300 },
    { src: '/NeoBrake-Air-Disc-Brake-Pads-2.1.png', width: 400, height: 300 },
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
    <div className=" max-w-[2000px] h-[300px] w-full m-auto py-16 px-4 relative group mb-10">
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

      <div className="flex items-center justify-center absolute bottom-4 w-80">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`mt-30 mx-2 h-4 w-4 rounded-full bg-black/50 cursor-pointer ${
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
