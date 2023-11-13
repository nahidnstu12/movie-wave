import Button from '@/components/shared/button';
import { useState } from 'react';
import { ImArrowUpRight2 } from 'react-icons/im';
import { PhoneInput } from 'react-international-phone';

const Phonenumber = ({ setCb }: any) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(''); // Reset error message

    if (phone.length < 10) {
      setError('Phone number is required');
      return;
    } else if (!/^\+8801[3-9]\d{8}$/.test(phone)) {
      setError('Phone number is not valid');
      return;
    }

    // if (!error && phone) {
    if (phone) {
      console.log('data', phone);
      setCb(() => ({ type: 'next', step: 1 }));
    }
  };

  console.log('error', error);
  return (
    <div
      className={'p-[1px] rounded-sm w-[calc(100%-1px)] overflow-hidden'}
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
      }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" max-w-[864px] w-full bg-dark text-secondary font-medium
                        flex flex-col gap-2 p-10 justify-center items-start rounded-sm rounded-bl-sm rounded-tr-sm lg:text-xs sm:text-xxs xs:text-xxs"
      >
        <div className={'flex justify-between w-full'}>
          <p className={'text-white text-sm'}>Country Code</p>
          <p className={'text-white text-xxs'}>*required</p>
        </div>

        <div className="flex lg:flex-row justify-center w-full items-center gap-4 text-xs font-normal sm:flex-col xs:flex-col">
          <div className="flex gap-4 w-full">
            <PhoneInput
              defaultCountry="bd"
              disableDialCodeAndPrefix={true}
              showDisabledDialCodeAndPrefix
              className={'dark-container w-full'}
              inputClassName={'dark-input'}
              countries={[
                ['Bangladesh', 'bd', '880'],
                ['India', 'in', '91', '.....-.....'],
                ['United States', 'us', '1', '(...) ...-....', 0]
              ]}
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
          </div>
        </div>
        <Button
          placeholder={'Next'}
          type={'red'}
          icon={<ImArrowUpRight2 />}
          className="lg:w-[400px] sm:w-full xs:w-full lg:h-[56px] sm:h-[55px] xs:h-[55px] lg:text-xs sm:text-xxs xs:text-xxs mx-auto mt-9"
        />
      </form>
    </div>
  );
};

export default Phonenumber;