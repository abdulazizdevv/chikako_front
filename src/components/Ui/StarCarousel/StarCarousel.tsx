'use client';
import * as React from 'react';
import './star.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import Star1 from '@/assets/images/star1.png';
import StarPink from '@/assets/images/starPink.png';
import StarGreen from '@/assets/images/starGreen.png';
import StarRed from '@/assets/images/starRed.png';
import StarBlue from '@/assets/images/starBlue.png';
import StarYellow from '@/assets/images/starYellow.png';

export default function StarCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
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
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide'>
          <Image src={Star1} width={211} height={150} alt='pic' />
        </div>
        <div className='keen-slider__slide'>
          <Image src={StarPink} width={211} height={150} alt='pic' />
        </div>
        <div className='keen-slider__slide'>
          <Image src={StarGreen} width={211} height={150} alt='pic' />
        </div>
        <div className='keen-slider__slide'>
          <Image src={StarRed} width={211} height={150} alt='pic' />
        </div>
        <div className='keen-slider__slide'>
          <Image src={StarBlue} width={211} height={150} alt='pic' />
        </div>
        <div className='keen-slider__slide'>
          <Image src={StarYellow} width={211} height={150} alt='pic' />
        </div>
      </div>
    </>
  );
}
