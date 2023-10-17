'use client';

import { FormEvent, useCallback, useState } from 'react';
import { SearchManufacturer } from '.';

const SearchBar = () => {
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
      </div>
    </form>
  );
};

export default SearchBar;
