import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';

const Footer = () => {
  const copyrightLabel = useMemo(() => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }, []);

  return (
    <footer className='flex flex-col text-blue-100 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            src='/svg/logo.svg'
            width={118}
            height={18}
            alt='logo'
            className='object-contain'
          />
          <div className='text-base text-gray-700'>
            Carbub {copyrightLabel}
            <br /> All right reserved &copy;
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
