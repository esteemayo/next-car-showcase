import { MouseEvent, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface FilterProps {
  title: 'fuel' | 'year';
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer(manufacturer: string): void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface CarDetailProps {
  isOpen: boolean;
  onClose(): void;
  car: CarProps;
}

export interface SearchButtonProps {
  otherClasses?: string;
}
