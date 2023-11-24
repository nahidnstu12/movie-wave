export default function Quote() {
  return (
    <>
      <div className="flex gap-[56px] flex-col">
        <div className="flex gap-6 items-center">
            <img src="/images/offer/quote.svg" alt="" />
            <div className='text-xl text-white'>Client Says About Us</div>
        </div>
        <div className="text-white max-w-[532px]">
        Unbelievably precise choices are made, and having multiple accounts for all of us is a great advantage. Long trips have become simpler with the offline download capability, and I look forward to watching what new things they release every month.
        </div>
        <div className="flex gap-4 text-white max-w-[532px]">
            <img src="/images/offer/image1.png" className='h-[60px] w-[60px] rounded-full' alt="" />
            <div className="flex flex-col gap-4">
                <div className="text-sm">Shahtaj Monira Hashem</div>
                <div>Actress in Bangladesh</div>
            </div>
        </div>
      </div>
    </>
  );
}
