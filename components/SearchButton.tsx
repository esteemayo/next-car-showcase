'use client';

import { FC } from 'react';
import Image from 'next/image';

import { SearchButtonProps } from '@/types';

const SearchButton: FC<SearchButtonProps> = ({ otherClasses }) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src='/svg/magnifying-glass.svg'
        width={40}
        height={40}
        alt='magnifying glass'
        className='object-contain'
      />
    </button>
  );
};

export default SearchButton;
