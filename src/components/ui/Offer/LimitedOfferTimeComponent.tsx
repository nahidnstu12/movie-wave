import Offer from '@/components/ui/Offer/Offer';
import Quote from '@/components/ui/Offer/Quote';
import VerticalSlider from '@/components/ui/slider/VerticalSlider';

interface IProps {
  type?: any;
}
const LimitedOfferTimeComponent = ({ type = 'quote' }: IProps) => {
  return (
    <div
      className={` ${
        type === 'offer' ? 'lg:max-h-[558px]' : 'lg:max-h-[503px]'
      } p-[1px] rounded-sm w-[calc(100%-1px)] overflow-hidden`}
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
      }}
    >
      <section
        className={
          'bg-dark overflow-hidden rounded-sm lg:max-h-[556px] flex flex-col lg:flex-row lg:mb-[200px]'
        }
      >
        <div className="bg-dark lg:bg-transparent p-8 flex-1 justify-center order-2 lg:order-first lg:pl-[88px] lg:py-20 relative z-20">
          {type !== 'offer' ? <Quote /> : <Offer />}
        </div>
        <div className="flex gap-10 lg:gap-5 -mt-12 -ml-8 flex-1 max-h-[351px] lg:h-auto overflow-hidden lg:overflow-visible lg:-mt-20 lg:-mr-32">
          <VerticalSlider className="rotate-15" />
          <VerticalSlider className="rotate-15" />
        </div>
      </section>
    </div>
  );
};

export default LimitedOfferTimeComponent;
