'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { getDictionary } from '@/lib/Dictionary';
import { useSetStore } from '@/store/store';
import { getOneProduct } from '@/service/product';
import { Locale } from '../../../../../i18n.config';
import { baseURLImg } from '@/service';
import ModalOrder from '@/components/Modal/Modal';
import Loading from '@/components/Ui/Loading/Loading';

export default function Product({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  const { updateDictionary, updateHeader } = useSetStore();
  const [data, setData] = useState<any>();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchDataAndDictionary = async () => {
      const dictionary = await getDictionary(lang);

      updateDictionary(dictionary.header);
      updateHeader(lang);
    };

    fetchDataAndDictionary();
  }, [lang, updateDictionary, updateHeader]);

  useEffect(() => {
    const fetchDataProduct = async () => {
      const res = await getOneProduct(id);
      setData(res.data?.data);
    };

    fetchDataProduct();
  }, [id]);

  const optionsSlider = {
    perPage: 1,
    pagination: data?.images[1],
    heightRatio: 0.3,
    arrows: data?.images[1], // Disable arrows
  };

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <div className='flex justify-evenly my-[20px] md:my-[100px] flex-wrap gap-5 items-center container mx-auto px-3'>
          <div className='max-w-[500px]'>
            <Splide options={optionsSlider}>
              {data?.images?.map((el: string, index: number) => (
                <SplideSlide
                  className='flex justify-center items-center h-auto'
                  key={index}
                >
                  <Image
                    className='w-full h-[350px] object-contain'
                    src={`${baseURLImg}/${el}`}
                    width={250}
                    height={200}
                    alt='pic'
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className='max-w-[600px] flex flex-col gap-5 '>
            <h1 className='text-[22px] md:text-[45px] font-bold'>
              {data?.name[lang]}
            </h1>
            <span>⭐⭐⭐⭐⭐</span>
            <p className='max-w-[600px]'>{data?.description[lang]}</p>
            <p className='text-mainColor font-bold text-[30px]'>
              {data?.price} so`m
            </p>
            <button
              onClick={() => setOpen(true)}
              className='bg-mainColor w-full py-2 text-white rounded-md p-[5px]'
            >
              Buyurtma berish
            </button>
          </div>
          <ModalOrder data={data} open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  );
}
