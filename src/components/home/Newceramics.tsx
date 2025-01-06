import Image from "next/image";
import Rightimage from "../../../public/images/RightImage.png"
import ceramicsdiv2 from "../../../public/images/ceramicsdiv2.png"
import ceramicsdiv3 from "../../../public/images/ceramicsdiv3.png"
import ceramicsdiv4 from "../../../public/images/ceramicsdiv4.png"

export default function Newceramics() {
    return (
        <div className="w-[1440px] h-[761px]">
            <p className="mt-[80px] ml-[80px] text-[32px]">New Ceramics</p>
            <div className="w-[1280px] h-[462px] mt-[17px] ml-[80px] flex justify-evenly">
                <div>
                    <Image src={Rightimage} alt="rightimage" className="h-[375px] w-[305px]" ></Image>
                    <div>
                        <p className="text-[20px] text-[#2A254B]">The Dandy chair</p>
                        <p className="text-[18px] text-[#2A254B]">£250</p>
                    </div>
                </div>
                <div>
                    <Image src={ceramicsdiv2} alt="rightimage" className="h-[375px] w-[305px]"></Image>
                    <div>
                        <p className="text-[20px] text-[#2A254B]">Rustic Vase Set</p>
                        <p className="text-[18px] text-[#2A254B]">£155</p>
                    </div>
                </div>
                <div>
                    <Image src={ceramicsdiv3} alt="rightimage" height={375} width={305}></Image>
                    <div>
                        <p className="text-[20px] text-[#2A254B]">The Silky Vase</p>
                        <p className="text-[18px] text-[#2A254B]">£125</p>
                    </div>
                </div>
                <div>
                    <Image src={ceramicsdiv4} alt="rightimage" height={375} width={305}></Image>
                    <div>
                        <p className="text-[20px] text-[#2A254B]">The Lucky Lamp</p>
                        <p className="text-[18px] text-[#2A254B]">£399</p>
                    </div>
                </div>
            </div>
            <div className="button w-[170px] h-[56px] mt-[14px] ml-[635px] flex justify-center items-center bg-[#F9F9F9]">
                <p>View Collection</p>
            </div>
        </div>
    );
} 