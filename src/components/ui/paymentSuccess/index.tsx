import CheckoutInput from "@/components/shared/checkoutInput"
import CheckoutBtn from "@/components/shared/checkoutBtn"
import CheckoutCard from "@/components/shared/checkoutCard";
import Button from "@/components/shared/button";
import { ImArrowUpRight2 } from 'react-icons/im';
import { TbFileDownload } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'
import { BsPlay } from 'react-icons/bs'

const PaymentSuccess = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="p-[1px] rounded-sm w-[calc(100%-1px)] overflow-hidden"
                style={{backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1))'}}>
                <div className="bg-dark w-full h-full rounded-sm">
                    <div className="flex flex-row w-full h-full">
                        <div className="w-[40%] flex flex-col justify-center items-center"> 
                            <div className="w-[79%] flex flex-col justify-center items-center">
                                <img src="./images/checkout/payment_success.svg" className="w-[290px] mx-4 mb-4"/>
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-white font-[600] text-xl mb-4">Payment Success!</h1>
                                    <p className="text-xs text-[#FFF] font-[400] text-center opacity-80 leading-8">
                                        Thank you for your order. We appreciate your trust in us and are excited to serve you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[1px]"
                            style={{background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}}></div>
                        <div className="w-[60%] h-full p-12 flex flex-col gap-4"> 
                            <div className="flex justify-between items-center border border-white px-7 py-6 rounded-xm">
                                <div>
                                    <h3 className="flex gap-2 text-xs text-white font-[400] mb-5"><img src="./images/checkout/flag-icon.svg" />Solo Yearly Package</h3>
                                    <p className="text-xxs text-white font-[400] px-6 py-2 rounded-xl bg-[#2b2a2a] inline">1 Device Stream At a Time</p>
                                </div>
                                <div>
                                    <h1 className="text-xl text-white font-[500]">৳ 588 <span className="text-xxxs">/ Yearly</span></h1>    
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 w-full">
                                    <CheckoutInput label={'Full Name'} data={'Mahmudul Hasan Manik'}/>
                                    <CheckoutInput label={'Mobile'} data={'+8801906 368989'}/>
                                </div>
                                <CheckoutInput label={'Email'} data={'mahmudulhasanstk@gmail.com'}/>
                                <div className="flex flex-row gap-4 w-full">
                                    <CheckoutInput label={'Transaction ID'} data={'845kt253'}/>
                                    <CheckoutInput label={'Expiry Date'} data={'27 November, 2023'}/>
                                </div>
                            </div>
                            <div className="h-[1px]"  style={{background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}}></div>
                            <div className="flex flex-col gap-4">
                                <CheckoutInput 
                                    label={'Server Link'} 
                                    data={'http://unknown.tv'} 
                                    color={'text-[#27AE60]'} 
                                    button={<CheckoutBtn text={'You can log in using this link'}
                                    icon={<ImArrowUpRight2 size={16} />}
                                />}/>
                                <div className="flex flex-row gap-4">
                                    <CheckoutInput label={'User Name'} data={'manikstk'} color={'text-[#27AE60]'}/>
                                    <CheckoutInput label={'Password'} data={'manik@stk2896'} color={'text-[#27AE60]'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex gap-7">
                    <CheckoutCard image={'./images/checkout/card-1.svg'} text={'Download our Mobile App using below button.'} button={<Button 
                        placeholder={'Download APK File'} 
                        type={'red'}
                        className={'h-[58px]'} 
                        iconPosition={"start"}
                        icon={<TbFileDownload size={27}/>}
                    />} />
                    <CheckoutCard image={'./images/checkout/card-2.png'} text={'Download our TV App using below button.'} button={<Button 
                        placeholder={'Download TV App'} 
                        type={'red'}
                        className={'h-[58px]'} 
                        iconPosition={"start"}
                        icon={<TbFileDownload size={27} />}
                    />} />
                    <CheckoutCard image={'./images/checkout/card-3.svg'} text={'Get our Customer Instant Support'} button={<Button 
                        placeholder={'Get Instant Support'} 
                        type={'transparent'}
                        className={'h-[58px] bg-dark text-white border-none'} 
                        iconPosition={"start"}
                        icon={<img src="./images/checkout/insta-icon.svg" className="mr-1" />}
                    />} />
                </div>
                <div className="text-white flex flex-row gap-4 justify-start items-center bg-[#1c1b1b] w-[416px] p-5 rounded-full mt-5 mb-14">
                    <div className="w-[60px]">
                        <div className="w-[60px] h-[60px] bg-primary rounded-full flex justify-center items-center">
                            <IoClose size={45} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-sm landing-8 font-[500]">
                            Don't Download <br/> 
                            App from <img src="./images/checkout/playstore-icon.svg" className="inline mx-2" /> Playstore
                        </h1>
                    </div>
                </div>
                <div className="h-[308px] w-full p-20  border border-[#717070] rounded-lg flex justify-between items-center"
                    style={{background: 'linear-gradient(140deg, rgba(255, 255, 255, .17), rgba(255, 255, 255, .07), rgba(255, 255, 255, 0))'}}>
                    <div className="flex gap-10 justify-center items-center max-w-[750px]">
                        <img src="./images/checkout/youtube-icon.svg" />
                        <h1 className="text-white text-xxl font-[600] leading-[60px]">Checkout our Must Watch Video Tutorial</h1>
                    </div>
                    <Button placeholder={'Watch Tutorial Now'} icon={<BsPlay size={40} />} iconPosition={'start'} type={'red'} />
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess
