'use client';

import Image from 'next/image';
import { FC, useMemo } from 'react';

import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
  car: CarProps;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const { city_mpg, drive, make, model, transmission, year } = car;

  const carRent = useMemo(() => {
    return calculateCarRent(city_mpg, year);
  }, []);

  return (
    <div className='car-card group'>
      <div className='car-card__contact'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
      </p>
    </div>
  );
};

export default CarCard;
