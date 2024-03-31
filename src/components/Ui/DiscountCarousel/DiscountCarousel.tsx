'use client';
import React from 'react';
import { BsFire } from 'react-icons/bs';
import './style.css';
import { useKeenSlider } from 'keen-slider/react';
const animation = { duration: 15000, easing: (t: number) => t };

export const DiscountCarousel = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1.5, spacing: 20 },
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className='keen-slider'>
      <div className='keen-slider__slide '>
        <div className='flex items-center gap-5'>
          <BsFire size={22} color='white' />
          <p className='text-[24px] text-white font-[500]  whitespace-nowrap'>
            First your free trial and enjoy 1 months of toyup for $2/month on
            select plans.
          </p>
        </div>
      </div>
      <div className='keen-slider__slide '>
        <div className='flex items-center gap-5'>
          <BsFire size={22} color='white' />
          <p className='text-[24px] text-white font-[500] whitespace-nowrap'>
            Next your pro enjoy 5 months of toyup for $10/month on select plans.
          </p>
        </div>
      </div>
      <div className='keen-slider__slide '>
        <div className='flex items-center gap-5'>
          <BsFire size={22} color='white' />
          <p className='text-[24px] text-white font-[500] whitespace-nowrap'>
            First your free trial and enjoy 1 months of toyup for $2/month on
            select plans.
          </p>
        </div>
      </div>
    </div>
  );
};
