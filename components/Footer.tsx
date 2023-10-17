import Link from 'next/link';
import { useMemo } from 'react';
import Image from 'next/image';

import { footerLinks } from '@/constants';

const Footer = () => {
  const copyrightLabel = useMemo(() => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }, []);

  return (
    <footer className='flex flex-col text-blue-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            src='/svg/logo.svg'
            width={118}
            height={18}
            alt='logo'
            className='object-contain'
          />
          <p className='text-base text-gray-700'>
            Carhub {copyrightLabel}
            <br /> All right reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
          {footerLinks.map((item) => {
            const { links, title } = item;
            return (
              <div key={title} className='footer__link'>
                <h3 className='font-bold'>{title}</h3>
                <div className='flex flex-col gap-5'>
                  {links.map((link) => {
                    const { title, url } = link;
                    return (
                      <Link key={title} href={url} className='text-gray-500'>
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@{copyrightLabel} CarHub. All Rights Reserved</p>
        <div className='footer__copyrights-link'>
          <Link href='/' className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
