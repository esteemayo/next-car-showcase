import { MouseEvent, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  btnType?: 'button' | 'submit';
}
