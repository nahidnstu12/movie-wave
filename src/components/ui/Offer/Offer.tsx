import Button from '@/components/shared/button';
import { ImArrowUpRight2 } from 'react-icons/im';

const Offer = () => {
  return (
    <>
      <h4 className={'text-sm text-primary lg:text-xl'}>Limited Time Offer</h4>
      <h3 className={'text-lg text-white my-5 lg:text-2h2'}>50% Discount</h3>
      <div className={'flex text-white gap-5 items-center lg:gap-8'}>
        <TimeElement value="09" unit="Days" />
        <TimeElement value="20" unit="Hours" />
      </div>
      <div
        className={'flex text-white gap-5 items-center lg:gap-8 lg:mb-[60px]'}
      >
        <TimeElement value="12" unit="Minutes" />
        <TimeElement value="25" unit="Seconds" />
      </div>
      <Button
        className={'w-full lg:w-52'}
        placeholder={'Lets Go Now'}
        type={'red'}
        icon={<ImArrowUpRight2 />}
      />
    </>
  );
};

function TimeElement({ value, unit }: any) {
  return (
    <div className="flex items-center">
      <h5 className="text-md lg:text-xxl">{value}</h5>
      <span className="text-xs text-gray ml-2 lg:text-2sm">{unit}</span>
    </div>
  );
}

export default Offer;
