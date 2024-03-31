import Image from 'next/image';
import React from 'react';

type ICardProps = {
  data: {
    id: number;
    img: any;
    title: string;
    text: string;
    bgColor: string;
  };
};

export const Card = ({ data }: ICardProps) => {
  return (
    <div
      style={{ backgroundColor: data.bgColor }}
      className={`flex items-center gap-[27px] p-[30px] w-full rounded-[12px]`}
    >
      <div>
        <Image src={data.img} width={35} height={35} alt='icon' />
      </div>
      <div>
        <p className='text-[#001430] font-bold text-[20px]'>{data.title}</p>
        <p className='text-textGrey font-bold text-[14px] '>{data.text}</p>
      </div>
    </div>
  );
};
