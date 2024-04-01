import { Card } from '@/components/Ui/Card/Card';
import Carousel from '@/components/Ui/Carousel/Carousel';
import Image from 'next/image';
import Comfortable from '@/assets/icons/qulay.svg';
import Economic from '@/assets/icons/economic.svg';
import Truck from '@/assets/icons/truc.svg';
import Soft from '@/assets/icons/soft.svg';
import Umbrella from '@/assets/icons/umbrella.svg';
import CardProduct from '@/components/Ui/CardProduct/CardProduct';
import CategoryCard from '@/components/Ui/CategoryCard/CategoryCard';
import { DiscountCarousel } from '@/components/Ui/DiscountCarousel/DiscountCarousel';
import { Kids } from '@/components/Ui/Kids/Kids';
import StarCarousel from '@/components/Ui/StarCarousel/StarCarousel';

export default function Home() {
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

  return (
    <main>
      <div className='container px-5 m-auto'>
        <Carousel />
      </div>
      <div className='container px-5 m-auto mt-[100px] flex items-center flex-wrap lg:flex-nowrap justify-between gap-5'>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className='absolute right-[40px]'>
        <Image src={Umbrella} width={60} height={60} alt='pic' />
      </div>
      <div className='container px-5 m-auto mt-[100px] ' id='Product'>
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
      </div>

      <div className='mt-[80px] bg-mainColor' id='Categories'>
        <div className='container px-5 m-auto py-[85px]'>
          <div className='text-center text-[white] mb-[30px]'>
            <h2 className='text-[36px] font-semibold'>Shop by Categories</h2>
            <p className='text-center max-w-[400px] m-auto mt-[10px]'>
              Lorem ipsum dolor sit amet consectetur. Id fames there are many
              vulputate eget dolor.
            </p>
          </div>
          <CategoryCard />
        </div>
      </div>
      <div>
        <div className='container px-5 m-auto py-[85px]'>
          <div className='text-center text-[#001430] mb-[30px]'>
            <h2 className='text-[36px] font-semibold'>Shop by Age</h2>
            <p className='text-center max-w-[400px] text-textGrey m-auto mt-[10px]'>
              Lorem ipsum dolor sit amet consectetur. Id fames there are many
              vulputate eget dolor.
            </p>
          </div>
          <StarCarousel />
        </div>
      </div>
      <div className='bg-mainColor py-[12px] mt-[15px]'>
        <DiscountCarousel />
      </div>
      <div className='container px-5 m-auto my-[60px]'>
        <Kids />
      </div>
    </main>
  );
}
