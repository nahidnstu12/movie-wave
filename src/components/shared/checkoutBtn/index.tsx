const CheckoutBtn = ({icon, text}:any) => {
    return (
        <button className="bg-[#575656] h-[62px] w-[332px] rounded-xm text-xs flex justify-center items-center gap-2">{text} {icon}</button>
    )
}

export default CheckoutBtn