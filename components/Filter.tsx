'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';

import { CarFilterProps } from '@/types';

const Filter: FC<CarFilterProps> = ({ title, options }) => {
  return <div>Filter</div>;
};

export default Filter;
