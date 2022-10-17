import React from 'react';

const Card = ({ children }) => {
  return (
    <article className='rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-8 w-[400px]'>
      {children}
    </article>
  );
};

export default Card;