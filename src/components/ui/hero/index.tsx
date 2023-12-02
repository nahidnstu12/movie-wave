import { SubscribeComponent } from '@/components/ui/hero/subscribeComponent';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const scroller: any = document.querySelector('#scroller #container');
    var marginTop = 65;
    const interval_1 = setInterval(() => {
      if (marginTop <= 700) {
        scroller.style.transition = '.5s';
        scroller.style.marginTop = `-${marginTop}px`;
        marginTop += 65 + 3;
      } else {
        marginTop = 0;
        scroller.style.transition = 'none';
        scroller.style.marginTop = '0px';
      }
    }, 1000);

    return () => {
      clearInterval(interval_1);
    };
  }, []);

  const animatedImage = [
    '/images/hero/HBO Max.svg',
    '/images/hero/Apple TV.svg',
    '/images/hero/Disney.svg',
    '/images/hero/Hot Star.svg',
    '/images/hero/Hulu.svg',
    '/images/hero/Netflix.svg',
    '/images/hero/One.svg',
    '/images/hero/Oneflix.svg',
    '/images/hero/Prime Video.svg',
    '/images/hero/ZEE.svg',
    '/images/hero/HBO Max.svg'
  ];
  const extractName = (src: any) => {
    const parts = src.split('/');
    const fileName = parts[parts.length - 1];
    const name = fileName.replace(/\.[^/.]+$/, ''); // remove file extension
    return name;
  };

  return (
    <div className="lg:h-[90vh] sm:h-[95vh] xs:h-[100vh] min-h-[700px] max-h-[1000px] container">
      <div className="absolute lg:top-0 xs:top-10 right-0 -z-20 overflow-hidden">
        <img
          // src="./images/hero.png"
          src="./images/hero.webp"
          alt="Your Image"
          className="max-w-[1450px] lg:w-full xs:w-fit lg:h-[1450px] xs:h-[105vh]"
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              'linear-gradient(15deg, rgb(0 0 0 / 0%) 66.55%, rgb(0 0 0 / 6%) 85.63%), linear-gradient(199deg, rgba(0, 0, 0, .8) 9.06%, rgba(0, 0, 0, 0) 22.69%)'
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              'linear-gradient(163deg, rgba(0, 0, 0, .4) 0.06%, rgba(0, 0, 0, .4) 100%)'
          }}
        ></div>
      </div>
      <div className="text-white font-extrabold w-[1312px] max-w-full m-auto h-full flex justify-start items-center relative">
        <div className="w-full flex flex-col gap-0">
          <div
            id="scroller"
            className="h-[65px] overflow-hidden mb-2 lg:mb-5 lg:mt-0 sm:mt-0 xs:mt-10"
          >
            <div id="container">
              {animatedImage.map((item: string, index: number) => (
                <img
                  key={index}
                  src={item}
                  className="h-[60px] mb-2"
                  alt={extractName(item)}
                />
              ))}
            </div>
          </div>
          <h1 className="lg:max-w-[789px] max-w-[210px] xs:font-extrabold sm:font-extrabold lg:mb-[77px] mb-10 lg:text-2h1 sm:text-xxl xs:text-xl">
            Streaming Everything In One
          </h1>
          <SubscribeComponent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
