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
import { postOrder } from '@/service/contact';
import Alert from '@mui/material/Alert';
import { ToastContainer, toast } from 'react-toastify';
import ReactInputMask from 'react-input-mask';
import InputMask from 'react-input-mask';
import { useSetStore } from '@/store/store';
import {
  FilledInputProps,
  OutlinedInputProps,
  InputProps,
} from '@mui/material';
interface IValue {
  fullname: string;
  phone: string;
  comment: string;
}
const Contact = () => {
  const { dictionary } = useSetStore();

  const initialValues = {
    fullname: '',
    phone: '',
    comment: '',
  };
  const onSubmit = (values: IValue) => {
    postOrder(values)
      .then((res) => {
        console.log(res);
        formik.setValues({
          fullname: '',
          phone: '',
          comment: '',
        });
        toast.success('Success', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        toast.error('Error', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const { handleSubmit, values, setFieldValue } = formik;

  return (
    <>
      <ToastContainer position='top-center' />
      <div className='grid lg:grid-cols-3 grid-cols-1 w-full gap-5'>
        <Card className={'border-none bg-[#fff]  p-[15px] w-full md:p-[50px]'}>
          <h2 className='text-[32px] font-semibold'>{dictionary.contact_us}</h2>

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
          <h2 className='text-[32px] font-semibold'>
            {dictionary.send_contact}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
              <TextField
                id='outlined-basic'
                placeholder='Your Name'
                variant='outlined'
                type='text'
                size='medium'
                color='error'
                value={values.fullname}
                onChange={(e) => setFieldValue('fullname', e.target.value)}
              />
              <InputMask
                type={'tel'}
                mask={'(99) 999-99-99'}
                value={values?.phone}
                onChange={(e) => setFieldValue('phone', e.target.value)}
                disabled={false}
                placeholder={'Phone'}
                className='border border-[#bbb] rounded-[4px] px-3 p-[15.2px] outline-[#D32F2F]'
              />
            </div>
            <TextArea
              value={values.comment}
              placeholder={'Write your comment here..'}
              size={10}
              onChange={(e: any) => setFieldValue('comment', e.target.value)}
            />
            <Button
              variant='contained'
              color='error'
              type='submit'
              className='p-[20px] mt-[38px] rounded-full'
            >
              {dictionary?.send_contact}
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Contact;
