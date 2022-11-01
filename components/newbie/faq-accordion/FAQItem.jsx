import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { assets } from '../../../public/newbie/faq-accordion';

const FAQItem = ({ item: { question, answer } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className='border-b py-2'>
      <div className='flex justify-between items-center gap-4'>
        <motion.h2
          variants={{
            open: { fontWeight: 600 },
            collapsed: { fontWeight: 'normal' }
          }}
          animate={isOpen ? 'open' : 'collapsed'}
          transition={{ duration: 1 }}
        >
          {question}
        </motion.h2>
        <button
          className='cursor-pointer'
          type='button'
          onClick={() => { setIsOpen((prevValue) => !prevValue) }}
        >
          <motion.div
            variants={{
              open: { rotate: 0 },
              collapsed: { rotate: 180 }
            }}
            animate={isOpen ? 'open' : 'collapsed'}
            transition={{ duration: 0.2 }}
          >
            <img
              src={assets.arrowDown.src}
              alt='arrow'
            />
          </motion.div>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {
          isOpen && (
            <motion.p
              className='text-gray-600'
              variants={{
                open: { y: 0, opacity: 1 },
                collapsed: { y: -2, opacity: 0 }
              }}
              initial='collapsed'
              animate='open'
              exit='collapsed'
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              {answer}
            </motion.p>
          )
        }
      </AnimatePresence>
    </article>
  );
};

export default FAQItem;