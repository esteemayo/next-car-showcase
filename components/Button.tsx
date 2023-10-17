'use client';

import { FC } from 'react';
import Image from 'next/image';

import { ButtonProps } from '@/types';

const Button: FC<ButtonProps> = ({
  title,
  btnType,
  containerStyles,
  onClick,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            fill
            alt='right icon'
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default Button;
