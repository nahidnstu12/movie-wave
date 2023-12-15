export const ImageComponent = ({ resource }: any) => {
  return (
    <div className="relative w-auto">
      <div className="absolute bottom-4 left-4 max-w-[24px] lg:max-w-[48px]">
        <img src={resource.logo} alt="logo" />
      </div>
      <img
        className="w-auto max-h-[131px] lg:max-h-[262px] lg:h-auto"
        src={resource.main_image}
        alt="main_image"
      />
    </div>
  );
};
