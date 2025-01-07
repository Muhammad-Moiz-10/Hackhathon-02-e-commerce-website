import Image from "next/image";
import Link from "next/link";
import searchicon  from "../../../public/images/searchicon.png";
import profileicon from "../../../public/images/profileicon.png";
import carticon from "../../../public/images/carticon.png"

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
                <div className="h-[16px] w-[80px] ml-[45px] mt-[30px] flex gap-[16px]">
                     <Image src={searchicon} alt="icon" height={13.5} width={13.5}></Image>
                     <Image src={carticon} alt="icon" height={13.5} width={13.5}></Image>
                     <Image src={profileicon} alt="icon" height={13.5} width={13.5}></Image>
                </div>
            </div>
            <div className="bg-[#f9f9f9] h-[64px] w-full flex justify-center items-center">
              <div className="h-[22px] w-[803px] flex gap-[44px]">
                <p className="text-[#726E8D]">All products</p>
                <p className="text-[#726E8D]">Plant pots</p>
                <p className="text-[#726E8D]">Ceramics</p>
                <p className="text-[#726E8D]">Tables</p>
                <p className="text-[#726E8D]">Chairs</p>
                <p className="text-[#726E8D]">Crockery</p>
                <p className="text-[#726E8D]">Tableware</p>
                <p className="text-[#726E8D]">Cutlery</p>
              </div>
            </div>
        </div>
    );
}
