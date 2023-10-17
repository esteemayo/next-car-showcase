'use client';

import { FormEvent, useCallback } from 'react';
import { SearchManufacturer } from '.';

const SearchBar = () => {
  const handleSearch = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;
