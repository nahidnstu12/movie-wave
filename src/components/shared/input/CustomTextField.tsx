import { getErrorObject } from '@/utils/helpers';

const CustomTextField = ({
  register,
  type,
  levelText,
  isRequired,
  placeholder,
  id,
  errorInstance,
  isValid,
  helperComponent
}: any) => {
  let errorObj = getErrorObject(id, errorInstance);
  console.log('error', errorObj, isValid);
  return (
    <>
      <div className={'flex justify-between w-full'}>
        <p className={'text-white text-sm'}>{levelText}</p>
        {isRequired && <p className={'text-white text-xxs'}>*required</p>}
      </div>
      <div className="flex lg:flex-row justify-center w-full items-center gap-4 text-xs font-normal sm:flex-col xs:flex-col mt-3 mb-6">
        <div className="flex gap-4 w-full flex-col relative">
          <input
            {...register(id)}
            type={type}
            placeholder={placeholder}
            className={`lg:h-[60px] sm:h-[55px] xs:h-[55px] w-full px-6 flex justify-center items-center border-border rounded-xm placeholder-secondary bg-transparent border  text-white
                               lg:text-xs sm:text-xxs xs:text-xxs  ${
                                 errorObj
                                   ? 'border-primary'
                                   : 'border-[#f5f1f180]'
                               }`}
          />
          {!errorObj ? (
            <div>
              <img
                className={'absolute right-3 top-4'}
                src={'images/icons/success-circle.svg'}
                alt={'error'}
              />
            </div>
          ) : (
            ''
          )}

          {errorObj ? (
            <div className="text-white text-xxs">
              <img
                className={'inline'}
                src={'images/icons/error-circle.svg'}
                alt={'error'}
              />{' '}
              {errorObj?.message}
            </div>
          ) : (
            ''
          )}
          {helperComponent && <div>{helperComponent}</div>}
        </div>
      </div>
    </>
  );
};
export default CustomTextField;
