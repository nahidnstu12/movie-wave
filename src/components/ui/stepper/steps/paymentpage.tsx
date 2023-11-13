import Button from '@/components/shared/button';
import Card from '@/components/shared/card';
import CustomCheckbox from '@/components/shared/input/CustomCheckbox';
import CustomTextField from '@/components/shared/input/CustomTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { ImArrowUpRight2 } from 'react-icons/im';
import * as yup from 'yup';

export default function Payment({ setCb }: any) {
  const validationSchema = useMemo(() => {
    return yup.object().shape({
      bkash_number: yup.string().required('Bkash number is required')
    });
  }, []);

  const { register, control, handleSubmit, reset, formState } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });

  const { errors, isValid } = formState;
  const onSubmit = (data: any) => {
    console.log('data', data);
    setCb(() => ({ type: 'next', step: 2 }));
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Card
        variant="transparent-variant"
        className="group-[.transparent-variant]:bg-transparent p-0 text-white border border-gray"
      >
        <div className="flex py-8 px-10 items-center">
          <img src="/images/solo.svg" alt="" />
          <h2 className="text-[28px] ml-3 -tracking-[1.12px]">
            Solo yearly package
          </h2>
          <div className="rounded-xxl py-2 px-5 ml-3 text-xxs bg-white/10 tracking-normal">
            1 Device Stream At a Time
          </div>
          <div className="ml-auto">
            <span className="text-xl">
              ৳ 588<sub className="text-xxxs tracking-normal">/MONTH</sub>
            </span>{' '}
          </div>
        </div>
      </Card>
      <div
        className={'mt-8 p-[1px] rounded-sm w-[calc(100%-1px)] overflow-hidden'}
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
        }}
      >
        <div className="rounded-sm p-10 w-full bg-dark text-white">
          <div className="flex py-8 px-10 items-center">
            <img src="/images/checkout/bkash.svg" alt="" />
            <h2 className="text-lg ml-3 tracking-normal">payment process</h2>
            <div className="rounded-xxl p-4 pr-[39px] ml-auto text-xxs bg-white/10 tracking-normal flex items-center max-w-[262px]">
              <img src="/images/checkout/check-shield.svg" alt="" />
              <span className="ml-2 text-xs tracking-normal max-w-[151px]">
                7 Days Money Back Guarantee
              </span>
            </div>
          </div>
          <div className="px-10">
            <div className="flex flex-col gap-5 justify-center">
              <div className="flex gap-3 items-center">
                <div className="rounded-full w-[22px] h-[22px] text-[14px] bg-primary flex items-center justify-center">
                  1
                </div>
                <div className="text-xs flex ">
                  Use
                  <span>
                    <img
                      src="/images/checkout/taka.svg"
                      alt="taka"
                      className={'mx-1'}
                    />
                  </span>{' '}
                  <b className={'mr-1'}>Send money</b>from your bkash app
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="rounded-full w-[22px] h-[22px] text-[14px] bg-primary flex items-center justify-center">
                  2
                </div>
                <div className="text-xs flex">
                  Copy & enter this number “<b>01967889988</b>”{' '}
                  <span className="w-5 ml-1">
                    <img src="/images/checkout/copy.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="rounded-full w-[22px] h-[22px] text-[14px] bg-primary flex items-center justify-center">
                  3
                </div>
                <div className="text-xs">
                  Enter <b>360</b> Taka
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="rounded-full w-[22px] h-[22px] text-[14px] bg-primary flex items-center justify-center">
                  4
                </div>
                <div className="text-xs">
                  Confirm <b>Send Money</b> and enter your <b>bKash Number</b>{' '}
                  below
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/images/checkout/question.svg" alt="" />
                <div className="text-xs underline">
                  {"Don't know how to make payment?"}
                </div>
              </div>
            </div>
            <div className="mt-[54px]">
              <div className="flex gap-3 items-center">
                <img src="/images/checkout/bkash.svg" alt="bkash" />
                <div className="text-sm">Your Bkash Number</div>
                <div className="ml-auto text-xxs">*required</div>
              </div>
              <div className="mt-3 relative">
                <CustomTextField
                  register={register}
                  id={'bkash_number'}
                  placeholder={'Enter your bKash number that you used..'}
                  type={'text'}
                  levelText={''}
                  // isRequired
                  errorInstance={errors}
                  isValid={isValid}
                />
              </div>
              <div className="mt-[29px] flex items-center">
                <CustomCheckbox
                  register={register}
                  id={'is_same_as_bkash'}
                  level={'Bkash number same as your mobile number?'}
                  errorInstance={errors}
                />
                {/*<input*/}
                {/*  {...register('is_same_as_bkash')}*/}
                {/*  name={'is_same_as_bkash'}*/}
                {/*  type="checkbox"*/}
                {/*  className='checked:bg-checkmark bg-center bg-no-repeat appearance-none before:content-[" "] before:block before:w-6 before:h-6 before:border before:border-2 before:border-white before:rounded'*/}
                {/*/>*/}
                {/*<span className="text-xxs -tracking-[0.56px] ml-4">*/}
                {/*  Bkash number same as your mobile number?*/}
                {/*</span>*/}
              </div>
            </div>
            <div className="mt-9 mb-10 flex justify-center tracking-[0.64px] leading-[110%]">
              <Button
                className="w-full lg:text-[18px] max-w-[416px]"
                placeholder={'Confirm Payment'}
                type={'red'}
                icon={<ImArrowUpRight2 />}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
