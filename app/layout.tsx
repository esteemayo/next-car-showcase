import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
