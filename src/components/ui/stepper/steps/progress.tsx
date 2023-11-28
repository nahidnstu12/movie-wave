import { useEffect } from 'react';

export default function Progress() {
  useEffect(() => {
    const bar = document.getElementById('bar');

    if (bar) {
      bar.classList.remove('w-0');
      bar.classList.add('w-full');
    }
  }, []);
  return (
    <div className="h-[100vh] w-[100vw] fixed top-0 left-0 flex justify-center items-center bg-secondary/90 z-50">
      <div className="p-10 lg:p-20 text-center bg-white rounded-xxl max-w-[864px] mx-5">
        <div className="mb-7 lg:mb-8 text-xl">
          We are creating your account!
        </div>
        <div className="text-xs">
          Please wait for a while to complete your account.
        </div>
        <div className="w-full h-5 bg-green/20 rounded-[18.5px] mt-10 lg:mt-16">
          <div
            id={'bar'}
            className="transition-all ease-out duration-1000 h-full w-0 bg-green rounded-[18.5px]"
          ></div>
        </div>
      </div>
    </div>
  );
}
