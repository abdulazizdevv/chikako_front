import * as React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { CiSearch } from 'react-icons/ci';
import { BiMenuAltLeft } from 'react-icons/bi';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { RiMenu2Fill } from 'react-icons/ri';
import { getAllProduct } from '@/service/product';
import { IProduct } from '@/types/langType';
import { IProductBack } from '@/types/data';
interface SearchBarProps {
  isIcon: boolean;
}

const filter = createFilterOptions<FilmOptionType>();
const CustomSelectIcon = () => (
  <div className='me-3'>
    <BiMenuAltLeft size={25} />
  </div>
);

export default function SearchBar({ isIcon }: SearchBarProps) {
  const [value, setValue] = useState<FilmOptionType | null>(null);
  const [age, setAge] = useState('Select Category');
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  React.useEffect(() => {
    const fetcher = async () => {
      const res = await getAllProduct();
      setData(res.data?.data);
    };
    fetcher();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  // console.log(data);
  const top100Films: any = data?.map((el: IProductBack) => {
    return { title: el?.name?.en };
  });

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
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          )}
        </div>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            // Remove the setValue function call from here
            // and just update the local state
            if (typeof newValue === 'string') {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
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
          renderOption={(props, option) => (
            <li className='w-full' {...props}>
              {option.title}
            </li>
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
  year?: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
