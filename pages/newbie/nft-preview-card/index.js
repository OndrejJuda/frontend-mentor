import React from 'react';
import Image from 'next/image';
import { Wrapper } from '../../../components';

import { assets } from '../../../public/newbie/nft-card';

const NFTPreviewCard = () => {
  return (
    <Wrapper>
      <article className='max-w-[350px] m-8 p-6 rounded-xl bg-slate-800'>
        <div className='group relative max-w-[300px] max-h-[300px] mx-auto'>
          <Image src={assets.image} alt='nft image' className='rounded-md' />
          <div className='group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-cyan-500 absolute w-full h-full inset-0 opacity-30 rounded-md  group-hover:cursor-pointer' />
          <div className='hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block  group-hover:cursor-pointer'>
            <Image src={assets.viewIcon} alt='view' />
          </div>
        </div>
        <h1 className='text-white font-bold text-xl my-4 hover:text-cyan-400 hover:cursor-pointer'>Equilibrium #3429</h1>
        <p className='text-slate-400 mb-3'>Our Equilibrium collection promotes balance and calm.</p>
        <div className='flex flex-row justify-between mb-4'>
          <div className='flex flex-row justify-start items-center gap-2'>
            <Image src={assets.ethereumIcon} alt='ETH' />
            <p className='text-cyan-400 font-bold'>0.041 ETH</p>
          </div>
          <div className='flex flex-row justify-start items-center gap-2'>
            <Image src={assets.clockIcon} alt='Clock' />
            <p className='text-slate-400 font-semibold'>3 days left</p>
          </div>
        </div>
        <div className='flex flex-row justify-start items-center gap-4 border-t-[1px] border-slate-600 pt-3'>
          <div className='w-[32px] h-[32px] rounded-full border border-white'>
            <Image src={assets.avatar} alt='author' />
          </div>
          <p className='text-slate-400'>Creation of <span className='font-semibold text-white hover:text-cyan-400 hover:cursor-pointer'>Jules Wyvern</span></p>
        </div>
      </article>
    </Wrapper>
  );
};

export default NFTPreviewCard;