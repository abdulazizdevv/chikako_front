import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Toys from '@/assets/images/toys.png';
import Image from 'next/image';
import Link from 'next/link';
import { useSetStore } from '@/store/store';
import { baseURLImg } from '@/service';
import { useRouter } from 'next/navigation';

interface Props {
  categoryName: string;
  title: string;
  img: string;
  id: string;
  price: number;
}

export default function CardProduct({
  categoryName,
  title,
  price,
  img,
  id,
}: Props) {
  const { header } = useSetStore();
  const navigate = useRouter();
  // console.log(header);

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
      <Link href={`${header}/product/${id}`}>
        <AspectRatio minHeight='120px' maxHeight='200px'>
          <Image
            src={`${baseURLImg}/${img}`}
            width={282}
            height={217}
            alt='pic'
            className='object-contain'
          />
        </AspectRatio>
        <CardContent orientation='horizontal'>
          <div>
            <div className='h-[127px]'>
              <p className='text-textGrey font-bold text-[14px] mt-[24px] mb-[13px]'>
                {categoryName}
              </p>
              <h5 className='text-[#001430] font-bold text-[18px] '>
                {title.length > 50 ? title?.substring(0, 57) + '...' : title}
              </h5>
            </div>
            <div className='mt-[13px]'>
              ⭐⭐⭐⭐⭐
              <span className='font-bold text-textGrey text-[14px]'>
                (5.00)
              </span>
            </div>
            <p className='font-bold text-[24px] text-mainColor mt-[11px]'>
              {price} so’m
            </p>
          </div>
        </CardContent>
      </Link>
      <button
        onClick={() => navigate.push(`${header}/product/${id}`)}
        className='w-full rounded-md p-[5px] text-center font-semibold bg-mainColor text-white hover:bg-[red]'
      >
        Sotib olish
      </button>
    </Card>
  );
}
