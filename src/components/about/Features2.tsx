import Image from "next/image";
import Features2image from "../../../public/images/Features2image.png"

export default function Features2() {
    return (
        <div className="h-[603px] w-[1440px] flex ">
            <Image src={Features2image} alt="eatures2image" height={603} width={720}></Image>
            <div className="h-[603px] w-[720px] bg-[#F9F9F9]">
                <div className="[Top Content] h-[225px]  w-[536px] flex flex-col ml-[84px] mt-[72px] gap-[25px]">
                    <p className="text-[#2A254B] text-[24px]">Our service isn&rsquo;t just personal, it&rsquo;s actually hyper personally exquisite</p>
                    <p className="text-[#2a254b]">When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.<br /><span className="relative top-[25px]">Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design, so our Chelsea boutique became the hotbed for the London interior design community.</span></p>
                </div>
            </div>
        </div>
    );
}