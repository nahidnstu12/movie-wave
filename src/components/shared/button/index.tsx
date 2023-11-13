type ButtonStyles = {
  white: string;
  red: string;
  transparent: string;
};

const Button = ({ placeholder, icon, action, type, className = '', iconPosition='end'}: any) => {
  const styles: ButtonStyles = {
    white: `${className} flex justify-center items-center gap-1 px-[28px] py-[18px] h-[60px] rounded-xm bg-white text-primary text-xxs lg:text-2xs`,
    red: `${className} flex justify-center items-center gap-1 px-[32px] py-[23px] h-[69px] rounded-xm bg-primary text-white text-xxs lg:text-2xs`,
    transparent: `${className} flex justify-center items-center gap-1 px-[32px] py-[23px] h-[69px] rounded-xm text-xxs lg:text-2xs border text-dark group-[.dark-variant]:text-white group-[.dark-variant]:border-white `
  };

  return (
    <button
      onClick={() => action}
      className={styles[type as keyof ButtonStyles]}
    >
      {iconPosition === "start"? icon: null} {placeholder} {iconPosition === "end"? icon: null}
    </button>
  );
};

export default Button;
