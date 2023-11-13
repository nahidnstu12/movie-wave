export default function Card({
  children,
  variant = 'primary-variant',
  className = ''
}: any) {
  return (
    <div className={`group ${variant}`}>
      <div
        className={` group-[.dark-variant]:text-white bg-white group-[.dark-variant]:bg-[#191919] shadow-md  rounded-sm ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
