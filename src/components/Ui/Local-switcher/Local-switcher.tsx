'use client';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '../../../../i18n.config';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    const updatedPath = redirectedPathName(locale);
    return router.push(updatedPath);
  };

  return (
    <select
      value={pathName.split('/')[1] || ''}
      onChange={handleChangeLocale}
      className='rounded-md border border-mainColor font-bold bg-bgColor text-black p-1'
    >
      {i18n.locales.map((locale: any) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
}
