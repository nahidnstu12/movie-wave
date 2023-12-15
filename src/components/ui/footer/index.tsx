import { useTheme } from '@/hooks/useTheme';

const imageContainerClass =
  'w-[40px] h-[40px] rounded-full flex justify-center items-center bg-black ';

const Footer = ({ isMobileNavShown }: any) => {
  const { theme } = useTheme();
  return (
    <footer
      className={`${theme} pt-5 ${
        isMobileNavShown ? 'mb-[75px]' : ''
      } sm:mb-0  lg:pt-24 bg-dark text-tertiary`}
    >
      <div className={'container grid auto-rows-min lg:grid-cols-3 gap-20'}>
        <div>
          {theme === 'light' ? (
            <img src={'/images/logo-dark.svg'} alt={'logo'} />
          ) : (
            <img src={'/images/logo.svg'} alt={'logo'} />
          )}

          <p
            className={
              'text-xxs lg:text-3xs text-secondary2 font-normal pt-4 pb-8 not-italic'
            }
          >
            MovieWave is a streaming guide that allows you to unify your
            streaming services.
          </p>
          <div className={'flex gap-6'}>
            <div
              className={`${imageContainerClass} hover:bg-footer-hover-icon`}
            >
              <img src={'/images/icons/facebook1.png'} alt={'facebook-icon'} />
            </div>
            <div
              className={`${imageContainerClass} hover:bg-footer-hover-icon`}
            >
              <img
                src={'/images/icons/instagram1.png'}
                alt={'instagram-icon'}
              />
            </div>
            <div
              className={`${imageContainerClass} hover:bg-footer-hover-icon`}
            >
              <img src={'/images/icons/youtube1.png'} alt={'youtube-icon'} />
            </div>
          </div>
        </div>
        <div className={'flex flex-col gap-10'}>
          <div className={'flex gap-4 items-center'}>
            <img src={'/images/icons/call.png'} alt={'call-icon'} />
            <div>
              <h5 className={'text-[18px] lg:text-2xs text-secondary mb-3'}>
                24/7 Customer Support
              </h5>
              <p className={'text-xxs text-secondary2  font-medium'}>
                Live Chat
              </p>
            </div>
          </div>

          <div className={'flex gap-4 items-center'}>
            <img src={'/images/icons/watch.png'} alt={'call-icon'} />
            <div>
              <h5 className={'text-[18px] lg:text-2xs text-secondary mb-3'}>
                Watch Everywhere
              </h5>
              <p className={'text-xxs text-secondary2  font-medium'}>
                Stream Unlimited Movies and TV Shows
              </p>
            </div>
          </div>

          <div className={'flex gap-4 items-center'}>
            <img src={'/images/icons/savings.png'} alt={'call-icon'} />
            <div>
              <h5 className={'text-[18px] lg:text-2xs text-secondary mb-3'}>
                Huge Savings
              </h5>
              <p className={'text-xxs text-secondary2  font-medium'}>
                At Lowest Price
              </p>
            </div>
          </div>
        </div>
        <div>
          <p
            className={
              'text-[18px] lg:text-sm text-secondary font-extrabold pb-8'
            }
          >
            Navigation Link
          </p>
          <p
            className={
              'text-xxs lg:text-xs text-secondary mb-6 hover:underline hover:ml-4 duration-1000'
            }
          >
            Home
          </p>
          <p
            className={
              'text-xxs lg:text-xs text-secondary hover:underline hover:ml-4  mb-6  duration-1000'
            }
          >
            Tutorial
          </p>
          <p
            className={
              'text-xxs lg:text-xs mb-6 text-secondary hover:underline hover:ml-4 duration-1000'
            }
          >
            Download
          </p>
          <p
            className={
              'text-xxs lg:text-xs mb-6 text-secondary hover:underline hover:ml-4 duration-1000'
            }
          >
            Content Request
          </p>
          <p
            className={
              'text-xxs lg:text-xs mb-6 text-secondary hover:underline hover:ml-4 duration-1000'
            }
          >
            Price
          </p>
          <p
            className={
              'text-xxs lg:text-xs mb-6  text-secondary hover:underline hover:ml-4 duration-1000'
            }
          >
            Affiliate
          </p>
        </div>
      </div>
      <hr className={'opacity-20'} />
      <p className={'text-secondary2 text-xxs lg:text-3xs py-6 text-center'}>
        Copyright © MovieWave 2023
      </p>
      {/*<div*/}
      {/*  className={*/}
      {/*    'fixed bottom-32 right-6 cursor-pointer lg:bottom-44 lg:right-28'*/}
      {/*  }*/}
      {/*>*/}
      {/*  <img*/}
      {/*    src={'images/icons/livechat.svg'}*/}
      {/*    className={''}*/}
      {/*    alt={'live chat icon'}*/}
      {/*  />*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
