import Image from 'next/image';
import React from 'react';
import Img from '@/assets/images/toys.png';

const SingleProduct = () => {
  return (
    <div className='container px-5 m-auto'>
      <div className='mt-[25px]'>
        <div className='flex items-center'>
          <Image src={Img} width={600} height={500} alt='img' />
          <div>
            <h2 className='text-[32px] font-semibold'>
              Becca: Rev Up the Playtime Excitement!
            </h2>
            <span>⭐⭐⭐⭐⭐</span>
            <p className='text-textColor font-semibold text-[32px]'>
              80 000 so`m
            </p>
            <p className='text-textGrey'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              minima beatae praesentium rerum quis voluptate cupiditate earum
              optio totam, omnis, sit eligendi dolorum minus? Aperiam ab
              corrupti explicabo perferendis nihil voluptates cum ex, expedita
              vel soluta provident quam omnis ipsum optio asperiores architecto
              tempore, autem ut? Quas beatae ratione minima.
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
