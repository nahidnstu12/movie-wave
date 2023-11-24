import Lists from '@/components/ui/pricing/listItem';
import PricingCard from '@/components/shared/cards/pricingCard';

function Cards() {
  return (
    <>
      <PricingCard
        iconPath="/images/solo.svg"
        title="Solo"
        prevPrice="৳69"
        currentPrice="৳49"
        limitText="2 Device Stream At a Time"
        list={
          <Lists
            lists={[
              { text: 'Bufferless Server' },
              { text: 'HD Available' },
              { text: 'Mobile,Pc & Tv App' },
              { text: 'Unlimited Movies & Tv Shows' },
              { text: 'Bufferless Streaming' }
            ]}
          />
        }
        buttonText="Start 14 Days for 100 BDT Only"
        variant="dark-variant"
      />
      <PricingCard
        iconPath="/images/plus.svg"
        title="Plus"
        prevPrice="৳69"
        currentPrice="৳49"
        limitText="2 Device Stream At a Time"
        list={
          <Lists
            lists={[
              { text: 'Bufferless Server' },
              { text: 'HD Available' },
              { text: 'Mobile,Pc & Tv App' },
              { text: 'Unlimited Movies & Tv Shows' },
              { text: 'Bufferless Streaming' }
            ]}
          />
        }
        buttonText="Start 14 Days for 100 BDT Only"
      />
      <PricingCard
        iconPath="/images/entertainment.svg"
        title="Entertainment"
        prevPrice="৳69"
        currentPrice="৳49"
        limitText="2 Device Stream At a Time"
        list={
          <Lists
            lists={[
              { text: 'Bufferless Server' },
              { text: 'HD Available' },
              { text: 'Mobile,Pc & Tv App' },
              { text: 'Unlimited Movies & Tv Shows' },
              { text: 'Bufferless Streaming' }
            ]}
          />
        }
        buttonText="Start 14 Days for 100 BDT"
        variant="dark-variant"
      />
    </>
  );
}

export default Cards;
