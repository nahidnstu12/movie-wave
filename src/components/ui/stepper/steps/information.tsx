import Button from '@/components/shared/button';
import CustomCheckbox from '@/components/shared/input/customCheckbox';
import CustomTextField from '@/components/shared/input/customTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { ImArrowUpRight2 } from 'react-icons/im';
import * as yup from 'yup';

const Information = ({ setCb }: any) => {
  const validationSchema = useMemo(() => {
    return yup.object().shape({
      fullname: yup.string().required('Fullname is required'),
      email: yup.string().email().required('Email is required'),
      username: yup.string().required('Username is required'),
      password: yup.string().required('Password is required'),
      confirm_password: yup.string().required('Confirm Password is required')
    });
  }, []);

  const { register, control, handleSubmit, reset, formState } = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema)
  });
  const { errors, isValid } = formState;

  const onSubmit = (data: any) => {
    console.log('information data', data);
    setCb(() => ({ type: 'finish', step: 3 }));
  };

  console.log('errors component', errors);
  return (
    <div
      className={'p-[1px] rounded-sm overflow-hidden'}
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto lg:max-w-[864px] w-full bg-body border border-[#D0D0D0] text-secondary font-medium
                        flex flex-col gap-2 px-4 py-6 lg:p-10 justify-center items-start rounded-sm rounded-bl-sm rounded-tr-sm lg:text-xs sm:text-xxs xs:text-xxs"
      >
        <CustomTextField
          register={register}
          id={'fullname'}
          placeholder={'Fullname'}
          type={'text'}
          levelText={'Type Full name'}
          isRequired
          errorInstance={errors}
          isValid={isValid}
        />
        <CustomTextField
          register={register}
          id={'email'}
          placeholder={'Enter your email address (ex: manikstk@gmail.com)'}
          type={'email'}
          levelText={'Email Address'}
          errorInstance={errors}
          isRequired
        />
        <CustomTextField
          register={register}
          id={'username'}
          placeholder={
            'Enter your unique username (ex: mhmanik02, mhasan1213, mahmud0222)'
          }
          type={'text'}
          levelText={'Username'}
          isRequired
          errorInstance={errors}
          isValid={isValid}
          helperComponent={<HelperUsernameComponent />}
        />
        <CustomTextField
          isRequired
          register={register}
          id={'password'}
          placeholder={'Password'}
          type={'password'}
          levelText={'Password'}
          errorInstance={errors}
          helperComponent={<HelperPasswordComponent />}
        />
        <CustomTextField
          isRequired
          register={register}
          id={'confirm_password'}
          placeholder={'Confirm Password'}
          type={'password'}
          levelText={'Confirm Password'}
          errorInstance={errors}
        />
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5  text-secondary">
          <p className="text-secondary text-3xs lg:text-sm">Device: </p>
          <div className="flex items-center">
            <CustomCheckbox
              register={register}
              id={'iPhone'}
              level={'iPhone'}
              errorInstance={errors}
            />
            <CustomCheckbox
              register={register}
              id={'android'}
              level={'Android'}
              errorInstance={errors}
              className={'ml-4'}
            />
            <CustomCheckbox
              register={register}
              id={'television'}
              level={'Television'}
              errorInstance={errors}
              className={'ml-4'}
            />
          </div>
        </div>

        <Button
          placeholder={'Complete'}
          type={'red'}
          icon={<ImArrowUpRight2 />}
          className="lg:w-[400px] sm:w-full xs:w-full lg:h-[56px] sm:h-[55px] xs:h-[55px] lg:text-2xs sm:text-3xxs xs:text-3xxs mx-auto mt-9"
        />
      </form>
    </div>
  );
};

const HelperUsernameComponent = () => {
  const usernames = ['manikstk23', 'manik_stk', 'manik_23'];
  return (
    <div className={'text-secondary'}>
      <p className="text-[14px]">Available Username</p>
      <div className="flex flex-wrap gap-1 mt-3">
        {usernames.map((item: any) => (
          <div
            key={item}
            className={'bg-[#27ae6033] px-3 py-1 rounded-sm text-xxs'}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const HelperPasswordComponent = () => {
  const suggestions = [
    '1 uppercase letter',
    '1 lowercase letter',
    '1 number',
    'at least 6 numbers'
  ];
  return (
    <div className={'text-secondary'}>
      <div className="inline-flex lg:flex flex-col lg:flex-row gap-[6px] lg:gap-2 flex-wrap">
        {suggestions.map((item: any) => (
          <div
            key={item}
            className={
              'bg-[#DFEFD4] px-3 py-1 rounded-sm text-2xxxs lg:text-xxs'
            }
          >
            <img
              className={'mr-1 w-4 h-4 inline'}
              src={'images/icons/check-circle-light.svg'}
              alt={'valid'}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
