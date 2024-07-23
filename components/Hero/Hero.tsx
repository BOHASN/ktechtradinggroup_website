'use client'
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { url } from 'inspector';
import ImageSlider from '../ImageSlider';


const Hero = () => {
  const [text, setText] = useState('');
  const phrases = [
    "Your go-to trading group for high-quality car parts, engine components, body parts, and more. Explore our wide selection of automotive solutions for top-notch quality and reliability."
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
    <div>
      <div className="flex-1 pt-40 padding-x">
        <h1 className="hero__title">
          K-TECH Trading Group s.a.l
        </h1>
        <h2 className="hero__subtitle pt-20 pb-20 pl-10 pr-10 overflow-hidden">
          {text}
        </h2>
      </div>
      <ImageSlider/>
    </div>
  );
};

export default Hero;