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

export function Header() {
  return (
    <>
      <div className='hidden lg:block'>
        <HeaderTop />
      </div>
      <header style={{ position: 'sticky', top: 0, zIndex: 5 }}>
        <div className='bg-mainColor'>
          <div className='container px-5 py-[12px] m-auto'>
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
                <Link
                  href={'tel:+998 90 010 50 85'}
                  className='flex items-center gap-2 text-[12px] border border-[#FFFFFF59] w-[200px] justify-center py-2 rounded-[50px] text-white'
                >
                  <FiPhoneCall size={20} />
                  <span className='font-sans font-bold'>
                    24/7 support: <br />
                    +998 90 010 50 85
                  </span>
                </Link>
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
        <div className='hidden lg:block '>
          <Navbar />
        </div>
      </header>
    </>
  );
}
