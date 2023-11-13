const MobileNav = () => {
  return (
    <nav className="h-[75px] w-full xs:block sm:hidden lg:hidden fixed z-50 bottom-0 bg-secondary text-white">
      <ul className="flex flex-row justify-between items-center w-full h-full px-10">
        <li className="flex flex-col justify-center items-center">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 16.0007H14.5M9.5177 1.76473L2.73539 7.03986C2.28202 7.39248 2.05534 7.56879 1.89203 7.78959C1.74737 7.98518 1.6396 8.20552 1.57403 8.43978C1.5 8.70425 1.5 8.99143 1.5 9.56578V16.8007C1.5 17.9208 1.5 18.4809 1.71799 18.9087C1.90973 19.285 2.21569 19.591 2.59202 19.7827C3.01984 20.0007 3.57989 20.0007 4.7 20.0007H16.3C17.4201 20.0007 17.9802 20.0007 18.408 19.7827C18.7843 19.591 19.0903 19.285 19.282 18.9087C19.5 18.4809 19.5 17.9208 19.5 16.8007V9.56578C19.5 8.99143 19.5 8.70425 19.426 8.43978C19.3604 8.20552 19.2526 7.98518 19.108 7.78959C18.9447 7.56879 18.718 7.39248 18.2646 7.03986L11.4823 1.76473C11.131 1.49148 10.9553 1.35485 10.7613 1.30233C10.5902 1.25599 10.4098 1.25599 10.2387 1.30233C10.0447 1.35485 9.86902 1.49148 9.5177 1.76473Z"
              stroke="#E50914"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-tiny">Home</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.59 8C8.8251 7.33167 9.28915 6.76811 9.89995 6.40913C10.5108 6.05016 11.2289 5.91894 11.9272 6.03871C12.6255 6.15849 13.2588 6.52152 13.7151 7.06353C14.1713 7.60553 14.4211 8.29152 14.42 9C14.42 11 11.42 12 11.42 12M11.5 16H11.51M21.5 11C21.5 16.5228 17.0228 21 11.5 21C5.97715 21 1.5 16.5228 1.5 11C1.5 5.47715 5.97715 1 11.5 1C17.0228 1 21.5 5.47715 21.5 11Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-tiny">Tutorial</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 10.9998L11.5 14.9998M11.5 14.9998L15.5 10.9998M11.5 14.9998V5.79982C11.5 4.40911 11.5 3.71376 10.9495 2.93521C10.5837 2.41793 9.53058 1.7795 8.90278 1.69444C7.95789 1.56642 7.59907 1.7536 6.88143 2.12796C3.68333 3.79625 1.5 7.14306 1.5 10.9998C1.5 16.5227 5.97715 20.9998 11.5 20.9998C17.0228 20.9998 21.5 16.5227 21.5 10.9998C21.5 7.29841 19.489 4.06669 16.5 2.33764"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-tiny">Download</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8163 18.4384C5.42462 17.0052 6.84492 16 8.5 16H14.5C16.1551 16 17.5754 17.0052 18.1837 18.4384M15.5 8.5C15.5 10.7091 13.7091 12.5 11.5 12.5C9.29086 12.5 7.5 10.7091 7.5 8.5C7.5 6.29086 9.29086 4.5 11.5 4.5C13.7091 4.5 15.5 6.29086 15.5 8.5ZM21.5 11C21.5 16.5228 17.0228 21 11.5 21C5.97715 21 1.5 16.5228 1.5 11C1.5 5.47715 5.97715 1 11.5 1C17.0228 1 21.5 5.47715 21.5 11Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-tiny"> Account </p>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
