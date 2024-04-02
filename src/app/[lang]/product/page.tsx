'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Img from '@/assets/images/toys.png';
import { Locale } from '../../../../i18n.config';
import { getDictionary } from '@/lib/Dictionary';
import { useSetStore } from '@/store/store';

export default function SingeProduct({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { updateDictionary, updateHeader } = useSetStore();

  useEffect(() => {
    const fetchDataAndDictionary = async () => {
      const dictionary = await getDictionary(lang);

      updateDictionary(dictionary.header);
      updateHeader(lang);
    };

    fetchDataAndDictionary();
  }, [lang, updateDictionary, updateHeader]);

  return (
    <div className='container px-3 m-auto'>
      <div className='my-[25px]'>
        <div className='flex gap-5 items-center flex-wrap lg:flex-nowrap'>
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
}
