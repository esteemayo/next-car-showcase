'use client';

import { FC, Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

import { CarDetailProps } from '@/types';

const CarDetails: FC<CarDetailProps> = ({ car, isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={onClose}
                >
                  <Image
                    src='/svg/close.svg'
                    width={20}
                    height={20}
                    alt='close'
                    className='object-contain'
                  />
                </button>
                <div className='flex-1 flex flex-col gap-3'>
                  <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                    <Image
                      src='/img/hero.png'
                      alt='car model'
                      fill
                      priority
                      className='object-contain'
                    />
                  </div>
                  <div className='flex gap-3'>
                    <div className='flex-1 relative w-4 h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src='/img/hero.png'
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 relative w-4 h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src='/img/hero.png'
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 relative w-4 h-24 bg-primary-blue-100 rounded-lg'>
                      <Image
                        src='/img/hero.png'
                        alt='car model'
                        fill
                        priority
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
