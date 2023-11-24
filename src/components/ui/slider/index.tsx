import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function VariableWidthSlider({className}:any) {
  const sliderRef = useRef(null);
  const [sliderSpeed, setSliderSpeed] = useState(1500)

  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: sliderSpeed,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 3000,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 3000,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className={`${className} max-h-[131px] w-auto lg:max-h-[262px] lg:h-auto`} onMouseEnter={()=>{setSliderSpeed(3000)}} onMouseLeave={()=>setSliderSpeed(1500)}>
      <Slider {...settings} ref={sliderRef}>
        <div className='px-1 lg:px-2 relative'>
          <div className=" absolute bottom-4 left-4 m-w-[48px]">
            <img src="/images/slider_logo.svg" alt="" />
          </div>
          <img className='slick-slide w-auto max-h-[131px] lg:max-h-[262px] lg:h-auto' src="/images/slider/image1.png" alt="" />
        </div>
        <div className='px-1 lg:px-2 relative'>
          <div className=" absolute bottom-4 left-4 m-w-[48px]">
            <img src="/images/slider_logo.svg" alt="" />
          </div>
          <img className='slick-slide w-auto max-h-[131px] lg:max-h-[262px] lg:h-auto' src="/images/slider/image2.png" alt="" />
        </div>
        <div className='px-1 lg:px-2 relative'>
          <div className=" absolute bottom-4 left-4 m-w-[48px]">
            <img src="/images/slider_logo.svg" alt="" />
          </div>
          <img className='slick-slide w-auto max-h-[131px] lg:max-h-[262px] lg:h-auto' src="/images/slider/image3.png" alt="" />
        </div>
        <div className='px-1 lg:px-2 relative'>
          <div className=" absolute bottom-4 left-4 m-w-[48px]">
            <img src="/images/slider_logo.svg" alt="" />
          </div>
          <img className='slick-slide w-auto max-h-[131px] lg:max-h-[262px] lg:h-auto' src="/images/slider/image4.png" alt="" />
        </div>
        <div className='px-1 lg:px-2 relative'>
          <div className=" absolute bottom-4 left-4 m-w-[48px]">
            <img src="/images/slider_logo.svg" alt="" />
          </div>
          <img className='slick-slide w-auto max-h-[131px] lg:max-h-[262px] lg:h-auto' src="/images/slider/image5.png" alt="" />
        </div>
        <div className='px-1 lg:px-2 relative'>
          <div className=" absolute bottom-4 left-4 m-w-[48px]">
            <img src="/images/slider_logo.svg" alt="" />
          </div>
          <img className='slick-slide w-auto max-h-[131px] lg:max-h-[262px] lg:h-auto' src="/images/slider/image6.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default VariableWidthSlider;
