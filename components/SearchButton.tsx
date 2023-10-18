'use client';

import { FC } from 'react';
import { SearchButtonProps } from '@/types';

const SearchButton: FC<SearchButtonProps> = ({ otherClasses }) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}></button>
  );
};

export default SearchButton;
