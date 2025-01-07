import Image from "next/image";
import buspanelnavbar from "../../../public/images/buspanelnavbar.png";
import crosaboutpagepanelnav from "../../../public/images/crosaboutpagepanelnav.png";

export default function Navpanel() {
    return (
        <div className=" h-[41px] w-[1440px] bg-[#2A254B] flex items-center">
            <div className="[Frame 21] h-[19px] w-[412px] flex gap-[8px] ml-[516px]">
                <Image src={buspanelnavbar} alt="truckicon" height={16} width={16}></Image>
                <p className="text-white text-[14px]">Free delivery on all orders over £50 with code easter checkout</p>
            </div>
            <div className="h-[24px] w-[24px] flex justify-center items-center ml-[476px]">
                <Image src={crosaboutpagepanelnav} alt="cancelicon" height={16} width={16}></Image>
            </div>
        </div>
    );
}
