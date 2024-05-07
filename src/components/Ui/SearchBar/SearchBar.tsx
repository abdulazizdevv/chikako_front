import * as React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { CiSearch } from 'react-icons/ci';
import { BiMenuAltLeft } from 'react-icons/bi';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getAllProduct } from '@/service/product';
import { CategoryId, IProductBack } from '@/types/data';
import { useSetStore } from '@/store/store';
import { usePathname, useRouter } from 'next/navigation';
import { getAllCategory } from '@/service/category';
import useStoreCategory from '@/store/categoryStore';
import useMediaQuery from '@mui/material/useMediaQuery';

const filter = createFilterOptions<FilmOptionType>();
const CustomSelectIcon = () => (
  <div className='me-3'>
    <BiMenuAltLeft size={25} />
  </div>
);

export default function SearchBar({ isIcon, closeDrawer }: any) {
  const [value, setValue] = useState<FilmOptionType | null>(null);
  const [age, setAge] = useState('Select Category');
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { header } = useSetStore();
  const router = useRouter();
  const path = usePathname();
  const { category, updateCategory, removeAllCategory } = useStoreCategory();

  React.useEffect(() => {
    fetcher();
    fetchDataCategory();
  }, []);
  const fetcher = async () => {
    const res = await getAllProduct({});
    setData(res.data?.data);
  };
  const fetchDataCategory = async () => {
    const res = await getAllCategory();
    setCategories(res.data?.data);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    if (event.target.value !== 'Select Category') {
      updateCategory(event.target.value);
    } else {
      removeAllCategory();
    }
  };
  const top100Films: any = data?.map((el: IProductBack) => {
    return { title: el?.name?.en, id: el?._id };
  });

  const handleRoutePage = (value: any) => {
    if (value && !path.includes('product')) {
      router.push(`${header}/product/${value?.id}`);
      closeDrawer('top', false);
    } else {
      router.push(`${value?.id}`);
      closeDrawer('top', false);
    }
  };
  return (
    <div className='bg-white p-1 flex items-center rounded-[50px] '>
      <div className='flex items-center gap-2'>
        <div className='ms-[20px]'>
          {isIcon && (
            <div className='flex font-semibold text-[16px] gap-2 items-center'>
              <Select
                sx={{
                  width: 'auto',
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#fff',
                  },
                }}
                variant='outlined'
                size='small'
                labelId='demo-select-small-label'
                id='demo-select-small'
                value={age === '' ? 'Select Category' : age}
                onChange={handleChange}
                IconComponent={CustomSelectIcon}
              >
                <MenuItem value='Select Category'>Select Category</MenuItem>
                {categories?.map((el: any) => (
                  <MenuItem key={el._id} value={el._id}>
                    {header && el?.name[header]}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}
        </div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            handleRoutePage(newValue);
            if (typeof newValue === 'string') {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== '' && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          handleHomeEndKeys
          id='free-solo-with-text-demo'
          options={top100Films}
          getOptionLabel={(option) => {
            if (typeof option === 'string') {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.title;
          }}
          renderOption={(props, option: FilmOptionType) => (
            <li {...props}>{option.title}</li>
          )}
          sx={{
            width: 300,
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          size='small'
          freeSolo
          renderInput={(params) => (
            <TextField
              variant='outlined'
              placeholder='Type Your Products ...'
              {...params}
            />
          )}
        />
      </div>
      {isIcon && (
        <div className='bg-mainColor rounded-full w- p-2'>
          <CiSearch size={30} color='white' />
        </div>
      )}
    </div>
  );
}

interface FilmOptionType {
  inputValue?: string;
  title: string;
  id?: number;
}
