import Button from '@/components/shared/button';
import { ImArrowUpRight2 } from 'react-icons/im';

const SupportPlatform = () => {
  return (
    <section
      className={
        'container flex flex-col lg:flex-row lg:gap-[60px] relative z-10 py-48'
      }
    >
      <div
        className={
          'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-primary to-transparent absolute inset-0 opacity-10 z-0 w-1/2'
        }
      ></div>
      <img
        className={'mb-14 z-50'}
        src={'/images/big-laptop.png'}
        alt={'big-laptop'}
      />
      <div className={'text-white'}>
        <h3 className={'text-md lg:text-2h2 '}>
          Available On Your Phone, Tablet and TV
        </h3>
        <p
          className={
            'text-xxs lg:text-2sm font-normal opacity-60 pt-8 lg:pt-12 pb-5 lg:pb-16'
          }
        >
          MovieWave Supports In All Platform.You Can Enjoy MovieWaveApp In Your
          Tv, Mobile, Tablet.
        </p>
        
        <Button
          placeholder={'Let’s Go Now'}
          type={'red'}
          icon={<ImArrowUpRight2 />}
          className="xs:w-full lg:w-[240px]  lg:h-[70px] sm:h-[55px] xs:h-[55px] "
        />
      </div>
    </section>
  );
};

export default SupportPlatform;
