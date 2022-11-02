/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FAQItem } from '../../../components/newbie/faq-accordion';
import { Wrapper } from '../../../components';
import { assets } from '../../../public/newbie/faq-accordion';

const FAQ = [
  { question: 'How Many team members can I invite?', answer: 'You can invite up to 10 comrades.', },
  { question: 'What is the maximum file upload size?', answer: 'No more than 2GB. All files in your account must fit your allotted storage space.', },
  { question: 'How do I reset my password?', answer: 'Forgot your password or need to change it? Here’s a few steps you can take to reset your password.', },
  { question: 'Can I cancel my subscription?', answer: 'Yes, you are free to cancel each month. Your subscription will not be automatically renewed after cancellation.', },
  { question: 'Do you provide additional support?', answer: 'Our support is here for you every work day from nine to five.', },
];

const FAQAccordion = () => {
  return (
    <Wrapper>
      <div className='bg-gradient-to-b from-violet-400 to-violet-700 w-full h-full flex justify-center items-center'>
        <section className='bg-white w-[360px] md:w-[760px] rounded-2xl shadow-xl flex flex-col  md:flex-row items-center md:gap-16 py-12 md:py-16 px-4 md:px-24 mx-8 relative md:overflow-hidden'>
            <div className='h-20 md:hidden'>
              <img src={assets.womanMobile.src} alt='Woman with monitor' className='w-[250px] absolute -top-28 left-14' />
              <img src={assets.bgMobile.src} alt='Shadow' className='absolute top-0 left-14' />
            </div>
          <div className='w-[180px] hidden md:flex'>
            <img src={assets.womanDesktop.src} alt='Woman with monitor' className='absolute top-24 -left-16 w-[360px] z-10' />
            <img src={assets.bgDesktop.src} alt='Shadow' className='absolute -top-52 -left-[29rem] w-[800px]' />
          </div>
          <div className='flex flex-col items-center md:items-start md:w-[340px]'>
            <h1 className='text-3xl font-bold mb-8'>FAQ</h1>
            <ul>
              {
                FAQ.map((item, index) => (
                  <FAQItem key={index} item={item} />
                ))
              }
            </ul>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default FAQAccordion;