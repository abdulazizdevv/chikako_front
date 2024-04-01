import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Fire from '@/assets/icons/fire.svg';

export const Navbar = () => {
  return (
    <nav className=' shadow-lg shadow-[#eee] '>
      <div className='container px-5 py-[15px] flex items-center justify-between m-auto'>
        <div className='flex items-center gap-[32px] font-[500]'>
          {['Home', 'About', 'Categories', 'Pages', 'Fikrlar', 'Contact'].map(
            (el, idx) => (
              <Link key={idx} href={`#`} className='hover:text-mainColor '>
                {el}
              </Link>
            )
          )}
        </div>
        <div className='flex items-center px-[14px] gap-2 font-[500] py-[8px] bg-[#FAE7EA] rounded-[50px]'>
          <Image src={Fire} width={25} height={25} alt='fire' />
          <p className='text-textColor'>Super Deals Product</p>
        </div>
      </div>
    </nav>
  );
};
