import Card from '@/components/shared/card';
import Button from '@/components/shared/button';
import { ImArrowUpRight2 } from 'react-icons/im';

function PricingCard({
  iconPath,
  title,
  prevPrice,
  currentPrice,
  limitText,
  list,
  buttonText,
  variant = 'primary-variant'
}: any) {
  return (
    <div
      className={'p-[1px] rounded-sm w-[calc(100%-1px)] overflow-hidden'}
      style={{
        backgroundImage:
          'linear-gradient(150deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .5), rgba(255, 255, 255, 1))'
      }}
    >
    <Card variant={variant} className="py-10 lg:max-w-[416px]">
      <div className="px-6 lg:px-10">
        <div className="flex items-center">
          <div className="mr-5">
            <img src={iconPath} alt=""/>
          </div>
          <div className="text-3sm lg:text-md">{title}</div>
        </div>
        <div className="flex items-end mt-5">
          <span className="text-dark/50 group-[.dark-variant]:text-white/50 text-packageTitle lg:text-xl font-medium lg:font-semibold line-through">
            {prevPrice}
          </span>
          <span className="lg:text-xxxl leading-120 text-xl font-medium">{currentPrice}</span>
          <span className="text-2xxxs lg:text-xs font-medium leading-140">/Month</span>
        </div>
        <div className=" text-[14px] font-medium lg:text-2xs font-normal rounded-xxl py-2 px-5 group-[.dark-variant]:bg-white/10 bg-primary/10 inline-block mt-2">
          {limitText}
        </div>
      </div>
      <div className="border-t border-t-white/20 mt-5 group-[.primary-variant]:border-t-dark/30"></div>
      <div className="px-6 lg:px-10">
        {list}
        <Button
          className="w-full mt-8 !text-[18px] lg:text-2xs font-semibold xs:p-0"
          placeholder={buttonText}
          type={'transparent'}
          icon={<ImArrowUpRight2 />}
        />
        <Button
          className="w-full h-[69px] mt-3 !text-[18px] lg:text-2xs font-semibold xs:p-0"
          placeholder={'Get Started With 6 Month'}
          type={'red'}
          icon={<ImArrowUpRight2 />}
        />
      </div>
    </Card>
    </div>
  );
}

export default PricingCard;
