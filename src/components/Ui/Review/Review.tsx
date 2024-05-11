'use client';
import React, { useState } from 'react';
import './review.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import ProfileImg from '@/assets/images/profile.png';
import Women1 from '@/assets/images/women.jpg';
import Women2 from '@/assets/images/women2.jpg';
import Man from '@/assets/images/man.jpg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useSetStore } from '@/store/store';

const SliderCard = ({
  image,
  title,
  description,
}: {
  image: any;
  title: string;
  description: string;
}) => {
  return (
    <div className=''>
      <div className=' w-full flex justify-center items-center top-[-50px] mb-[-50px]  p-3 rounded-full hover:translate-y-[-10px] transition-transform duration-300 ease-in-out'>
        <Image
          src={image}
          width={270}
          height={270}
          alt='pic'
          className=' object-cover border-[gray] border-[1px] w-[70px] h-[70px]  rounded-full '
        />
      </div>
      <div className='bg-blue-100 bg-opacity-60 z-[-99999999] rounded-[20px] w-full px-[65px] py-[20px] flex flex-col cursor-pointer justify-center items-center'>
        <h2 className='text-[25px] font-semibold my-[20px] mt-[50px]'>
          {title}
        </h2>
        <p className='font-semibold text-[14px] text-[#181945] text-center opacity-75 leading-[23px] tracking-[-0.23px] mb-[20px]'>
          {description}
        </p>
        <span className='mb-[20px] '>⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  );
};

export default function Review() {
  const [loaded, setLoaded] = useState(false);
  const { dictionary } = useSetStore();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    // rtl: false,
    breakpoints: {
      '(max-width: 300px)': {
        slides: { perView: 1, spacing: 20 },
      },
      '(min-width: 750px)': {
        slides: { perView: 2, spacing: 30 },
      },
      '(min-width: 1400px)': {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: { perView: 1, spacing: 30, origin: 'center' },

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
            <SliderCard
              title='Dildora Saidova'
              image={Women1}
              description={dictionary?.review1}
            />
          </div>
          <div className='keen-slider__slide'>
            <SliderCard
              image={Man}
              title='Ravshan Nosirov'
              description={dictionary?.review2}
            />
          </div>
          <div className='keen-slider__slide'>
            <SliderCard
              image={Women2}
              title='Kamila Hakimova'
              description={dictionary?.review2}
            />
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
