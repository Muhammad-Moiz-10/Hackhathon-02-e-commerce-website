import Image from "next/image";

export default function Pageheaders() {
    return (
        <div className="h-[277px] w-full flex">
           <p className="mt-[88px] ml-[128px] text-[36px] text-[#2A254B] w-[704px]">A brand built on the love of craftmanship,
           quality and outstanding customer service</p>
           <button className="bg-[#F9F9F9] h-[56px] w-[192px] mt-[88px] ml-[290px]">View our products</button>
        </div>
    );
}