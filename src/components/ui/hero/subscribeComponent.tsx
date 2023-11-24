import Button from '@/components/shared/button';
import { useState } from 'react';
import { ImArrowUpRight2 } from 'react-icons/im';
import { PhoneInput } from 'react-international-phone';

export const SubscribeComponent = () => {
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
  return (
    <div>
      <div className="lg:h-[60px] sm:h-[60px] xs:h-[45px] lg:max-w-[322px] sm:max-w-[322px] xs:max-w-[220px] bg-[#F5F1F1] text-xs flex rounded-tr-sm rounded-tl-sm text-secondary font-medium lg:text-2xs sm:text-xxs xs:text-xxs">
        <p
          className={`flex-1 flex justify-center items-center cursor-pointer text-body ${
            tab === 'mobile' ? 'active-subscribe-tab' : ''
          }`}
          onClick={() => setTab('mobile')}
        >
          Mobile
        </p>
        <p
          className={`flex-1 flex justify-center items-center cursor-pointer text-body ${
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
          className="lg:h-[157px] sm:h-[200px] xs:h-[200px] max-w-[686px] w-full bg-white text-dark font-medium
                        flex flex-col gap-2 px-10 justify-center items-start rounded-br-sm rounded-bl-sm rounded-tr-sm lg:text-2xs sm:text-xxs xs:text-xxs"
        >
          <p className="text-xxs text-dark font-medium">Country Code</p>
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
              className="font-semibold lg:w-[240px] sm:w-full xs:w-full lg:h-[60px] sm:h-[55px] xs:h-[55px] lg:text-2xs sm:text-xxs xs:text-xxs"
            />
          </div>
        </form>
      )}

      {tab === 'email' && (
        <form
          onSubmit={(e) => handlePhoneSubmit(e)}
          className="lg:h-[157px] sm:h-[200px] xs:h-[200px] max-w-[686px] w-full bg-white text-dark 
                        flex flex-col gap-2 px-10 justify-center items-start rounded-br-sm rounded-bl-sm rounded-tr-sm lg:text-2xs sm:text-xxs xs:text-xxs"
        >
          <p className="text-xxs">Email</p>
          <div className="flex lg:flex-row justify-center w-full items-center gap-4 text-xs font-normal sm:flex-col xs:flex-col">
            <div className="flex gap-4 w-full">
              <input
                type="email"
                placeholder={'youremail@fakemail.com'}
                className="lg:h-[60px] sm:h-[55px] xs:h-[55px] w-full px-6 flex justify-center items-center border-2 border-border rounded-xm placeholder-dark
                               lg:text-xs sm:text-xxs xs:text-xxs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
    </div>
  );
};
