'use client';
import Link from 'next/link';
// MUI
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
import { FiPhoneCall } from 'react-icons/fi';
import { HeaderTop } from '@/components/Ui/HeaderTop/HeaderTop';
import MenuBar from '@/components/Ui/MenuBar/MenuBar';
import { Navbar } from '@/components/Ui/Navbar/Navbar';
import SearchBar from '@/components/Ui/SearchBar/SearchBar';
import LocaleSwitcher from '@/components/Ui/Local-switcher/Local-switcher';

export function Header() {
  return (
    <>
      <div className='hidden lg:block'>
        <HeaderTop />
      </div>
      <header style={{ position: 'sticky', top: 0, zIndex: 999 }}>
        <div className='bg-mainColor'>
          <div className='container px-3 py-[12px] m-auto'>
            <div className=''>
              <div className='hidden lg:flex items-center justify-between'>
                <Link href='/'>
                  <Image
                    src={Logo}
                    alt='Chikako'
                    width={105}
                    height={45}
                    objectFit='contain'
                  />
                </Link>
                <div>
                  <SearchBar isIcon={true} />
                </div>
                <div className='flex items-center '>
                  <LocaleSwitcher />
                </div>
              </div>
              <div className='flex items-center justify-between lg:hidden'>
                <Link href='/'>
                  <Image
                    src={Logo}
                    alt='Chikako'
                    width={105}
                    height={45}
                    objectFit='contain'
                  />
                </Link>
                <button>
                  <MenuBar />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block bg-white'>
          <Navbar />
        </div>
      </header>
    </>
  );
}
