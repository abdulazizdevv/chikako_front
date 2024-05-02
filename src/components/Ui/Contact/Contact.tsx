import Card from '@mui/joy/Card';
import Link from 'next/link';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';

import { GoMail } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';
import TextArea from '../TextArea/TextArea';
interface IValue {
  name: string;
  phone_number: string;
  email: string;
  subject: string;
}
const Contact = () => {
  const initialValues = {
    name: '',
    phone_number: '',
    email: '',
    subject: '',
  };
  const onSubmit = (values: IValue) => {};
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const { handleSubmit } = formik;

  return (
    <>
      <div className='grid lg:grid-cols-3 grid-cols-1 w-full gap-5'>
        <Card className={'border-none bg-[#fff]  p-[15px] w-full md:p-[50px]'}>
          <h2 className='text-[32px] font-semibold'>Contact us</h2>
          <p className='text-textGrey'>
            Lorem ipsum dolor sit amet consectetur. Fermentum facilisi id at
            adipiscing ametb ibendum quis vitae blandit.
          </p>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-wrap items-center  p-[35px] gap-5 border-[#ddd] border-[1px] rounded-lg'>
              <div className='bg-[#FFEEF0] w-[72px] h-[72px] flex justify-center items-center p-3 rounded-full'>
                <LiaPhoneVolumeSolid size={28} color='#F40A17' />
              </div>
              <div>
                <p className='text-textGrey'>Phone number</p>
                <div className='flex flex-col'>
                  <Link href={'tel:+998 90 010 50 85'} className='font-medium'>
                    +998 90 010 50 85
                  </Link>
                  <Link href={'tel:+998 90 010 50 85'} className='font-medium'>
                    +998 90 010 50 85
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap items-center  p-[35px] gap-5 border-[#ddd] border-[1px] rounded-lg'>
              <div className='bg-[#FFEEF0] w-[72px] h-[72px] flex justify-center items-center p-3 rounded-full'>
                <GoMail size={28} color='#F40A17' />
              </div>
              <div>
                <p className='text-textGrey'>Mail ID</p>
                <div className='flex flex-col'>
                  <p className='font-medium cursor-pointer hover:text-textOrange'>
                    chikako@gmail.com
                  </p>
                  <p className='font-medium cursor-pointer hover:text-textOrange'>
                    chikako@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap items-center  p-[35px] gap-5 border-[#ddd] border-[1px] rounded-lg'>
              <div className='bg-[#FFEEF0] w-[72px] h-[72px] flex justify-center items-center p-3 rounded-full'>
                <IoLocationOutline size={28} color='#F40A17' />
              </div>
              <div>
                <p className='text-textGrey'>Address Place</p>
                <div className='flex flex-col'>
                  <p className='font-medium '>
                    Qo’qon erkin <br /> Iqtisodiy zonasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card
          className={
            'border-none w-full md:col-span-2 bg-[#fff]  p-[10px] md:p-[50px]'
          }
        >
          <h2 className='text-[32px] font-semibold'>Send message</h2>
          <p className='text-textGrey'>
            Lorem ipsum dolor sit amet consectetur. Fermentum facilisi id at
            adipiscing ametb ibendum quis vitae <br /> blandit.
          </p>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4 mb-4'>
              <TextField
                id='outlined-basic'
                label='Your Name'
                variant='outlined'
                type='text'
                size='medium'
                color='error'
              />
              <TextField
                id='outlined-basic'
                label='Phone number'
                variant='outlined'
                type='tel'
                color='error'
                size='medium'
              />
              <TextField
                id='outlined-basic'
                label='Email Address'
                variant='outlined'
                type='email'
                color='error'
                size='medium'
              />
              <TextField
                id='outlined-basic'
                label='Subject'
                variant='outlined'
                type='text'
                color='error'
                size='medium'
              />
            </div>
            <TextArea placeholder={'Write your comment here..'} size={10} />
            <Button
              // onClick={handleClick}
              variant='contained'
              color='error'
              type='submit'
              className='p-[20px] mt-[38px] rounded-full'
            >
              Send message
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Contact;
