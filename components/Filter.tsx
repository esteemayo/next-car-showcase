'use client';

import { FC, Fragment, useCallback, useState } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/navigation';

import { CarFilterProps } from '@/types';
import { updateSearchParams } from '@/utils';

const Filter: FC<CarFilterProps> = ({ title, options }) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = useCallback((e: { title: string, value: string }) => {
    const newPathname = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathname);
  }, [router]);

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
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => {
                const { title, value } = option;
                return (
                  <Listbox.Option
                    key={title}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? 'bg-primary-blue' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {title}
                      </span>;
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Filter;
