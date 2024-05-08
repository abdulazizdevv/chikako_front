'use client';
import React, { useEffect, useState } from 'react';
import './styleCard.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Castell from '@/assets/images/castel.png';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { getAllCategory } from '@/service/category';
import { CategoryId } from '@/types/data';
import { useSetStore } from '@/store/store';
import { headers } from 'next/headers';
import { baseURLImg } from '@/service';
import { Locale } from '../../../../i18n.config';

const SliderCard = ({ image, title }: { image: any; title: any }) => {
  return (
    <div className='bg-white rounded-[20px] w-full flex flex-col cursor-pointer justify-center items-center p-[21px]'>
      <div className='rounded-full bg-[#EDFBFA] p-[25px] '>
        <Image
          src={`${baseURLImg}/${image}`}
          width={70}
          height={70}
          alt='pic'
          className='hover:translate-y-[-10px] transition-transform duration-300 ease-in-out'
        />
      </div>
      <p className='font-semibold text-[18px]'>{title}</p>
    </div>
  );
};

export default function CategoryCard() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const { header } = useSetStore();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 20 },
      },
      '(min-width: 600px)': {
        slides: { perView: 1, spacing: 20, origin: 'center' },
      },
      '(min-width: 750px)': {
        slides: { perView: 2, spacing: 25, origin: 'auto' },
      },
      '(min-width: 980px)': {
        slides: {
          perView: data?.length < 3 ? data?.length : 3,
          spacing: 25,
          origin: 'auto',
        },
      },
      '(min-width: 1220px)': {
        slides: {
          perView: data?.length < 5 ? data?.length : 5,
          spacing: 25,
          origin: 'auto',
        },
      },
      '(min-width: 1400px)': {
        slides: {
          perView: data?.length < 6 ? data?.length : 6,
          spacing: 25,
          origin: 'auto',
        },
      },
    },
    slides: { perView: 1, origin: 'auto', spacing: 25 },

    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllCategory();
      setData(res?.data?.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          {data?.map((el: any) => (
            <div className='keen-slider__slide ' key={el._id}>
              {header && (
                <SliderCard image={el.image} title={el?.name[header]} />
              )}
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <div className='bg-[red]'>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={false}
              />
            </div>

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={false}
            />
          </>
        )}
      </div>
    </>
  );
}

const Arrow = ({ disabled, left, onClick }: any) => {
  const disabledClass = disabled ? ' arrow--disabled' : '';
  const arrowClass = left ? 'arrow--left' : 'arrow--right';

  return (
    <div className={`arrow ${arrowClass} ${disabledClass}`} onClick={onClick}>
      {left ? (
        <div className='bg-white hover:bg-mainColor hover:text-white  p-[5px] rounded-full w-[35px] h-[35px] flex items-center justify-center transition duration-300 ease-in-out cursor-pointer'>
          <FaAngleLeft />
        </div>
      ) : (
        <div className='bg-white hover:bg-mainColor hover:text-white  p-[5px] rounded-full w-[35px] h-[35px] flex items-center justify-center transition duration-300 ease-in-out cursor-pointer'>
          <FaAngleRight />
        </div>
      )}
    </div>
  );
};
