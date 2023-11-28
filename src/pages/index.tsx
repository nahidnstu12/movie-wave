import Faqs from '@/components/ui/faqs';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import Hero from '@/components/ui/hero';
import Platforms from '@/components/ui/platforms_v1';
import SupportPlatform from '@/components/ui/support-platform';
import Head from 'next/head';
import PricingTabs from '@/components/ui/pricing';
import MobileNav from '@/components/ui/mobileNav';
import StreamingService from '@/components/ui/streamingService';
import LimitedOfferTimeComponent from '@/components/ui/Offer/limitedOfferTimeComponent';

export default function Home() {
  return (
    <main className="w-full">
      <Head>
        <title>MovieWave</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Header />
      <Hero />
      <Platforms />
      <StreamingService />
      <SupportPlatform />
      <div className="container mb-32">
        <LimitedOfferTimeComponent type={'offer'} />
      </div>

      <PricingTabs />
      <Faqs />
      <MobileNav />

      <Footer isMobileNavShown={true} />
    </main>
  );
}
