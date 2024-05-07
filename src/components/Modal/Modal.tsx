import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Select, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import TextArea from '../Ui/TextArea/TextArea';
import { postOrder } from '@/service/contact';
import { ToastContainer, toast } from 'react-toastify';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 3,
};
interface IProps {
  data: any;
  open: boolean;
  setOpen: (value: boolean) => void;
}
interface IinitalValues {
  fullname: string;
  phone: string;
  comment: string;
  products: any[];
}

export default function ModalOrder({ data, open, setOpen }: IProps) {
  const handleClose = () => setOpen(false);
  const initialValues = {
    fullname: '',
    phone: '',
    comment: '',
    products: [],
  };

  const onSubmit = (values: IinitalValues) => {
    const res = {
      ...values,
      products: [
        {
          product: data?._id,
          count: 1,
        },
      ],
    };
    postOrder(res)
      .then(() => {
        handleClose();
        formik.setValues({
          fullname: '',
          phone: '',
          comment: '',
          products: [],
        });
        toast.success('Success', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((err) => {
        console.log(err);

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

  return (
    <div>
      <ToastContainer position='top-center' />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='w-full'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Buyurtma berish
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <div className='mt-5 flex flex-col gap-5'>
              <TextField
                id='outlined-basic'
                label='Name'
                variant='outlined'
                size='small'
                fullWidth
                type='text'
                value={formik.values.fullname}
                onChange={(e) =>
                  formik.setFieldValue('fullname', e.target.value)
                }
              />
              <TextField
                id='outlined-basic'
                label='Phone Number'
                variant='outlined'
                size='small'
                type='tel'
                fullWidth
                value={formik.values.phone}
                onChange={(e) => formik.setFieldValue('phone', e.target.value)}
              />
              <TextArea
                value={formik.values.comment}
                placeholder={'Write your comment here..'}
                size={10}
                onChange={(e: any) =>
                  formik.setFieldValue('comment', e.target.value)
                }
              />
            </div>
            <div className='flex justify-end gap-2'>
              <Button
                className=' mt-5 w-full md:w-auto'
                variant='contained'
                color='error'
                type='submit'
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className='mt-5 w-full md:w-auto'
                variant='contained'
                color='primary'
                type='submit'
              >
                Send
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
