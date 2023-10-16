import { MouseEvent, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  btnType?: string;
  containerStyles?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
}
