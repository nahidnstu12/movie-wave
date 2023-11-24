export default function Progress() {
  return (
    <div className="h-[100vh] w-[100vw] fixed top-0 left-0 flex justify-center items-center bg-secondary/90 z-50">
        <div className="p-10 lg:p-20 text-center bg-white rounded-xxl max-w-[864px] mx-5">
            <div className="mb-7 lg:mb-8 text-xl">We are creating your account!</div>
            <div className="text-xs">Please wait for a while to complete your account.</div>
            <div className="w-full h-5 bg-green/20 rounded-[18.5px] mt-10 lg:mt-16">
                <div className="h-full w-1/3 bg-green rounded-[18.5px]">
                </div>
            </div>
        </div>
    </div>
  )
}
