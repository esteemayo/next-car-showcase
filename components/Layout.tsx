'use client';

import { FC } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

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
