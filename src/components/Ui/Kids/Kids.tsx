import Image from 'next/image';
import React from 'react';
import KidsImg from '@/assets/icons/kidz.svg';
import kidsZone from '@/assets/icons/kidsZone.svg';
import kidsParty from '@/assets/icons/kidsParty.svg';
import kidsPlayer from '@/assets/icons/kidsPlayer.svg';
import kidsClub from '@/assets/icons/kidsClub.svg';
import gameRoom from '@/assets/icons/gameRoom.svg';

export const Kids = () => {
  return (
    <div className='flex items-center  md:justify-between justify-center gap-[50px] flex-wrap'>
      <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
        <Image src={kidsParty} width={170} height={70} alt='pic' />
      </div>
      <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
        <Image src={KidsImg} width={170} height={70} alt='pic' />
      </div>
      <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
        <Image src={kidsZone} width={170} height={70} alt='pic' />
      </div>
      <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
        <Image src={kidsPlayer} width={170} height={70} alt='pic' />
      </div>
      <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
        <Image src={kidsClub} width={170} height={70} alt='pic' />
      </div>
      <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
        <Image src={gameRoom} width={170} height={70} alt='pic' />
      </div>
    </div>
  );
};
