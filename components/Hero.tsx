'use client';

import Image from 'next/image';
import { useCallback } from 'react';

import { Button } from '.';

const Hero = () => {
  const handleScroll = useCallback(() => {
    //
  }, []);

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, book, or rent a car—quick and super easy!
        </h1>
        <p className='hero__subtitle'>
          Streamline your car rental and experience with our effortless booking
          process.
        </p>
        <Button
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          onClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/img/hero.png' fill alt='' className='object-contain' />
          <div className='hero__image-overlay' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
