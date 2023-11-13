import { getErrorObject } from '@/utils/helpers';

const CustomCheckbox = ({
  register,
  id,
  className,
  level,
  errorInstance
}: any) => {
  let errorObj = getErrorObject(id, errorInstance);
  return (
    <>
      <input
        {...register(id)}
        name={id}
        type="checkbox"
        className={`checked:bg-checkmark bg-center bg-no-repeat appearance-none before:content-[" "] before:block before:w-6 before:h-6 before:border before:border-2 before:border-white before:rounded ${className}`}
      />
      <span className="text-xxs -tracking-[0.56px] ml-2">{level}</span>
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
    </>
  );
};

export default CustomCheckbox;
