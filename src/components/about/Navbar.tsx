import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-[134px] w-[1440px] flex flex-col">
            <div className="h-[70px] w-full flex">
                <p className="text-[#22202E] text-[24px] mt-[21px] ml-[28px]">Avion</p>
                <div className="h-[22px] w-[220px] flex gap-[32px] mt-[24px] ml-[955px]">
                    <Link href={"#"} className="text-[#726E8D]">about us</Link>
                    <Link href={"#"} className="text-[#726E8D]">Contact</Link>
                    <Link href={"#"} className="text-[#726E8D]">Blog</Link>
                </div>
                <div className="h-[16px] w-[80px] ml-[45px] mt-[30px] flex gap-16px">
                     {/* <Image src={} alt="" height={} width={}></Image> */}
                     
                </div>
            </div>
            <div className="bg-gray-700 h-[64px] w-full"></div>
        </div>
    );
}
