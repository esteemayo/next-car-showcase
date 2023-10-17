'use client';

import { FC, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';

import { SearchManufacturerProps } from '@/types';

const SearchManufacturer: FC<SearchManufacturerProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  const [query, setQuery] = useState('');

  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px'>
            <Image
              src='/svg/car-logo.svg'
              width={20}
              height={20}
              alt='Car Logo'
              className='ml-4'
            />
          </Combobox.Button>
          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
