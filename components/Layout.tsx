'use client';

import { FC } from 'react';

import { Footer, Navbar } from '.';
import { LayoutProps } from '@/types';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
