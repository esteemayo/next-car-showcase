'use client';

import { FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from './';
import { ShowMoreProps } from '@/types';

const ShowMore: FC<ShowMoreProps> = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    //
  }, []);

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <Button
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
