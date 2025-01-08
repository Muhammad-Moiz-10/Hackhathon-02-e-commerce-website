import Image from "next/image";
import truckincon from "../../../public/images/truckicon.png";
import verifyicon from "../../../public/images/verifyicon.png";
import cardicon from "../../../public/images/cardicon.png";
import flowericon from "../../../public/images/flowericon.png";

export default function Branddifferentabout() {
    return (
        <div className="h-[476px] w-[1440px]">
            <p className="text-[24px] text-[#2A254B] mt-[80px] ml-[529px]">What makes our brand different</p>
            <div className="w-[1280px] h-[244px] flex ml-[80px] mt-[40px]">
                <div className="h-[244px] w-[305px] bg-[#F9F9F9] flex justify-center items-center">
                    <div className="h-[148px] w-[209px] flex-col flex gap-[12px]">
                        <div className="h-[24px] w-[24px]">
                            <Image src={truckincon} alt="icon" height={16.5} width={21}></Image>
                        </div>
                        <p className="text-[20px] text-[#2A254B]">Next day as standard</p>
                        <p className="text-[#2A254B]">Order before 3pm and get your order the next day as standard</p>
                    </div>
                </div>
                <div className="h-[244px] w-[305px] bg-[#F9F9F9] flex justify-center items-center ml-[22px]">
                    <div className="h-[148px] w-[209px] flex-col flex gap-[12px]">
                        <div className="h-[24px] w-[24px]">
                            <Image src={verifyicon} alt="icon" height={16.5} width={21}></Image>
                        </div>
                        <p className="text-[20px] text-[#2A254B]">Made by true artisans</p>
                        <p className="text-[#2A254B]">Handmade crafted goods made with real passion and craftmanship</p>
                    </div>
                </div>
                <div className="h-[244px] w-[305px] bg-[#F9F9F9] flex justify-center items-center ml-[22px]">
                    <div className="h-[148px] w-[209px] flex-col flex gap-[12px]">
                        <div className="h-[24px] w-[24px]">
                            <Image src={cardicon} alt="icon" height={16.5} width={21}></Image>
                        </div>
                        <p className="text-[20px] text-[#2A254B]">Unbeatable prices</p>
                        <p className="text-[#2A254B]">For our materials and quality you won&rsquo;t
                            t find better prices anywhere</p>
                    </div>
                </div>
                <div className="h-[244px] w-[305px] bg-[#F9F9F9] flex justify-center items-center ml-[22px]">
                    <div className="h-[148px] w-[209px] flex-col flex gap-[12px]">
                        <div className="h-[24px] w-[24px]">
                            <Image src={flowericon} alt="icon" height={16.5} width={21}></Image>
                        </div>
                        <p className="text-[20px] text-[#2A254B]">Recycled packaging</p>
                        <p className="text-[#2A254B]">We use 100% recycled to ensure our footprint is more manageable</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 