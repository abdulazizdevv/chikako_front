import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Select, MenuItem } from '@mui/material';
import { useFormik } from 'formik';

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
  open: boolean;
  setOpen: (value: boolean) => void;
}
interface IinitalValues {
  name: string;
  phoneNumber: string;
  address: string;
  paymentType: string;
}

export default function ModalOrder({ open, setOpen }: IProps) {
  const handleClose = () => setOpen(false);
  const initialValues = {
    name: '',
    phoneNumber: '',
    address: '',
    paymentType: 'Naqd',
  };

  const onSubmit = (values: IinitalValues) => {
    // console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div>
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
                value={formik.values.name}
                onChange={(e) => formik.setFieldValue('name', e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Phone Number'
                variant='outlined'
                size='small'
                type='tel'
                fullWidth
                value={formik.values.phoneNumber}
                onChange={(e) =>
                  formik.setFieldValue('phoneNumber', e.target.value)
                }
              />
              <TextField
                id='outlined-basic'
                label='Address'
                variant='outlined'
                type='text'
                size='small'
                fullWidth
                value={formik.values.address}
                onChange={(e) =>
                  formik.setFieldValue('address', e.target.value)
                }
              />
              <Select
                className='w-full'
                variant='outlined'
                size='small'
                labelId='demo-select-small-label'
                id='demo-select-small'
                value={formik.values.paymentType}
                onChange={(e) =>
                  formik.setFieldValue('paymentType', e.target.value)
                }
              >
                <MenuItem value={'Naqd'}>Naqd</MenuItem>
                <MenuItem value={'Kart'}>Kart</MenuItem>
              </Select>
            </div>
            <Button
              className='float-end mt-5'
              variant='contained'
              color='error'
              type='submit'
            >
              Send
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
