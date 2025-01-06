import Image from "next/image";
import searchicon from "../../../public/images/searchicon.png";
import carticon from "../../../public/images/carticon.png";
import profileicon from "../../../public/images/profileicon.png";

export default function Navbar() {
  return (
    <div className="h-[132px] w-[1440px]">
      <div className="relative h-[16px] w-[16px] top-[26px] left-[26px]">
        <Image src={searchicon} alt="searchicon" height={16} width={16} quality={100}></Image>
      </div>
      <p className="relative left-[687px] top[20px] font-normal text-[24px] h-[30px] w-[65px]">Avion</p>
      <div className="relative h-[16px] w-[16px] top-[-16px] left-[1364px]">
        <Image src={carticon} alt="searchicon" height={16} width={16} quality={100}></Image>
      </div>
      <div className="relative h-[16px] w-[16px] top-[-32px] left-[1396px]">
        <Image src={profileicon} alt="searchicon" height={16} width={16} quality={100}></Image>
      </div>
      <div className=" w-[1386px] relative left-[28px] border-[1px] bg-[rgb(178,123,250)]"></div>
      <div className="w-[685px] h-[22px] relative top-[10px] left-[382px] gap-[44px] flex items-center justify-evenly">
        <p className="text-[#726E8D]">Plant pots</p>
        <p className="text-[#726E8D]">Ceramics</p>
        <p className="text-[#726E8D]">Tables</p>
        <p className="text-[#726E8D]">Chairs</p>
        <p className="text-[#726E8D]">Grocery</p>
        <p className="text-[#726E8D]">TableWave</p>
        <p className="text-[#726E8D]">Cutlery</p>
      </div>
    </div>
  );
}
