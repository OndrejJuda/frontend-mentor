import Link from 'next/link';
import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div>
      <Link href='/'>
        <p className='p-4 text-xl font-bold cursor-pointer h-4'>HOME</p>
      </Link>
      <div className='flex justify-center items-center w-full h-[calc(100vh-32px)]'>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;