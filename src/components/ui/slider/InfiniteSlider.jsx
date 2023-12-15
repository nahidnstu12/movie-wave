import React,{useEffect, useRef, useState} from "react";

export default function InfiniteSlider() {
  const marqueeRef = useRef();
  const [speedFactor, setspeedFactor] = useState(.6);
  let [number, setNumber] = useState(0);


  useEffect(()=>{
    const targetNumber = 1800;
    const intervalTime = 10;
    const incrementBy = 1;
    const intervalId = setInterval(incrementNumber, intervalTime);

    function incrementNumber() {
        number += incrementBy;
        setNumber(number)
        if (number >= targetNumber) {
            number = 0;
        }
        marqueeRef.current.style.willChange = `transform`;
        marqueeRef.current.style.transform = `translateX(${-(number * speedFactor)}px)`;
        console.log(number)
    }
    return () => {clearInterval(intervalId); setNumber(number)}
  },[speedFactor])

  const reduceSpeed = () =>{
    setspeedFactor(.2);
  }

  const increaeSpeed = async () =>{
    setspeedFactor(.6);
  }

  return (
      <div ref={marqueeRef} className="loop flex" onMouseEnter={()=>{reduceSpeed()}} onMouseLeave={()=>{increaeSpeed()}}>
        <div  className="marquee flex w-full justify-between">
          <div>
            <img src="https://picsum.photos/id/1/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/2/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/3/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/4/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/5/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/6/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/7/200/300" alt="" />
          </div>
        </div>
        <div className="marquee flex w-full justify-between">
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
        </div>
      </div>
  );
}
