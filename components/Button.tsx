'use client';

import { FC } from 'react';
import Image from 'next/image';

import { ButtonProps } from '@/types';

const Button: FC<ButtonProps> = ({ title, containerStyles, onClick }) => {
  return (
    <button
      disabled={false}
      type='button'
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
