import Image from "next/image";
import featuresdivimage from "../../../public/images/featuresdivimage.png"


export default function Features() {
    return (
        <div className="h-[603px] w-[1440px] flex">
            <div className="[Left content] h-[603px] w-[720px]">
                <div className="[text-div] h-[225px] w-[536px] ml-[84px] mt-[72px] flex flex-col gap-[25px]">
                    <p className="text-[24px] text-[#2A254B]">From a studio in London to a global brand with
                        over 400 outlets</p>
                    <p className="text-[16px] text-[#2A254B]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    <button className="text-center w-[150px] h-[56px] mt-[200px] bg-[#F9F9F9]  px-[32px] py-[16px]">get in touch</button>
                </div>
            </div>
            <Image src={featuresdivimage} alt="sofaimage" height={603} width={720}></Image>
        </div>
    );
} 