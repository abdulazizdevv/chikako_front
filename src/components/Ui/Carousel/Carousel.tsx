// // Style
'use client';
import React, { useEffect, useState } from 'react';
import './carousel.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
{
  /* <Image src={Img} width={1386} height={610} alt='Image 1' /> */
}

import Img from '@/assets/images/slider_img_1.png';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { getAllBanner } from '@/service/banner';
import { baseURLImg } from '@/service';
import { useSetStore } from '@/store/store';
import Link from 'next/link';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const { header } = useSetStore();

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, origin: 'center', spacing: 15 },

      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
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
          }, 3000);
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllBanner();
      setData(res.data.banners);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='navigation-wrapper mt-[30px]'>
        <div ref={sliderRef} className='keen-slider'>
          {data?.map((el: any) => (
            <div key={el?._id} className='keen-slider__slide '>
              {el && el.image && header && (
                <Link href={el?.url}>
                  <Image
                    src={`${baseURLImg}/${el.image[header]}`}
                    className='w-full lg:h-[600px] object-contain lg:object-fill'
                    width={1386}
                    height={600}
                    alt='banner'
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef?.current?.track?.details?.slides?.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
}

const Arrow = ({ left, onClick }: any) => {
  const arrowClass = left ? 'arrow--left' : 'arrow--right';

  return (
    <div className={`arrow ${arrowClass} `} onClick={onClick}>
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
