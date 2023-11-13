const CheckoutCard = ({image, text, button}:any) => {
    return (
        <div className="p-10 border border-[#717070] rounded-lg flex-1 flex flex-col justify-center items-center py-10"
            style={{background: 'linear-gradient(to bottom, rgba(255, 255, 255, .17), rgba(255, 255, 255, 0))'}}>
            <img src={image} className="mt-6 mb-5"/>
            <p className="text-white font-[600] text-[28px] leading-9 text-center mt-4 mb-6">{text}</p>
            {button}
        </div>
    )
}

export default CheckoutCard;