'use client';

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
          Find, book, or rent a car - quickly and easily!
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
    </div>
  );
};

export default Hero;
