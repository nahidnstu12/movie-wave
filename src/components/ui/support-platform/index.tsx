import Button from '@/components/shared/button';
import { ImArrowUpRight2 } from 'react-icons/im';

const SupportPlatform = () => {
  return (
    <div
      className="container -z-10 relative flex lg:flex-row md:flex-col xs:flex-col h-full lg:mt-[-100px] lg:pb-[0px] md:pb-[100px] xs:pb-[100px]"
    >
      <div
        className="lg:w-[80%] lg:pb-[250px] lg:mb-[-100px] md:w-[100%] xs:w-[100%] lg:ml-[-15%] lg:pt-[250px] 
                        md:pt-[200px] xs:pt-[100px] flex justify-center items-center"
        style={{
          background: 'radial-gradient(ellipse, #E50914 -100%, black 75%)'
        }}
      >
        <img
          className={'mb-14'}
          src={'/images/big-laptop2.png'}
          alt={'big-laptop'}
        />
      </div>

      <div className="lg:w-[50%] text-white lg:pt-[250px] lg:ml-[-150px]">
        <h3 className={'text-md lg:text-h2 lg:mt-6'}>
          Available On Your Phone, Tablet and TV
        </h3>
        <p
          className={
            'text-xxs lg:text-2sm font-normal opacity-60 pt-4 lg:pt-4 pb-5 lg:pb-16'
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
    </div>
  );
};

export default SupportPlatform;
