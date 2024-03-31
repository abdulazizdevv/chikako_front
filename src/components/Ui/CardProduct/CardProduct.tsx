import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Toys from '@/assets/images/toys.png';
import Image from 'next/image';
import Link from 'next/link';

export default function CardProduct() {
  return (
    <Card
      sx={{
        width: '100%',
        transition: 'box-shadow 0.3s ease',
        ':hover': {
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        },
      }}
    >
      <AspectRatio minHeight='120px' maxHeight='200px'>
        <Image src={Toys} width={282} height={217} alt='pic' />
      </AspectRatio>
      <CardContent orientation='horizontal'>
        <div>
          <p className='text-textGrey font-bold text-[14px] mt-[24px] mb-[13px]'>
            Salfetkalar
          </p>
          <Link
            href={'/product'}
            className='text-[#001430] font-bold text-[18px]  hover:text-mainColor'
          >
            Wonder Dolls: Where Imagination Comes to Life!
          </Link>
          <div className='mt-[13px]'>
            ⭐⭐⭐⭐⭐
            <span className='font-bold text-textGrey text-[14px]'>(5.00)</span>
          </div>
          <p className='font-bold text-[24px] text-mainColor mt-[11px]'>
            80 000 so’m
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
