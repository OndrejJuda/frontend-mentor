import React from 'react';
import { Wrapper } from '../../../components';

import { assets } from '../../../public/newbie/product-preview-card';

const ProductPreviewCard = () => {
  return (
    <Wrapper>
      <article className=' bg-orange-50 rounded-xl flex flex-col md:flex-row w-[350px] md:w-[700px] md:items-center'>
        <img src={assets.productMobile.src} alt='Product' className='rounded-t-xl w-[350px] object-cover md:hidden' />
        <img src={assets.productDesktop.src} alt='Product' className='w-[350px] object-cover rounded-l-xl hidden md:block' />
        <div className='p-6 md:flex-1 '>
          <h2 className='font-montserrat font-medium uppercase tracking-[0.2em] mb-2'>Perfume</h2>
          <h1 className='font-fraunces font-bold text-3xl mb-4'>Gabrielle Essence Eau De Parfum</h1>
          <p className='mb-6'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creator for the House of CHANEL.</p>
          <div className='flex flex-row justify-start items-center gap-6 mb-4'>
            <p className='text-3xl font-fraunces font-bold text-emerald-700'>$149.99</p>
            <p className='line-through text-sm text-gray-500'>$169.99</p>
          </div>
          <button type='button' className='rounded-xl bg-emerald-700 hover:bg-emerald-900 flex justify-center items-center px-8 py-4 w-full gap-2'>
            <img src={assets.cartIcon.src} alt='Cart' />
            <p className='font-semibold text-white'>Add to Cart</p>
          </button>
        </div>
      </article>
    </Wrapper>
  );
};

export default ProductPreviewCard;