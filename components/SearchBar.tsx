'use client';

import Image from 'next/image';
import { FormEvent, useCallback, useState } from 'react';

import { SearchButton, SearchManufacturer } from './';

const SearchBar = () => {
  const [model, setModel] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='img/model-icon.png'
          width={25}
          height={25}
          alt='car model'
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
      </div>
    </form>
  );
};

export default SearchBar;
