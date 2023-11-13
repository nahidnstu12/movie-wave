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
      <div className="px-10">
        <div className="flex items-center">
          <div className="mr-5">
            <img src={iconPath} alt="" />
          </div>
          <div className="text-lg">{title}</div>
        </div>
        <div className="flex items-end mt-6">
          <span className="text-dark/50 group-[.dark-variant]:text-white/50 text-lg line-through">
            {prevPrice}
          </span>
          <span className="lg:text-xxxl text-xl">{currentPrice}</span>
          <span className="xs">/MONTH</span>
        </div>
        <div className="rounded-xxl py-2 px-5 group-[.dark-variant]:bg-white/10 bg-primary/10 inline-block mt-6">
          {limitText}
        </div>
      </div>
      <div className="border-t border-t-white/20 mt-5 group-[.primary-variant]:border-t-dark/30"></div>
      <div className="px-10">
        {list}
        <Button
          className="w-full mt-8 lg:text-[17px]"
          placeholder={buttonText}
          type={'transparent'}
          icon={<ImArrowUpRight2 />}
        />
        <Button
          className="w-full mt-3 lg:text-[17px]"
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
