import React from 'react';
import VariableWidthSlider from '@/components/ui/slider';

export const imageResource = [
  {
    id: 1,
    main_image: '/images/carousel/image1.png',
    logo: '/images/carousel/logo1.svg'
  },
  {
    id: 2,
    main_image: '/images/carousel/image2.png',
    logo: '/images/carousel/logo2.svg'
  },
  {
    id: 3,
    main_image: '/images/carousel/image3.png',
    logo: '/images/carousel/logo3.svg'
  },
  {
    id: 4,
    main_image: '/images/carousel/image4.png',
    logo: '/images/carousel/logo4.svg'
  },
  {
    id: 5,
    main_image: '/images/carousel/image5.png',
    logo: '/images/carousel/logo5.svg'
  },
  {
    id: 6,
    main_image: '/images/carousel/image11.png',
    logo: '/images/carousel/logo11.svg'
  }
];
export const imageResource2 = [
  {
    id: 1,
    main_image: '/images/carousel/image11.png',
    logo: '/images/carousel/logo11.svg'
  },
  {
    id: 2,
    main_image: '/images/carousel/image12.png',
    logo: '/images/carousel/logo12.svg'
  },
  {
    id: 3,
    main_image: '/images/carousel/image13.png',
    logo: '/images/carousel/logo13.svg'
  },
  {
    id: 4,
    main_image: '/images/carousel/image14.png',
    logo: '/images/carousel/logo14.svg'
  },
  {
    id: 5,
    main_image: '/images/carousel/image15.png',
    logo: '/images/carousel/logo15.svg'
  },
  {
    id: 6,
    main_image: '/images/carousel/image3.png',
    logo: '/images/carousel/logo3.svg'
  }
];

function StreamingService() {
  return (
    <div className="bg-streaming-service bg-no-repeat">
      <div className="pt-[180px] lg:pt-[436px] max-w-[864px] px-5 lg:ml-[208px]">
        <h1 className="text-white text-md lg:text-h2">
          MovieWave - Your All in One Entertainment Destination.
        </h1>
        <p className="text-xxs lg:text-2sm text-white mt-8 lg:mt-12">
          The Bigges streaming platform with unlimited Movies, Tv Series, Anime,
          Web Serie, Korean Drame and more.
        </p>
      </div>
      <div className="mt-[56px] lg:mt-[88px] flex flex-col gap-4 overflow-hidden">
        <VariableWidthSlider imageResource={imageResource} />
        <VariableWidthSlider imageResource={imageResource2} />
      </div>
    </div>
  );
}

export default StreamingService;
