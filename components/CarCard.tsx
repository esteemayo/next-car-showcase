'use client';

import Image from 'next/image';
import { FC, useMemo } from 'react';

import { CarProps } from '@/types';
import { useCarModal } from '@/hooks/useCarModal';
import { calculateCarRent, generateCarImageUrl } from '@/utils';

import { Button, CarDetails } from './';

interface CarCardProps {
  car: CarProps;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const { city_mpg, drive, make, model, transmission, year } = car;

  const isOpen = useCarModal((state) => state.isOpen);
  const onClose = useCarModal((state) => state.onClose);
  const onOpen = useCarModal((state) => state.onOpen);

  const carRent = useMemo(() => {
    return calculateCarRent(city_mpg, year);
  }, []);

  const transmissionLabel = useMemo(() => {
    return transmission === 'a' ? 'Automatic' : 'Manual';
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
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src={generateCarImageUrl(car)}
          alt='car model'
          fill
          priority
          className='object-contain'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/svg/steering-wheel.svg'
              width={20}
              height={20}
              alt='steering wheel'
            />
            <p className='text-[14px]'>{transmissionLabel}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/svg/tire.svg' width={20} height={20} alt='tire' />
            <p className='text-[14px]'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/svg/gas.svg' width={20} height={20} alt='gas' />
            <p className='text-[14px]'>{city_mpg} MPG</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <Button
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/svg/right-arrow.svg'
            onClick={onOpen}
          />
        </div>
      </div>
      <CarDetails car={car} isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default CarCard;
