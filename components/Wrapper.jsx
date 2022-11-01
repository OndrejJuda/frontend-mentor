import Link from 'next/link';
import React from 'react';

import arrow from '../public/arrow-left.svg';

const Wrapper = ({ children }) => {
  return (
    <div className='relative'>
      <Link href='/'>
        <div className='absolute top-5 left-5 p-4 text-3xl font-bold cursor-pointer bg-white rounded-full w-16 h-16 flex justify-center items-center'>
          <img src={arrow.src} alt='arrow' className='w-10 h-10 -translate-x-1' />
        </div>
      </Link>
      <div className='flex justify-center items-center w-screen h-screen'>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;