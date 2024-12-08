import Image from "next/image";
import rightimage from "../../../../public/images/RightImage.png"

export default function Navbar() {
    return (
        <div className="h-[355px] w-[1440px]">
            <h3 className="text-[24px] ml-[529px] mt-[60px] text-[#2A254B]">What makes our brand different</h3>
            <div className="flex justify-evenly relative top-[35px] h-[124px] w-[1340px] left-[50px]">
                <div className="h-[124px] w-[266px] gap-[16px] bg-blue-500">
                    
                </div>
                <div className="h-[124px] w-[266px] gap-[16px] bg-blue-500"></div>
                <div className="h-[124px] w-[266px] gap-[16px] bg-blue-500"></div>
                <div className="h-[124px] w-[266px] gap-[16px] bg-blue-500"></div>
            </div>
        </div>
    );
} 