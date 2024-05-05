import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '../../../../i18n.config';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import UzFlag from '@/assets/images/uzflag.png';
import RuFlag from '@/assets/images/ruFlag.png';
import EnFlag from '@/assets/images/enFlag.png';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleChangeLocale = (e: SelectChangeEvent) => {
    const locale = e.target.value;
    const updatedPath = redirectedPathName(locale);
    router.push(updatedPath);
  };

  return (
    <Select
      value={pathName.split('/')[1] || ''}
      onChange={handleChangeLocale}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      autoWidth
      variant='outlined'
      size='small'
      className='bg-white rounded-md'
    >
      {i18n.locales.map((locale: any) => (
        <MenuItem
          key={locale}
          value={locale}
          className='flex items-center gap-3'
        >
          <div className='flex items-center'>
            <Image
              src={getImageByLocale(locale)}
              width={25}
              height={25}
              alt='pic'
            />
            <span className='ml-2'>{getTextByLocale(locale)}</span>
          </div>
        </MenuItem>
      ))}
    </Select>
  );
}

function getImageByLocale(locale: string): any {
  switch (locale) {
    case 'uz':
      return UzFlag;
    case 'ru':
      return RuFlag;
    case 'en':
      return EnFlag;
    case 'cr':
      return RuFlag;
    default:
      return null;
  }
}

function getTextByLocale(locale: string): any {
  switch (locale) {
    case 'uz':
      return "O'zbekcha";
    case 'ru':
      return 'Русский';
    case 'en':
      return 'English';
    case 'cr':
      return 'Кирил';
    default:
      return null;
  }
}
