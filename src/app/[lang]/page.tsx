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
import { getAllProduct, getCategoryProduct } from '@/service/product';
import { useRouter } from 'next/navigation';
import { CategoryId, IProductBack } from '@/types/data';
import Review from '@/components/Ui/Review/Review';
import Contact from '@/components/Ui/Contact/Contact';
import { getAllCategory } from '@/service/category';
import useStoreCategory from '@/store/categoryStore';
import './styles.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [showBlock, setShowBlock] = useState(false);
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { updateDictionary, updateHeader } = useSetStore();
  const [loading, setLoading] = useState(true);
  const { category, updateCategory, removeAllCategory } = useStoreCategory();
  const isSmallScreen = useMediaQuery('(max-width:650px)'); // Define a media query for small screens
  const { dictionary } = useSetStore();

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
    const fetchDataProduct = async () => {
      const res = await getAllProduct({ params: { categoryId: category } });
      setProductData(res.data?.data);
    };

    fetchDataProduct();
  }, [category]);
  useEffect(() => {
    const fetchDataCategory = async () => {
      const res = await getAllCategory();
      setCategories(res.data?.data);
    };

    fetchDataCategory();
  }, []);

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

  const data = [
    {
      id: 1,
      img: Comfortable,
      title: dictionary?.comfort_price,
      text: dictionary?.comfort_price_desc,
      bgColor: '#f7ebdc',
    },
    {
      id: 2,
      img: Economic,
      title: dictionary?.hot_discount,
      text: '',
      bgColor: '#d5e0f0',
    },
    {
      id: 3,
      img: Truck,
      title: dictionary?.delivery,
      text: dictionary?.delivery_desc,
      bgColor: '#cdf0ed',
    },
    {
      id: 4,
      img: Soft,
      title: dictionary?.call_center,
      text: dictionary?.call_center_desc,
      bgColor: '#f5dcdf',
    },
  ];

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
            <div className='bg-textOrange w-[36px] h-[36px] flex justify-center items-center rounded-full text-white'>
              <MdArrowUpward size={23} />
            </div>
          </div>
          <div className='container px-3 m-auto'>
            <Carousel />
          </div>
          <div className='container px-3 m-auto mt-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {data?.map((item) => (
              <Card key={item?.id} data={item} />
            ))}
          </div>
          <div className='absolute right-[40px]'>
            <Image src={Umbrella} width={60} height={60} alt='pic' />
          </div>
          <section
            className='container px-3 m-auto mt-[100px] '
            id={dictionary?.products}
          >
            <div className='flex gap-[31px] font-bold mb-[36px]'>
              <button
                onClick={() => removeAllCategory()}
                className={`hover:text-mainColor ${
                  category === '' ? 'text-mainColor' : 'text-textGrey'
                } `}
              >
                {dictionary?.all}
              </button>
              {categories?.map((el: CategoryId) => (
                <button
                  key={el._id}
                  onClick={() => updateCategory(el?._id)}
                  className={`hover:text-mainColor ${
                    category === el?._id ? 'text-mainColor' : 'text-textGrey'
                  }`}
                >
                  {el?.name[lang]}
                </button>
              ))}
            </div>

            {isSmallScreen ? (
              <Splide
                options={{
                  autoplay: true,
                  lazyLoad: 'sequential',
                  perPage: 1,
                  arrows: false,
                  snap: false,
                  pagination: false,
                }}
              >
                {productData?.map((el: IProductBack) => (
                  <SplideSlide key={el._id}>
                    <CardProduct
                      key={el._id}
                      categoryName={el?.categoryId?.name[lang]}
                      price={el?.price}
                      title={el?.name[lang]}
                      img={el?.images[0]}
                      id={el?._id}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {productData?.map((el: IProductBack) => (
                  <CardProduct
                    key={el._id}
                    categoryName={el?.categoryId?.name[lang]}
                    price={el?.price}
                    title={el?.name[lang]}
                    img={el?.images[0]}
                    id={el?._id}
                  />
                ))}
              </div>
            )}
          </section>

          <section
            className='mt-[80px] bg-mainColor'
            id={dictionary?.categories}
          >
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
          <section className='py-[80px]' id={dictionary?.comments}>
            <div className='container px-3 m-auto'>
              <div className='text-center  mb-[30px]'>
                <h2 className='text-[36px] font-semibold'>
                  {dictionary?.clients_comment}
                </h2>
                <p className='text-center max-w-[400px] m-auto mt-[10px]'>
                  Lorem ipsum dolor sit amet consectetur. Id fames there are
                  many vulputate eget dolor.
                </p>
              </div>
              <Review />
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
          <section
            className='container px-3 m-auto my-[60px]'
            id={dictionary?.contact}
          >
            <Contact />
          </section>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.153030377853!2d71.0207993!3d40.4718794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bafb8064549a0f%3A0x7e2a97e706b64de8!2sChikako!5e0!3m2!1sen!2s!4v1715405006702!5m2!1sen!2s'
              width='100%'
              height='450'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </main>
      )}
    </>
  );
}
