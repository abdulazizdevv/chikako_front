'use client';
import { memo, useState } from 'react';
import Image from 'next/image';
// Splide js
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Style
import Img from '@/assets/images/slider_img_1.png';
function Carousel() {
  // const [activeSlides, setActiveSlides] = useState([0])

  // const onSlideMove = (e, newIndex) => {
  //   setActiveSlides((prev) => [...prev, newIndex])
  // }

  return (
    <Splide
      options={{ rewind: true, speed: 2000 }}
      aria-label='React Splide Example'
      className='mt-[30px]'
    >
      <SplideSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Image src={Img} width={1386} height={610} alt='Image 1' />
      </SplideSlide>
      <SplideSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Image src={Img} width={1386} height={610} alt='Image 1' />
      </SplideSlide>
      <SplideSlide
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Image src={Img} width={1386} height={610} alt='Image 1' />
      </SplideSlide>
    </Splide>
  );
}

export default memo(Carousel);
