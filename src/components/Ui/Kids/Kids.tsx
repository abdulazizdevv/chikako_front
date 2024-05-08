import Image from 'next/image';
import React from 'react';
import KidsImg from '@/assets/icons/kidz.svg';
import kidsZone from '@/assets/icons/kidsZone.svg';
import kidsParty from '@/assets/icons/kidsParty.svg';
import kidsPlayer from '@/assets/icons/kidsPlayer.svg';
import kidsClub from '@/assets/icons/kidsClub.svg';
import gameRoom from '@/assets/icons/gameRoom.svg';
import { useKeenSlider } from 'keen-slider/react';

export const Kids = () => {
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
          <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
            <Image src={kidsParty} width={170} height={70} alt='pic' />
          </div>
        </div>
        <div className='keen-slider__slide'>
          <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
            <Image src={KidsImg} width={170} height={70} alt='pic' />
          </div>
        </div>
        <div className='keen-slider__slide'>
          <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
            <Image src={kidsZone} width={170} height={70} alt='pic' />
          </div>
        </div>
        <div className='keen-slider__slide'>
          <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
            <Image src={kidsPlayer} width={170} height={70} alt='pic' />
          </div>
        </div>
        <div className='keen-slider__slide'>
          <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
            <Image src={kidsClub} width={170} height={70} alt='pic' />
          </div>
        </div>
        <div className='keen-slider__slide'>
          <div className='filter grayscale hover:grayscale-0 cursor-pointer '>
            <Image src={gameRoom} width={170} height={70} alt='pic' />
          </div>{' '}
        </div>
      </div>
    </>
  );
};
