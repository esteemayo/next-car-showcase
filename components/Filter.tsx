'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';

import { CarFilterProps } from '@/types';

const Filter: FC<CarFilterProps> = ({ title, options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className='relative w-fit z-10'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image
              src='/svg/chevron-up-down.svg'
              width={20}
              height={20}
              alt='chevron up down'
              className='ml-4 object-contain'
            />
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default Filter;
