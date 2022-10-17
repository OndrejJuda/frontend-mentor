import React from 'react';
import { useRouter } from 'next/router';
import { Wrapper } from '../../../components';
import { Card } from '../../../components/newbie/interactive-rating-component';

import { assets } from '../../../public/newbie/interactive-rating-component';
import Link from 'next/link';

const Thanks = () => {
  const { query: { rating } } = useRouter();


  return (
    <Wrapper>
      <Card>
        <div className='flex flex-col gap-6 justify-center items-center'>
          <Link
            href='/newbie/interactive-rating-component/rate'
          >
            <img src={assets.thankYou.src} alt='thank you' className='cursor-pointer' />
          </Link>
          <p className='rounded-full bg-gray-800 text-orange-400 p-2 px-4 shadow-md'>You selected {rating} out of 5</p>
          <h1 className='text-3xl text-white font-semibold'>Thank you!</h1>
          <p className='text-center text-gray-400'>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
        </div>
      </Card>
    </Wrapper>
  );
};

export default Thanks;