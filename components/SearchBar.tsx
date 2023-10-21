'use client';

import Image from 'next/image';
import { FormEvent, useCallback, useState } from 'react';
import { FC } from 'react';
import { toast } from 'react-hot-toast';

import { SearchBarProps } from '@/types';
import { SearchButton, SearchManufacturer } from './';

const SearchBar: FC<SearchBarProps> = ({ setManufacturer, setModel }) => {
  const [searchModel, setSearchModel] = useState('');
  const [searchManufacturer, setSearchManufacturer] = useState('');

  const handleSearch = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === '' && searchModel === '') {
      return toast.error('Please fill in the search bar');
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  }, []);

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/img/model-icon.png'
          width={25}
          height={25}
          alt='car model'
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input
          type='text'
          name='model'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
