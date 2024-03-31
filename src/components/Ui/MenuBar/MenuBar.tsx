import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { RiMenu2Fill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import { IoClose } from 'react-icons/io5';
import { useEffect, useState } from 'react';

type Anchor = 'top';

export default function MenuBar() {
  const [state, setState] = useState({
    top: false,
  });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setState({ ...state, top: false });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [state]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <Box
      sx={{
        marginTop: '10px',
      }}
      role='presentation'
      className={'container m-auto px-5'}
      // onKeyDown={toggleDrawer('top', false)}
    >
      <div className='flex items-center justify-between my-5'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='Chikako'
            width={105}
            height={45}
            objectFit='contain'
          />
        </Link>
        <div onClick={toggleDrawer('top', false)} className='cursor-pointer'>
          <IoClose size={24} />
        </div>
      </div>
      <div className='border border-[#b5b3b3] rounded-lg '>
        <SearchBar isIcon={false} />
      </div>
      <List>
        {['Home', 'About', 'Categories', 'Pages', 'Fikrlar', 'Contact'].map(
          (text, index) => (
            <ListItem key={text} onKeyDown={toggleDrawer('top', false)}>
              <Link
                href={`/${text}`}
                className='hover:bg-[#FFEEF0] rounded-md w-full '
              >
                <ListItemButton className='hover:bg-[#FFEEF0] rounded-md font-bold'>
                  {text}
                </ListItemButton>
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <div onClick={toggleDrawer('top', true)}>
        <RiMenu2Fill size={28} color='white' />
      </div>
      <Drawer
        anchor='top'
        open={state['top']}
        onClose={toggleDrawer('top', false)}
        sx={{}}
      >
        {list()}
      </Drawer>
    </div>
  );
}
