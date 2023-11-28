import Cards from '@/components/shared/cards';
import { useState } from 'react';

const Tabs = ({ color = 'primary' }: any) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="container mb-32 lg:mb-[200px]">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="mb-14 lg:-mb-20 max-w-[528px]">
            <h2 className="text-md lg:text-h2 text-white">
              Entertainment at Your Fingertips
            </h2>
          </div>
          <div className="flex flex-col justify-end sticky lg:static top-[60px] z-20 lg:flex-row pb-4 bg-black lg:bg-transparent">
            <div
              className="flex lg:self-end mb-0 list-none flex-wrap flex-row flex-3 rounded-lg lg:rounded-xl bg-[#333] max-w-[478px] sticky top-0"
              role="tablist"
            >
              <li className="tooltip1 relative flex-auto m-1 text-center">
                <span
                  className={`tooltiptext ${openTab == 1 ? 'visible' : ''}`}
                >
                  Save 39%
                </span>
                <a
                  className={
                    'text-xxs lg:text-sm text-white font-semibold py-3 lg:py-5 rounded-lg lg:rounded-xl rounded block leading-normal ' +
                    (openTab === 1
                      ? 'text-white bg-' + color
                      : 'text-' + color + ' ')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Yearly
                </a>
              </li>
              <li className="tooltip2 relative flex-auto m-1 text-center">
                <span
                  className={`tooltiptext ${openTab == 2 ? 'visible' : ''}`}
                >
                  Save 50%
                </span>
                <a
                  className={
                    'text-xxs lg:text-sm text-white font-semibold py-3 lg:py-5 rounded-lg lg:rounded-xl rounded block leading-normal ' +
                    (openTab === 2
                      ? 'text-white bg-' + color
                      : 'text-' + color + '-600 ')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  6 Month
                </a>
              </li>
              <li className="tooltip3 relative flex-auto m-1 text-center">
                <span
                  className={`tooltiptext ${openTab == 3 ? 'visible' : ''}`}
                >
                  Save 60%
                </span>
                <a
                  className={
                    'text-xxs lg:text-sm text-white font-semibold py-3 lg:py-5 rounded-lg lg:rounded-xl  rounded block leading-normal ' +
                    (openTab === 3
                      ? 'text-white bg-' + color
                      : 'text-' + color + '-600 ')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Monthly
                </a>
              </li>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded ">
            <div className="mt-12 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="flex justify-between flex-col gap-4 lg:flex-row lg:gap-8">
                    <Cards />
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="flex justify-between flex-col gap-4 lg:flex-row lg:gap-8">
                    <Cards />
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div className="flex justify-between flex-col gap-4 lg:flex-row lg:gap-8">
                    <Cards />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PricingTabs() {
  return <Tabs color="primary" />;
}
