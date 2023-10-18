'use client';

import { FC } from 'react';

import { LayoutProps } from '@/types';
import ToastProvider from '@/providers/ToastProvider';

import { Footer, Navbar } from './';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ToastProvider />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
