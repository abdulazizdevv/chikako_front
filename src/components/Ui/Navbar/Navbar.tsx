import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Fire from '@/assets/icons/fire.svg';
import { useSetStore } from '@/store/store';

export const Navbar = () => {
  const { dictionary } = useSetStore();

  return (
    <nav className=' shadow-lg '>
      <div className='container px-3 py-[15px] flex items-center justify-between m-auto'>
        <div className='flex items-center gap-[32px] font-[500]'>
          {[
            dictionary?.home,
            dictionary?.products,
            dictionary?.categories,
            dictionary?.comments,
            dictionary?.contact,
          ].map((el, idx) => (
            <Link
              key={idx}
              href={el === dictionary?.home ? '/' : '#' + el}
              className='hover:text-mainColor font-[500] '
            >
              {el}
            </Link>
          ))}
        </div>
        <div className='flex items-center px-[14px] gap-2 font-[500] py-[8px] bg-[#FAE7EA] rounded-[50px]'>
          <Image src={Fire} width={25} height={25} alt='fire' />
          <p className='text-textColor'>{dictionary?.offers}</p>
        </div>
      </div>
    </nav>
  );
};
