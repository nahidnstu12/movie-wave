import { ImageComponent } from '@/components/ui/slider';
import { imageResource } from '@/components/ui/streamingService';
import React, { useEffect, useRef } from 'react';

export default function InfiniteSlider() {
  const marqueeRef = useRef<any>();
  const numberRef = useRef(0);
  const speedFactorRef = useRef(1);

  useEffect(() => {
    const targetNumber = 1800;
    const intervalTime = 10;
    const incrementBy = 3;
    let count = 0;
    const intervalId = setInterval(incrementNumber, intervalTime);

    function incrementNumber() {
      count = count + numberRef.current + incrementBy * speedFactorRef.current;
      if (count >= targetNumber) {
        count = 0;
      }
      marqueeRef.current.style.willChange = `transform`;
      marqueeRef.current.style.transform = `translateX(${-count}px)`;
      console.log({
        number: numberRef.current,
        speedFactor: speedFactorRef.current,
        mqrqueSpeed: count
      });
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
    <div
      ref={marqueeRef}
      className="flex"
      onMouseEnter={() => {
        reduceSpeed();
      }}
      onMouseLeave={() => {
        increaseSpeed();
      }}
    >
      <div className="marquee flex w-full justify-between">
        {imageResource?.map((resource: any) => (
          <ImageComponent resource={resource} key={resource.id} />
        ))}
      </div>
      <div className="marquee flex w-full justify-between">
        {imageResource?.map((resource: any) => (
          <ImageComponent resource={resource} key={resource.id} />
        ))}
      </div>
    </div>
  );
}