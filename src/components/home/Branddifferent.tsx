import Image  from "next/image";
import truckincon from "../../../public/images/truckicon.png";
import verifyicon from "../../../public/images/verifyicon.png";
import cardicon from "../../../public/images/cardicon.png";
import flowericon from "../../../public/images/flowericon.png";

export default function Navbar() {
    return (
        <div className="h-[355px] w-[1440px]">
            <h3 className="text-[24px] ml-[529px] mt-[60px] text-[#2A254B]">What makes our brand different</h3>
            <div className="flex justify-evenly relative top-[35px] h-[124px] w-[1340px] left-[50px]">
                <div className="h-[124px] w-[266px] gap-[16px]">
                    <div className="h-[24px] w-[24px]">
                        <Image src={truckincon} alt="truckicon" height={24} width={24} className="relative top-[4.5px] left-[1.5px]"></Image>
                        <div className="gap-[8px] ">
                            <p className="text-[20px] h-[20px] w-[280px] text-[#2A254B] mt-4">Next day as standard</p>
                            <p className="text-[16px]  h-[20px] w-[580px] mt-[10px] text-[#2A254B]">Order before 3pm and get your order<br /> the next day as standard</p>
                        </div>
                    </div>
                </div>
                <div className="h-[124px] w-[266px] gap-[16px]">
                    <div className="h-[24px] w-[24px]">
                        <Image src={verifyicon} alt="truckicon" height={24} width={24} className="relative top-[4.5px] left-[1.5px]"></Image>
                        <div className="gap-[8px] ">
                            <p className="text-[20px] h-[20px] w-[280px] text-[#2A254B] mt-4">Made by true artisans</p>
                            <p className="text-[16px]  h-[20px] w-[580px] mt-[10px] text-[#2A254B]">Handmade crafted goods made with
                               <br /> real passion and craftmanship</p>
                        </div>
                    </div>
                </div>
                <div className="h-[124px] w-[266px] gap-[16px]">
                    <div className="h-[24px] w-[24px]">
                        <Image src={cardicon} alt="truckicon" height={24} width={24} className="relative top-[4.5px] left-[1.5px]"></Image>
                        <div className="gap-[8px] ">
                            <p className="text-[20px] h-[20px] w-[280px] text-[#2A254B] mt-4">Unbeatable prices</p>
                            <p className="text-[16px]  h-[20px] w-[580px] mt-[10px] text-[#2A254B]">For our materials and quality you <br /> wont find better prices anywhere</p>
                        </div>
                    </div>
                </div>
                <div className="h-[124px] w-[266px] gap-[16px]">
                    <div className="h-[24px] w-[24px]">
                        <Image src={flowericon} alt="truckicon" height={24} width={24} className="relative top-[4.5px] left-[1.5px]"></Image>
                        <div className="gap-[8px] ">
                            <p className="text-[20px] h-[20px] w-[280px] text-[#2A254B] mt-4">Recycled packaging</p>
                            <p className="text-[16px]  h-[20px] w-[380px] mt-[10px] text-[#2A254B]">We use 100% recycled packaging to <br /> ensure our footprint is manageable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 