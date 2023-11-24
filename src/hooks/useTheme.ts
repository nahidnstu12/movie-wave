import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const lightUrl = ['/checkout', '/checkout-success'];
const darkUrl = ['/'];

export const useTheme = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<string>('light');

  // console.log("teme", router.pathname, theme)

  useEffect(() => {
    if (lightUrl.includes(router.pathname)) {
      setTheme('light');
    } else if (darkUrl.includes(router.pathname)) {
      setTheme('dark');
    }
  }, [router]);

  useEffect(() => {
    let element: any = document.querySelector('html');
    if (theme === 'light') {
      element.classList.add('light');
      element.classList.remove('dark');
      element.style.backgroundColor = '#FFFFFF';
    } else {
      element.classList.add('dark');
      element.classList.remove('light');
      element.style.backgroundColor = '#000';
    }
  }, [router, theme]);

  return { theme };
};
