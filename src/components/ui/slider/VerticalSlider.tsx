import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function VerticalSlider({className}:any) {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    arrows: false,
    autoplay:true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className={`${className} max-w-[338px]`}>
        <Slider {...settings} ref={sliderRef}>
          <img className='slick-slide' src="/images/offer/image1.png" alt="" />
          <img className='slick-slide' src="/images/offer/image2.png" alt="" />
          <img className='slick-slide' src="/images/offer/image3.png" alt="" />
          <img className='slick-slide' src="/images/offer/image4.png" alt="" />
          <img className='slick-slide' src="/images/offer/image5.png" alt="" />
          <img className='slick-slide' src="/images/offer/image6.png" alt="" />
        </Slider>
      </div>
    </>
  );
}

export default VerticalSlider;
