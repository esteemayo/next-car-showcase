'use client';

import Image from 'next/image';
import { FormEvent, useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { SearchButton, SearchManufacturer } from './';

const SearchBar = () => {
  const router = useRouter();

  const [model, setModel] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const updateSearchParams = useCallback(
    (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if (model) {
        searchParams.set('model', model);
      } else {
        searchParams.delete('model');
      }

      if (manufacturer) {
        searchParams.set('manufacturer', manufacturer);
      } else {
        searchParams.delete('manufacturer');
      }

      const newPathname = `${
        window.location.pathname
      }?${searchParams.toString()}`;

      router.push(newPathname);
    },
    []
  );

  const handleSearch = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      return toast.error('Please fill in the search bar');
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
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
          src='/img/model-icon.png'
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
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
