import 'react-international-phone/style.css';
import '@/styles/index.scss';
import '@/styles/hero.scss';
import '@/styles/faqs.scss';
import '@/styles/countrycode.scss';
import '@/styles/tooltip.scss';
import '@/styles/stepper.scss';
import '@/styles/checkbox.scss';
import '@/styles/peoplewatching.scss'

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
