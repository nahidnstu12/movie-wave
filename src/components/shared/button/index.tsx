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
    white: ` flex justify-center items-center gap-1 px-[28px] py-[18px] h-[60px] rounded-xm bg-white text-primary text-3xxs lg:text-2xs ${className}`,
    red: ` flex justify-center items-center gap-1 px-[32px] py-[23px] rounded-xm bg-primary text-white text-3xxs lg:text-2xs ${className}`,
    transparent: ` flex justify-center items-center gap-1 px-[32px] py-[23px] h-[69px] rounded-xm text-3xxs lg:text-2xs border text-dark group-[.dark-variant]:text-white group-[.dark-variant]:border-white ${className}`
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
