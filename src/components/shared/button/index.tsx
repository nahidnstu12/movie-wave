type ButtonStyles = {
  white: string;
  red: string;
  transparent: string;
};

const Button = ({
  placeholder,
  icon,
  action,
  type,
  className = '',
  iconPosition = 'end'
}: any) => {
  const styles: ButtonStyles = {
    white: `flex justify-center items-center gap-1 px-[28px] py-[18px] h-[60px] rounded-xm bg-white text-primary text-3xxs lg:text-2xs hover:text-primaryHover  ${className}`,
    red: `flex justify-center items-center gap-1 px-[28px] py-[23px] rounded-xm bg-primary text-white text-3xxs lg:text-2xs hover:bg-primaryHover focus:bg-primaryFocus cursor-pointer ${className}`,
    transparent: `flex justify-center items-center gap-1 px-[28px] py-[23px] h-[69px] rounded-xm text-3xxs lg:text-2xs border text-dark group-[.dark-variant]:text-white group-[.dark-variant]:border-white hover:group-[.dark-variant]:bg-[#EFEFEF] hover:group-[.dark-variant]:border-[#EFEFEF] hover:group-[.dark-variant]:text-body hover:bg-primaryHover hover:border-primaryHover hover:text-tertiary ${className}`
  };

  return (
    <button
      onClick={() => action}
      className={styles[type as keyof ButtonStyles]}
    >
      <span>{iconPosition === 'start' ? icon : null}</span> {placeholder}{' '}
      <span className={'ml-2'}>{iconPosition === 'end' ? icon : null}</span>
    </button>
  );
};

export default Button;
