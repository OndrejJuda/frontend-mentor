import Link from 'next/link';
import React, { useState } from 'react';
import { Wrapper } from '../../../components';
import { Card } from '../../../components/newbie/interactive-rating-component';

import { assets } from '../../../public/newbie/interactive-rating-component';

const Rate = () => {
  const [rating, setRating] = useState();

  return (
    <Wrapper>
      <Card>
        <div className='rounded-full w-12 h-12 flex justify-center items-center shadow-md bg-gray-800 mb-8'>
          <img src={assets.starIcon.src} alt='star' />
        </div>
        <h1 className='text-3xl text-white font-medium mb-4'>How did we do?</h1>
        <p className='text-gray-400 mb-4'>Plese let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='flex flex-row w-full justify-between mb-6'>
          {
            [1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type='button'
                onClick={() => setRating(num)}
              >
                <div className={` rounded-full w-12 h-12 flex justify-center items-center shadow-md ${rating === num ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-400'} hover:bg-orange-500 hover:text-white transition`}>
                  {num}
                </div>
              </button>
            ))
          }
        </div>
        <Link
          href={{
            pathname: rating ? '/newbie/interactive-rating-component/thanks' : '/newbie/interactive-rating-component/rate',
            ...(rating && { query: { rating } })
          }}
        >
          <div className='uppercase w-full p-4 text-center bg-orange-500 rounded-full text-white font-semibold tracking-wider hover:bg-white hover:text-orange-500 transition cursor-pointer'>
            Submit
          </div>
        </Link>
      </Card>
    </Wrapper >
  );
};

export default Rate;