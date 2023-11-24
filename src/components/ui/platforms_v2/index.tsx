import { useEffect } from 'react';
import Button from '@/components/shared/button';
import { ImArrowUpRight2 } from 'react-icons/im';

const Platforms = () => {
  useEffect(() => {
    const group_1 = document.querySelectorAll('#group-1');

    var timeout_1: any;
    var timeout_2: any;

    group_1.forEach((bubble: any) => {
      bubble.style.transition = 'transform 1.5s ease';
      bubble.style.transform = 'scale(1)';
      timeout_1 = setTimeout(() => {
        bubble.style.transform = 'scale(0.1)';
      }, 0);
      timeout_2 = setTimeout(() => {
        bubble.style.transform = 'scale(1)';
      }, 1500);
    });

    const interval_1 = setInterval(() => {
      group_1.forEach((bubble: any) => {
        bubble.style.transition = 'transform 1.5s ease';
        bubble.style.transform = 'scale(1)';
        timeout_1 = setTimeout(() => {
          bubble.style.transform = 'scale(0.1)';
        }, 0);
        timeout_2 = setTimeout(() => {
          bubble.style.transform = 'scale(1)';
        }, 1500);
      });
    }, 3000);

    return () => {
      clearTimeout(timeout_1);
      clearTimeout(timeout_2);

      clearInterval(interval_1);
    };
  }, []);

  return (
    <div
      className="lg:mt-24 sm:mt-5 xs:-mt-0 bubble-container w-full flex flex-col gap-10 overflow-x-hidden py-10"
      style={{ background: 'linear-gradient(to top, black, transparent)' }}
    >
      <div className="w-full flex flex-row justify-between transform translate-x-7">
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full"
        >
          <img
            src="./images/Netflix.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-10"
        >
          <img
            src="./images/Prime.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full mt-10"
        >
          <img
            src="./images/Star.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-10"
        >
          <img
            src="./images/Netflix.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full"
        >
          <img
            src="./images/ZEE.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full"
        >
          <img
            src="./images/HBO.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full mt-20"
        >
          <img
            src="./images/Apple.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-4"
        >
          <img
            src="./images/Star.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between tranlate transform -translate-x-7">
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-10"
        >
          <img
            src="./images/ZEE.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-20"
        >
          <img
            src="./images/Prime.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full"
        >
          <img
            src="./images/Hulu.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between transform translate-x-3">
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-10"
        >
          <img
            src="./images/Apple.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-40"
        >
          <img
            src="./images/Star.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-20"
        >
          <img
            src="./images/Hulu.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full"
        >
          <img
            src="./images/Apple.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full"
        >
          <img
            src="./images/Netflix.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-40"
        >
          <img
            src="./images/ZEE.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-10 mr-20"
        >
          <img
            src="./images/Apple.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mr-10"
        >
          <img
            src="./images/Disney.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between transform -translate-x-3">
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -ml-5"
        >
          <img
            src="./images/Star.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full -mt-16"
        >
          <img
            src="./images/Netflix.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full mt-10"
        >
          <img
            src="./images/Netflix.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full"
        >
          <img
            src="./images/Star.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full mt-24"
        >
          <img
            src="./images/Disney.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
        <div
          id="group-1"
          className="bubble lg:w-[110px] sm:w-[110px] xs:w-[40px] lg:h-[110px] sm:h-[110px] xs:h-[40px] bg-white rounded-full mr-20"
        >
          <img
            src="./images/Hulu.svg"
            className="w-full h-full flex justify-center items-center lg:p-3 sm:p-2 xs:p-1"
          />
        </div>
      </div>
      <div className="h-[650px] lg:-mt-6 sm:-mt-8 xs:-mt-[100px] mb-4 flex flex-col max-w-[1150px] w-full m-auto justify-center items-center">
        <div className="text-white flex flex-col justify-center items-center container">
          <h1 className="lg:text-2h2 sm:text-md xs:text-md lg:text-center sm:text-center xs:text-left lg:mb-6 sm:mb-6 xs:mb-4">
            Worldwide 30 Streaming Platform’s Movies & Series in MovieWave
          </h1>
          <p className="lg:text-sm sm:text-sm xs:text-xxs text-center lg:mb-14 sm:mb-14 xs:mb-4 lg:text-center sm:text-center xs:text-left">
            Subscribe to multiple platforms like Netflix, amazon prime, Hulu is
            very costy and not easy. Subscribe to multiple platforms like
            Netflix, amazon prime, Hulu is very costy and not easy. And no
            platform has all the movies you need. Then MovieWave is your only
            solution.
          </p>
          <Button
            placeholder={'Don’t Miss, Grab this now'}
            type={'red'}
            icon={<ImArrowUpRight2 />}
            className="font-semibold lg:text-xs sm:text-xxs xs:text-xxs lg:w-[316px] sm:w-[316px] xs:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Platforms;
