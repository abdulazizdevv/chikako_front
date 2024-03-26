import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import Container from '@mui/material/Container';
import { GrLocation } from 'react-icons/gr';

export const HeaderTop = () => {
  return (
    <div className='bg-[#B31312] '>
      <div className='container px-5 m-auto py-[10px]'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2 text-white font-bold text-[16px] '>
            <FiPhoneCall />
            +998 90 010 50 85
          </div>
          <div className='flex items-center gap-2 text-white font-bold text-[16px] '>
            <GrLocation />
            Qo’qon erkin iqtisodiy sohasi
          </div>
        </div>
      </div>
    </div>
  );
};
