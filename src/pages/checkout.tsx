import CheckoutProcess from '@/components/ui/stepper';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import Head from 'next/head';

export default function CheckoutPage() {
  return (
    <main className="w-full">
      <Head>
        <title>MovieWave Checkout </title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Header />
      <CheckoutProcess />
      <Footer />
    </main>
  );
}
