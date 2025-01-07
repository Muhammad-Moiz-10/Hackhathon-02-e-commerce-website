import Image from "next/image";
import aboutfeaturesimage from "../../../public/images/aboutfeaturesimage.png"

export default function Features() {
    return (
        <div className="h-[598px] w-[1440px] flex justify-center items-center gap-[16px]">
               <div className="h-[478px] w-[634px] bg-[#2A254B]">
                <div className="h-[99px] w-[495px] flex flex-col gap-[12px] mt-[64px] ml-[64px]">
                    <p className="text-[32px] text-white">It started with a small idea</p>
                    <p className="text-white text-[18px] ">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                </div>
                <button className="mt-[205px] h-[56px] w-[170px] ml-[64px] bg-[#494565] flex justify-center items-center text-white">View collection</button>
               </div>
               <Image src={aboutfeaturesimage} alt="image of products" height={478} width={630}></Image>
        </div>
    );
}