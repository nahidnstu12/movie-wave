import React, { useEffect, useRef } from 'react';
import { ImageComponent } from '@/components/ui/slider/imageComponent';

function VariableWidthSlider({ className, imageResource}: any) {
  const marqueeRef = useRef<any>();
  const marqueeInnerRef = useRef<any>();
  const numberRef = useRef(0);
  const speedFactorRef = useRef(1);

  useEffect(() => {
    const {width} = marqueeInnerRef.current.getBoundingClientRect();
    console.log(marqueeInnerRef.current.getBoundingClientRect());
    const targetNumber = width*2;
    const intervalTime = 10;
    const incrementBy = 1;
    let count = 0;
    const intervalId = setInterval(incrementNumber, intervalTime);

    function incrementNumber() {
      count = count + numberRef.current + incrementBy * speedFactorRef.current;
      if (count >= targetNumber) {
        count = 0;
      }
      marqueeRef.current.style.willChange = `transform`;
      marqueeRef.current.style.transform = `translateX(${-count}px)`;
    }

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const reduceSpeed = () => {
    speedFactorRef.current = 0.5;
  };

  const increaseSpeed = () => {
    speedFactorRef.current = 1;
  };

  return (
    <div className={`${className} max-h-[131px] w-auto lg:max-h-[262px] lg:h-auto`}>
      <div
        ref={marqueeRef}
        className="loop flex gap-4"
        onMouseEnter={() => {
          reduceSpeed();
        }}
        onMouseLeave={() => {
          increaseSpeed();
        }}
      >
        <div ref={marqueeInnerRef} className="marquee flex w-full gap-2 lg:gap-4">
          {imageResource?.map((resource: any) => (
            <ImageComponent resource={resource} key={resource.id} />
          ))}
        </div>
        <div className="marquee flex w-full gap-2 lg:gap-4">
          {imageResource?.map((resource: any) => (
            <ImageComponent resource={resource} key={resource.id} />
          ))}
        </div>
        <div className="marquee flex w-full gap-2 lg:gap-4">
          {imageResource?.map((resource: any) => (
            <ImageComponent resource={resource} key={resource.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VariableWidthSlider;
