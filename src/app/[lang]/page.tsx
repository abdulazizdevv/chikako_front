'use client';
import { Card } from '@/components/Ui/Card/Card';
import Carousel from '@/components/Ui/Carousel/Carousel';
import Image from 'next/image';
import Comfortable from '@/assets/icons/qulay2.svg';
import Economic from '@/assets/icons/economic.svg';
import Truck from '@/assets/icons/truc.svg';
import Soft from '@/assets/icons/soft.svg';
import Umbrella from '@/assets/icons/umbrella.svg';
import CardProduct from '@/components/Ui/CardProduct/CardProduct';
import CategoryCard from '@/components/Ui/CategoryCard/CategoryCard';
import { DiscountCarousel } from '@/components/Ui/DiscountCarousel/DiscountCarousel';
import { Kids } from '@/components/Ui/Kids/Kids';
import StarCarousel from '@/components/Ui/StarCarousel/StarCarousel';
import { MdArrowUpward } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/lib/Dictionary';
import { useSetStore } from '@/store/store';
import { Locale } from '../../../i18n.config';
import Loading from '@/components/Ui/Loading/Loading';

const data = [
  {
    id: 1,
    img: Comfortable,
    title: 'Qulay',
    text: 'Back guarantee under 7 days.',
    bgColor: '#FFF7ED',
  },
  {
    id: 2,
    img: Economic,
    title: 'Tejamkor',
    text: 'On every order over $2000.',
    bgColor: '#E6EEF9',
  },
  {
    id: 3,
    img: Truck,
    title: 'Quruq',
    text: 'Free delivery to your home.',
    bgColor: '#DFF8F6',
  },
  {
    id: 4,
    img: Soft,
    title: 'Yumshoq',
    text: 'Dedicated support in 24hrs',
    bgColor: '#FFEEF0',
  },
];

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [showBlock, setShowBlock] = useState(false);
  const [data, setData] = useState([]);
  const { updateDictionary, updateHeader } = useSetStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dictionary = await getDictionary(lang);
      updateDictionary(dictionary.header);
      updateHeader(lang);
      setLoading(false);
    };

    fetchData();
  }, [lang, updateDictionary, updateHeader]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setShowBlock(true);
      } else {
        setShowBlock(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <div
            className={
              showBlock
                ? `flex items-center gap-3  right-3 bottom-8 fixed z-40 cursor-pointer`
                : 'hidden'
            }
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <p className='text-textGrey font-semibold text-[14px]'>
              Back To Top
            </p>
            <div className='bg-textOrange w-[36px] h-[36px] flex justify-center items-center rounded-full text-white'>
              <MdArrowUpward size={23} />
            </div>
          </div>
          <div className='container px-3 m-auto'>
            <Carousel />
          </div>
          <div className='container px-3 m-auto mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
          <div className='absolute right-[40px]'>
            <Image src={Umbrella} width={60} height={60} alt='pic' />
          </div>
          <section className='container px-3 m-auto mt-[100px] ' id='Product'>
            <div className='flex gap-[31px] font-bold mb-[36px]'>
              <button className='hover:text-mainColor text-textGrey'>
                Hammasi
              </button>
              <button className='hover:text-mainColor text-textGrey'>
                Tagliklar
              </button>
              <button className='hover:text-mainColor text-textGrey'>
                Salfetkalar
              </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
          </section>

          <section className='mt-[80px] bg-mainColor' id='Categories'>
            <div className='container px-3 m-auto py-[85px]'>
              <div className='text-center text-[white] mb-[30px]'>
                <h2 className='text-[36px] font-semibold'>
                  Shop by Categories
                </h2>
                <p className='text-center max-w-[400px] m-auto mt-[10px]'>
                  Lorem ipsum dolor sit amet consectetur. Id fames there are
                  many vulputate eget dolor.
                </p>
              </div>
              <CategoryCard />
            </div>
          </section>

          <section>
            <div className='container px-3 m-auto py-[85px]'>
              <div className='text-center text-[#001430] mb-[30px]'>
                <h2 className='text-[36px] font-semibold'>Shop by Age</h2>
                <p className='text-center max-w-[400px] text-textGrey m-auto mt-[10px]'>
                  Lorem ipsum dolor sit amet consectetur. Id fames there are
                  many vulputate eget dolor.
                </p>
              </div>
              <StarCarousel />
            </div>
          </section>
          <div className='bg-mainColor py-[12px] mt-[15px]'>
            <DiscountCarousel />
          </div>
          <section className='container px-3 m-auto my-[60px]'>
            <Kids />
          </section>
        </main>
      )}
    </>
  );
}
