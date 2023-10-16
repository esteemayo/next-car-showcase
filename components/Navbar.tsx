import Link from 'next/link';
import Image from 'next/image';

import { Button } from '.';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/svg/logo.svg'
            width={118}
            height={18}
            alt='Car Hub Logo'
            className='object-contain'
          />
        </Link>
        <Button
          title='Sign in'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </header>
  );
};

export default Navbar;
