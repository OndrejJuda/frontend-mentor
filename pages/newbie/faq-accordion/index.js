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
        <section className='bg-white w-[350px] rounded-2xl shadow-xl flex flex-col items-center py-12 px-4 mx-8'>
          <div className='h-20'>
            <div className='relative -translate-y-[85%] md:hidden'>
              <img src={assets.womanMobile.src} alt='Woman with monitor' className='w-[250px]' />
              <img src={assets.bgMobile.src} alt='Shadow' className='absolute top-[60%]' />
            </div>
          </div>
          <h1 className='text-3xl font-bold mb-8'>FAQ</h1>
          <ul>
            {
              FAQ.map((item, index) => (
                <FAQItem key={index} item={item} />
              ))
            }
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};

export default FAQAccordion;