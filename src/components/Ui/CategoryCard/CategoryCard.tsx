'use client';
import React, { useState } from 'react';
import './styleCard.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Castell from '@/assets/images/castel.png';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const SliderCard = ({ image, title }: { image: any; title: string }) => {
  return (
    <div className='bg-white rounded-[20px] w-full flex flex-col cursor-pointer justify-center items-center p-[21px]'>
      <div className='rounded-full bg-[#EDFBFA] p-[25px] '>
        <Image
          src={image}
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
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    // rtl: false,
    breakpoints: {
      '(max-width: 300px)': {
        slides: { perView: 1, spacing: 20 },
      },
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 20 },
      },
      '(min-width: 600px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 750px)': {
        slides: { perView: 2, spacing: 25 },
      },
      '(min-width: 980px)': {
        slides: { perView: 3, spacing: 25 },
      },
      '(min-width: 1220px)': {
        slides: { perView: 5, spacing: 25 },
      },
      '(min-width: 1400px)': {
        slides: { perView: 6, spacing: 25 },
      },
    },
    slides: { perView: 1, origin: 'center' },

    // slideChanged(slider) {
    //   setCurrentSlide(slider.track.details.rel);
    // },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide '>
            <SliderCard image={Castell} title='Games and puzzle 1' />
          </div>
          <div className='keen-slider__slide'>
            <SliderCard image={Castell} title='Games and puzzle 1' />
          </div>
          <div className='keen-slider__slide'>
            <SliderCard image={Castell} title='Games and puzzle 1' />
          </div>
          <div className='keen-slider__slide'>
            <SliderCard image={Castell} title='Games and puzzle 1' />
          </div>
          <div className='keen-slider__slide'>
            <SliderCard image={Castell} title='Games and puzzle 1' />
          </div>
          <div className='keen-slider__slide'>
            <SliderCard image={Castell} title='Games and puzzle 1' />
          </div>
          <div className='keen-slider__slide'>
            <SliderCard image={Castell} title='Games and puzzle 1' />
          </div>
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
