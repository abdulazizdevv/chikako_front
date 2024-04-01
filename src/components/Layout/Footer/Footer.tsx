import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/icons/logo.svg';
import call from '@/assets/icons/call.svg';
import { GrInstagram, GrLocation } from 'react-icons/gr';
import Link from 'next/link';
import { PiPhoneCall } from 'react-icons/pi';
import { MdOutlineMail } from 'react-icons/md';
import './footer.css';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { FooterBottom } from '@/components/Ui/FooterBottom/FooterBottom';
import cloud from '@/assets/images/cloud.png';
import cloudLittle from '@/assets/images/cloudLittle.svg';
import cloudRight from '@/assets/images/cloudRight.png';
import starPink from '@/assets/images/starPink.png';
import yellowStar from '@/assets/images/yellowStar.png';
import startGreen from '@/assets/images/startGreen.png';

export const Footer = () => {
  const services = [
    {
      id: 1,
      txt: 'Service Offerings',
    },
    {
      id: 2,
      txt: 'How It Works',
    },
    {
      id: 3,
      txt: 'Service Areas',
    },
    {
      id: 4,
      txt: 'Service FAQs',
    },
    {
      id: 5,
      txt: 'Contact Information',
    },
  ];
  const customers = [
    {
      id: 1,
      txt: 'Contact Us',
    },
    {
      id: 2,
      txt: 'Store List',
    },
    {
      id: 3,
      txt: 'Opening Hours',
    },
    {
      id: 4,
      txt: 'Returns & Exchanges',
    },
    {
      id: 5,
      txt: 'Refund and Returns',
    },
  ];
  return (
    <>
      <footer className='bg-[#EEFBFA] relative' id='Contact'>
        <div className='container px-3 m-auto py-[100px] pb-[200px]'>
          <div className='flex flex-wrap gap-5 items-start justify-between'>
            <div style={{ zIndex: 99 }}>
              <Image src={Logo} width={192} height={72} alt='logo' />
              <div className='flex flex-col gap-[10px] mt-[24px]'>
                <div className='flex gap-[8px] items-center'>
                  <div className='text-mainColor bg-white p-[10px] rounded-full'>
                    <GrLocation size={20} />
                  </div>
                  <p className='text-textGrey font-semibold '>
                    Qo’qon erkin Iqtisodiy zonasi
                  </p>
                </div>
                <div className='flex gap-[8px] items-center'>
                  <div className='text-mainColor bg-white p-[10px] rounded-full'>
                    <PiPhoneCall size={20} />
                  </div>
                  <Link
                    href={'tel:+998 90 010 50 85'}
                    className='text-textGrey font-semibold hover:text-textOrange'
                  >
                    +998 90 010 50 85
                  </Link>
                </div>
                <div className='flex gap-[8px] items-center'>
                  <div className='text-mainColor bg-white p-[10px] rounded-full'>
                    <MdOutlineMail size={20} />
                  </div>
                  <Link
                    href={'#'}
                    className='text-textGrey font-semibold hover:text-textOrange'
                  >
                    chikako@gmail.com
                  </Link>
                </div>
                <div className='flex gap-[8px] items-center'>
                  <div className='text-mainColor bg-white p-[10px] rounded-full'>
                    <TbDeviceLandlinePhone size={20} />
                  </div>
                  <Link
                    href={'tel:+998 90 000 00 00'}
                    className='text-textGrey font-semibold hover:text-textOrange'
                  >
                    +998 90 000 00 00
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ zIndex: 99 }}>
              <h4 className='font-semibold text-[20px]'>Services</h4>
              <div className='w-[30px] h-[4px] bg-textOrange rounded-[30px] mt-[7px]' />
              <div className='flex gap-[12px] flex-col mt-[19px]'>
                {services.map((el) => (
                  <Link
                    href={'#'}
                    key={el.id}
                    className='text-textGrey font-[600] hover:text-textOrange cool-link'
                  >
                    {el.txt}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ zIndex: 99 }}>
              <h4 className='font-semibold text-[20px]'>Customer Support</h4>
              <div className='w-[30px] h-[4px] bg-textOrange rounded-[30px] mt-[7px]' />
              <div className='flex gap-[12px] flex-col mt-[19px] '>
                {customers.map((el) => (
                  <Link
                    href={'#'}
                    key={el.id}
                    className='text-textGrey font-[600] hover:text-textOrange  cool-link'
                  >
                    {el.txt}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ zIndex: 99 }}>
              <h4 className='font-semibold text-[20px]'>Social Media</h4>
              <div className='w-[30px] h-[4px] bg-textOrange rounded-[30px] mt-[7px]' />
              <div className='flex gap-[12px] flex-col mt-[19px]'>
                <Link
                  href={'#'}
                  className='text-textGrey font-[600] hover:text-textOrange'
                >
                  Bizni ijtimoiy tarmoqlarda kuzatib boring.
                </Link>
                <div className='flex items-center gap-3'>
                  <Link
                    href={'#'}
                    className='w-[36px] h-[36px] border border-mainColor flex items-center justify-center rounded-full hover:bg-mainColor hover:text-white text-mainColor transition duration-300 ease-in-out'
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href={'#'}
                    className='w-[36px] h-[36px] border border-mainColor flex items-center justify-center rounded-full hover:bg-mainColor hover:text-white text-mainColor transition duration-300 ease-in-out'
                  >
                    <FaTelegramPlane />
                  </Link>
                  <Link
                    href={'#'}
                    className='w-[36px] h-[36px] border border-mainColor flex items-center justify-center rounded-full hover:bg-mainColor hover:text-white text-mainColor transition duration-300 ease-in-out'
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href={'#'}
                    className='w-[36px] h-[36px] border border-mainColor flex items-center justify-center rounded-full hover:bg-mainColor hover:text-white text-mainColor transition duration-300 ease-in-out'
                  >
                    <GrInstagram />
                  </Link>
                  <Link
                    href={'#'}
                    className='w-[36px] h-[36px] border border-mainColor flex items-center justify-center rounded-full hover:bg-mainColor hover:text-white text-mainColor transition duration-300 ease-in-out'
                  >
                    <FaTiktok />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute left-0 top-[30px] '>
          <Image src={cloudLittle} width={134} height={45} alt='cloud' />
        </div>
        <div
          className='absolute left-[100px] bottom-[30px] '
          style={{ zIndex: 9 }}
        >
          <Image src={starPink} width={57} height={56} alt='cloud' />
        </div>
        <div className='absolute left-0 bottom-0 '>
          <Image src={cloud} width={300} height={300} alt='cloud' />
        </div>
        <div className='absolute left-[50%] bottom-[200px] '>
          <Image src={startGreen} width={25} height={25} alt='cloud' />
        </div>
        <div className='absolute right-[50px] bottom-[50px] z-10'>
          <Image src={yellowStar} width={50} height={50} alt='cloud' />
        </div>
        <div className='absolute right-0 bottom-0 '>
          <Image src={cloudRight} width={300} height={300} alt='cloud' />
        </div>
      </footer>
      <div>
        <FooterBottom />
      </div>
    </>
  );
};
