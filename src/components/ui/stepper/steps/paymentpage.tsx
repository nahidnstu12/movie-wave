import Button from '@/components/shared/button';
import Card from '@/components/shared/card';
import CustomCheckbox from '@/components/shared/input/customCheckbox';
import CustomTextField from '@/components/shared/input/customTextField';
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
        className="p-0 text-secondary shadow-none border border-[#D0D0D0]"
      >
        <div className="flex flex-col lg:flex-row py-6 lg:py-6 px-6 lg:px-10 items-start lg:items-center">
          <div className="flex mb-3 lg:mb-3">
            <img src="/images/solo.svg" alt="" />
            <h2 className="text-[20px] lg:text-[28px] ml-3 -tracking-[1.12px]">
              Solo yearly package
            </h2>
          </div>
          <div className="rounded-xxl py-2 px-5 ml-3 text-[14px] lg:text-xxs bg-secondary/10 tracking-normal mb-4 lg:mb-0">
            1 Device Stream At a Time
          </div>
          <div className="lg:ml-auto">
            <span className="text-md lg:text-xl">
              ৳ 588<sub className="text-xxxs tracking-normal ml-1">/Yearly</sub>
            </span>
          </div>
        </div>
      </Card>
      <div
        className={
          'mt-4 lg:mt-8 p-[1px] rounded-sm w-[calc(100%-1px)] overflow-hidden'
        }
      >
        <div className="rounded-sm p-4 lg:p-10 w-full bg-body text-secondary border border-[#D0D0D0]">
          <div className="flex flex-col lg:flex-row gap-4 py-3 lg:py-0 lg:px-0 items-start lg:items-center ">
            <div className="flex">
              <img src="/images/checkout/bkash-light.svg" alt="" />
              <h2 className="text-3sm lg:text-md ml-3 tracking-normal">
                Payment Process:
              </h2>
            </div>
            <div className="rounded-xxl py-3 px-2 lg:pr-[39px] lg:ml-auto text-xxs bg-secondary/10 tracking-normal flex items-center max-w-[262px]">
              <img
                src="/images/checkout/check-shield.svg"
                alt=""
                className={'w-8 h-8 lg:w-12 lg:h-12'}
              />
              <span className="ml-2 text-[14px] font-semibold lg:text-2xs tracking-normal max-w-[151px]">
                7 Days Money Back Guarantee
              </span>
            </div>
          </div>
          <div className="px-0  pt-5">
            <div className="flex flex-col gap-3 justify-center">
              <div className="flex gap-3 items-center">
                <div className="rounded-full min-w-[22px] min-h-[22px] text-[14px] bg-primary flex items-center justify-center text-body">
                  1
                </div>
                <div className="text-4xxs lg:text-xs">
                  <div className="inline">
                    Use
                    <span>
                      <img
                        src="/images/checkout/taka.svg"
                        alt="taka"
                        className={'mx-1 inline'}
                      />
                    </span>
                    <b className={'mr-1 ml-1'}>Send money</b>
                  </div>
                  from your bkash app
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="rounded-full min-w-[22px] min-h-[22px] text-[14px] bg-primary flex items-center justify-center text-body">
                  2
                </div>
                <div className="text-4xxs lg:text-xs flex gap-3 lg:gap-1 items-center">
                  <span className="flex flex-col lg:flex-row">
                    <span>Copy & enter this number</span>{' '}
                    <span>
                      “<b>01967889988</b>”
                    </span>
                  </span>
                  <span className="w-5 ml-1">
                    <img src="/images/checkout/copy.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="rounded-full min-w-[22px] min-h-[22px] text-[14px] bg-primary flex items-center justify-center text-body">
                  3
                </div>
                <div className="text-4xxs lg:text-xs">
                  Enter <b>360</b> Taka
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="rounded-full min-w-[22px] min-h-[22px] text-[14px] bg-primary flex items-center justify-center text-body">
                  4
                </div>
                <div className="text-4xxs lg:text-xs">
                  Confirm <b>Send Money</b> and enter your <b>bKash Number</b>{' '}
                  below
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/images/checkout/question-light.svg" alt="" />
                <div className="text-4xxs  underline">
                  {"Don't know how to make payment?"}
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-[54px]">
              <div className="flex flex-wrap lg:flex-nowrap gap-3 items-center">
                <img src="/images/checkout/bkash-light.svg" alt="bkash" />
                <div className="text-2xs lg:text-3sm ">Your Bkash Number</div>
                <div className="ml-auto text-xxs text-secondary2">
                  *required
                </div>
              </div>
              <div className="mt-3 relative">
                <CustomTextField
                  register={register}
                  id={'bkash_number'}
                  placeholder={'Enter your bKash number that you used'}
                  type={'text'}
                  levelText={''}
                  // isRequired
                  errorInstance={errors}
                  isValid={isValid}
                />
              </div>
              <div className="mt-5 lg:mt-7 flex items-center">
                <CustomCheckbox
                  register={register}
                  id={'is_same_as_bkash'}
                  level={'Bkash number same as your mobile number?'}
                  errorInstance={errors}
                />
              </div>
            </div>
            <div className="mt-5 lg:mt-9 flex justify-center tracking-[0.64px] leading-[110%]">
              <Button
                // className="w-full text-3xxs lg:text-3sm max-w-[416px]"
                className="lg:w-[400px] sm:w-full xs:w-full lg:h-[56px] sm:h-[55px] xs:h-[55px] lg:text-xs sm:text-3xxs xs:text-3xxs mx-auto mt-4 lg:mt-9 font-semibold"
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
