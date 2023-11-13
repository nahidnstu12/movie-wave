import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Button from '@/components/shared/button';
import { useRouter } from 'next/router';

const Header = () => {
  const [dropDown, setDropDown] = useState(0);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const router = useRouter();

  return (
    <div>
      <header
        className="lg:bg-transpaprent text-white w-[1312px] max-w-full h-[60px] m-auto lg:mt-10 sm:mt-0 xs:mt-0 flex justify-between items-center
                               lg:p-0 xs:p-[20px] lg:bg-transparent sm:bg-black xs:bg-black lg:relative sm:fixed xs:fixed z-50"
      >
        <img
          src={'./images/logo.svg'}
          className="lg:h-[47px] w-[257px] sm:h-[34px] xs:h-[34px] sm:w-[186px] xs:w-[186px] cursor-pointer"
          onClick={()=> router.push("/")}
        />

        <nav className="lg:flex justify-center items-center gap-10 font-medium sm:hidden xs:hidden">
          <ul className="max-w-full flex flex-row gap-10">
            <li
              onClick={() => (dropDown === 1 ? setDropDown(0) : setDropDown(1))}
              className="relative cursor-pointer"
            >
              <p className="flex gap-1 justify-center items-center">
                Tutorial
                <FiChevronDown
                  height={24}
                  width={24}
                  style={{
                    transform:
                      dropDown === 1 ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                  className="transition-transform duration-500"
                />
              </p>
              <ul
                style={{ display: dropDown === 1 ? 'flex' : 'none' }}
                className="absolute py-1 flex-col"
              >
                <li className="whitespace-nowrap my-2">Tutorial one</li>
                <li className="whitespace-nowrap my-2">Tutorial two</li>
              </ul>
            </li>

            <li
              onClick={() => (dropDown === 2 ? setDropDown(0) : setDropDown(2))}
              className="relative cursor-pointer"
            >
              <p className="flex gap-1 justify-center items-center">
                Download
                <FiChevronDown
                  height={24}
                  width={24}
                  style={{
                    transform:
                      dropDown === 2 ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                  className="transition-transform duration-500"
                />
              </p>
              <ul
                style={{ display: dropDown === 2 ? 'flex' : 'none' }}
                className="absolute py-1 flex-col"
              >
                <li className="whitespace-nowrap my-2">Download one</li>
                <li className="whitespace-nowrap my-2">Download two</li>
              </ul>
            </li>

            <li className="whitespace-nowrap">Content Request</li>
            <li>Price</li>
            <li>Affiliate</li>
          </ul>

          <Button
            placeholder={'Account'}
            icon={<FiChevronDown height={24} width={24} />}
            type={'white'}
          />
        </nav>
        <nav className="sm:flex sm:flex-col justify-center items-center gap-10 font-medium lg:hidden xs:hidden">
          <HiOutlineMenuAlt3
            style={{ height: '30px', width: '30px' }}
            className="relative"
            onClick={() => setHamburgerMenu((humburgerMenu) => !humburgerMenu)}
          />
          {hamburgerMenu && (
            <ul className="w-full flex flex-col justify-start items-start gap-10 absolute left-0 top-[58px] p-10 h-fit bg-[black]">
              <li
                onClick={() =>
                  dropDown === 1 ? setDropDown(0) : setDropDown(1)
                }
                className="cursor-pointer"
              >
                <p className="flex gap-1 justify-start items-center">
                  Tutorial
                  <FiChevronDown
                    height={24}
                    width={24}
                    style={{
                      transform:
                        dropDown === 1 ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    className="transition-transform duration-500"
                  />
                </p>
                <ul
                  style={{ display: dropDown === 1 ? 'block' : 'none' }}
                  className="mt-2 text-gray-400"
                >
                  <li className="whitespace-nowrap py-2">Tutorial one</li>
                  <li className="whitespace-nowrap py-2">Tutorial two</li>
                </ul>
              </li>

              <li
                onClick={() =>
                  dropDown === 2 ? setDropDown(0) : setDropDown(2)
                }
                className="cursor-pointer"
              >
                <p className="flex gap-1 justify-start items-center">
                  Download
                  <FiChevronDown
                    height={24}
                    width={24}
                    style={{
                      transform:
                        dropDown === 2 ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    className="transition-transform duration-500"
                  />
                </p>
                <ul
                  style={{ display: dropDown === 2 ? 'block' : 'none' }}
                  className="mt-2 text-gray-400"
                >
                  <li className="whitespace-nowrap py-2">Download one</li>
                  <li className="whitespace-nowrap py-2">Download two</li>
                </ul>
              </li>

              <li className="whitespace-nowrap">Content Request</li>
              <li>Price</li>
              <li>Affiliate</li>

              <Button
                placeholder={'Account'}
                icon={<FiChevronDown height={24} width={24} />}
                type={'white'}
              />
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
