import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import CheckoutProcess from '@/components/ui/stepper';
import Checkout from '@/components/ui/stepper/mobileCheckout';
import Head from 'next/head';

export default function CheckoutPage() {
  return (
    <main className="bg-body w-full">
      <Head>
        <title>MovieWave Checkout</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Header />
      <CheckoutProcess />
      {/*<MobileStepper />*/}
      <Checkout />
      {/*<div className={'mt-10'}>*/}
      {/*  <Information />*/}
      {/*</div>*/}

      <Footer />
    </main>
  );
}
