const CheckoutInput = ({label, data, color, button}:any) => {
    return (
        <div className="text-white p-4 border border-[#3e3c3c] rounded-xm w-full flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <p className="text-white text-xxs font-[400] opacity-70">{label}</p>
                <p className={`${color} text-xs font-[600]`}>{data}</p>
            </div>
            {button}
        </div>
    )
}

export default CheckoutInput
