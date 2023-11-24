import Button from '@/components/shared/button';
import { ImArrowUpRight2 } from 'react-icons/im';

const Offer = () => {
  return (
    <>
      <h4 className={'text-sm text-primary lg:text-xl'}>Limited Time Offer</h4>
      <h3 className={'text-lg text-white my-5 lg:text-h2'}>50% Discount</h3>
      <div
        className={'grid grid-cols-2 text-white gap-y-4 gap-x-2 lg:gap-y-8 lg:gap-x-4 max-w-[162px] lg:max-w-[326px]'}
      >
        <TimeElement value="09" unit="Days" />
        <TimeElement value="20" unit="Hours" />
        <TimeElement value="12" unit="Minutes" />
        <TimeElement value="25" unit="Seconds" />
      </div>
      <Button
        className={'w-full lg:w-52 mt-5 lg:mt-16'}
        placeholder={"Let's Go Now"}
        type={'red'}
        icon={<ImArrowUpRight2 />}
      />
    </>
  );
};

function TimeElement({ value, unit }: any) {
  return (
    <div className="flex items-center">
      <h5 className="text-sm lg:text-xxl lg:leading-[88%]">{value}</h5>
      <span className="text-xxxs text-gray ml-2 lg:text-2sm">{unit}</span>
    </div>
  );
}

export default Offer;
