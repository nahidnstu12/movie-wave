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
      <div className={'flex justify-between items-center w-full'}>
        <p className={'text-secondary text-4xs lg:text-3sm'}>{levelText}</p>
        {isRequired && (
          <p className={'text-secondary2 text-2xxxs lg:text-2xxs'}>*required</p>
        )}
      </div>
      <div className="flex lg:flex-row justify-center w-full items-center gap-4 text-xs font-normal sm:flex-col xs:flex-col mt-1 lg:mt-2 mb-3 lg:mb-4">
        <div className="flex gap-3 w-full flex-col relative">
          <input
            {...register(id)}
            type={type}
            placeholder={placeholder}
            className={`lg:h-[60px] sm:h-[55px] xs:h-[55px] w-full px-4 lg:px-6 flex justify-center items-center  rounded-xm placeholder-secondary2 bg-transparent border  text-secondary
                               lg:text-xs sm:text-2xxs xs:text-2xxs placeholder:w-56 lg:placeholder:w-full text-ellipsis  ${
                                 errorObj
                                   ? 'border-primary'
                                   : 'border-[#908F90]'
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
            <div className="text-secondary text-xxs">
              <img
                className={'inline'}
                src={'images/icons/error-circle-light.svg'}
                alt={'error'}
              />{' '}
              {errorObj?.message}
            </div>
          ) : null}
          {helperComponent && <div>{helperComponent}</div>}
        </div>
      </div>
    </>
  );
};
export default CustomTextField;
