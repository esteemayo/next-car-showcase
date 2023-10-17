'use client';

import { FC } from 'react';

import { ButtonProps } from '@/types';

const Button: FC<ButtonProps> = ({
  title,
  btnType,
  containerStyles,
  onClick,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
