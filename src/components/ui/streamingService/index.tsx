import React from 'react';
import VariableWidthSlider from '@/components/ui/slider';

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
      <div className="mt-[56px] lg:mt-[88px]">
        <VariableWidthSlider />
        <VariableWidthSlider className="mt-4" />
      </div>
    </div>
  );
}

export default StreamingService;
