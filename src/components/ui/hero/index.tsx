import Button from '@/components/shared/button';
import { ImArrowUpRight2 } from 'react-icons/im';
import { useState, useEffect } from 'react';
import { PhoneInput } from 'react-international-phone';

const Hero = () => {
  const [tab, setTab] = useState('mobile');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handlePhoneSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      action: 'handle phone number submit',
      values: {
        phone
      }
    });
  };

  useEffect(() => {
    const scroller: any = document.querySelector('#scroller #container');
    var marginTop = 65;
    const interval_1 = setInterval(() => {
      if (marginTop <= 700) {
        scroller.style.transition = '.5s';
        scroller.style.marginTop = `-${marginTop}px`;
        marginTop += 65 + 3;
      } else {
        marginTop = 0;
        scroller.style.transition = 'none';
        scroller.style.marginTop = '0px';
      }
    }, 1000);

    return () => {
      clearInterval(interval_1);
    };
  }, []);

  return (
    <div className="lg:h-[90vh] sm:h-[95vh] xs:h-[100vh] min-h-[700px] max-h-[1000px] container">
      <div className="absolute lg:top-0 xs:top-10 right-0 -z-20 overflow-hidden">
        <img
          src="./images/hero.png"
          alt="Your Image"
          className="max-w-[1450px] lg:w-full xs:w-fit lg:h-[1450px] xs:h-[105vh]"
        />
        <div
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0) 66.55%, rgba(0, 0, 0, 0.8) 85.63%), linear-gradient(219.74deg, rgba(0, 0, 0, 1) 9.06%, rgba(0, 0, 0, 0) 44.69%)'
          }}
        ></div>
      </div>
      <div className="text-white font-extrabold w-[1312px] max-w-full m-auto h-full flex justify-start items-center">
        <div className="flex flex-col gap-0">
          <div
            id="scroller"
            className="h-[65px] overflow-hidden mb-5 lg:mt-0 sm:mt-0 xs:mt-10"
          >
            <div id="container">
              <img
                src="/images/hero/HBO Max.svg"
                className="h-[60px] mb-2"
                alt={'HBO Max'}
              />
              <img
                src="/images/hero/Apple TV.svg"
                className="h-[60px] mb-2"
                alt={'Apple TV'}
              />
              <img
                src="/images/hero/Disney.svg"
                className="h-[60px] mb-2"
                alt={'Disney'}
              />
              <img
                src="/images/hero/Hot Star.svg"
                className="h-[60px] mb-2"
                alt={'Disney'}
              />
              <img
                src="/images/hero/Hulu.svg"
                className="h-[60px] mb-2"
                alt={'HBO Max'}
              />
              <img
                src="/images/hero/Netflix.svg"
                className="h-[60px] mb-2"
                alt={'Hulu'}
              />
              <img
                src="/images/hero/One.svg"
                className="h-[60px] mb-2"
                alt={'Netflix'}
              />
              <img
                src="/images/hero/Oneflix.svg"
                className="h-[60px] mb-2"
                alt={'One'}
              />
              <img
                src="/images/hero/Prime Video.svg"
                className="h-[60px] mb-2"
                alt={'Prime Video'}
              />
              <img
                src="/images/hero/ZEE.svg"
                className="h-[60px] mb-2"
                alt={'ZEE'}
              />
              <img
                src="/images/hero/HBO Max.svg"
                className="h-[60px] mb-2"
                alt={'HBO Max'}
              />
            </div>
          </div>
          <h1 className="max-w-[800px] mb-20 lg:text-h1 sm:text-xxl xs:text-xxl leading-[96px] sm:font-extrabold xs:font-extrabold ">
            Streaming Everything InOne
          </h1>
          <div>
            <div className="lg:h-[60px] sm:h-[60px] xs:h-[45px] lg:max-w-[322px] sm:max-w-[322px] xs:max-w-[220px] bg-[#F5F1F1] text-xs flex rounded-tr-sm rounded-tl-sm text-secondary font-medium lg:text-2xs sm:text-xxs xs:text-xxs">
              <p
                className={`flex-1 flex justify-center items-center cursor-pointer ${
                  tab === 'mobile' ? 'active-subscribe-tab' : ''
                }`}
                onClick={() => setTab('mobile')}
              >
                Mobile
              </p>
              <p
                className={`flex-1 flex justify-center items-center cursor-pointer ${
                  tab === 'email' ? 'active-subscribe-tab' : ''
                }`}
                onClick={() => setTab('email')}
              >
                Email
              </p>
            </div>
            {tab === 'mobile' && (
              <form
                onSubmit={(e) => handlePhoneSubmit(e)}
                className="lg:h-[157px] sm:h-[200px] xs:h-[200px] max-w-[686px] w-full bg-white text-secondary font-medium
                        flex flex-col gap-2 px-10 justify-center items-start rounded-br-sm rounded-bl-sm rounded-tr-sm lg:text-2xs sm:text-xxs xs:text-xxs"
              >
                <p className='text-xxs'>Country Code</p>
                <div className="flex lg:flex-row justify-center w-full items-center gap-4 text-xs font-normal sm:flex-col xs:flex-col">
                  <div className="flex gap-4 w-full">
                    <PhoneInput
                      defaultCountry="bd"
                      disableDialCodeAndPrefix={true}
                      showDisabledDialCodeAndPrefix
                      className={''}
                      inputClassName={''}
                      countries={[
                        ['Bangladesh', 'bd', '880'],
                        ['India', 'in', '91', '.....-.....'],
                        ['United States', 'us', '1', '(...) ...-....', 0]
                      ]}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                  </div>
                  <Button
                    placeholder={'Subscribe'}
                    type={'red'}
                    icon={<ImArrowUpRight2 />}
                    className="lg:w-[240px] sm:w-full xs:w-full lg:h-[60px] sm:h-[55px] xs:h-[55px] lg:text-2xs sm:text-xxs xs:text-xxs"
                  />
                </div>
              </form>
            )}

            {tab === 'email' && (
              <form
                onSubmit={(e) => handlePhoneSubmit(e)}
                className="lg:h-[157px] sm:h-[200px] xs:h-[200px] max-w-[686px] w-full bg-white text-secondary font-medium 
                        flex flex-col gap-2 px-10 justify-center items-start rounded-br-sm rounded-bl-sm rounded-tr-sm lg:text-2xs sm:text-xxs xs:text-xxs"
              >
                <p className='text-xxs'>Email</p>
                <div className="flex lg:flex-row justify-center w-full items-center gap-4 text-xs font-normal sm:flex-col xs:flex-col">
                  <div className="flex gap-4 w-full">
                    <input
                      type="email"
                      placeholder={'youremail@fakemail.com'}
                      className="lg:h-[60px] sm:h-[55px] xs:h-[55px] w-full px-6 flex justify-center items-center border-2 border-border rounded-xm placeholder-secondary
                               lg:text-xs sm:text-xxs xs:text-xxs"
                      value={email}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <Button
                    placeholder={'Subscribe'}
                    type={'red'}
                    icon={<ImArrowUpRight2 />}
                    className="lg:w-[240px] sm:w-full xs:w-full lg:h-[60px] sm:h-[55px] xs:h-[55px] lg:text-xs sm:text-xxs xs:text-xxs"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
