'use client';

import { FC, Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer: FC<SearchManufacturerProps> = ({
  manufacturer,
  setManufacturer,
}) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

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
      <Transition
        as={Fragment}
        leave='transition ease-in duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        afterLeave={() => setQuery('')}
        show={true}
      >
        <Combobox>
          <Combobox.Options>
            {filteredManufacturers.map((item) => {
              return (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              );
            })}
          </Combobox.Options>
        </Combobox>
      </Transition>
    </div>
  );
};

export default SearchManufacturer;
