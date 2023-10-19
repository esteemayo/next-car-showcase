'use client';

import { FC, useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { ShowMoreProps } from '@/types';
import { updateSearchParams } from '@/utils';

import { Button } from './';

const ShowMore: FC<ShowMoreProps> = ({ pageNumber, isNext,setLimit }) => {
  const handleNavigation = useCallback(() => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit)
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
