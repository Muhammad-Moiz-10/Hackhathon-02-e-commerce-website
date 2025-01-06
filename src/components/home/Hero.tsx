import Image from "next/image";
import rightimage from "../../../public/images/RightImage.png"

export default function Navbar() {
  return (
    <div className="w-[1440px] h-[704px] flex">
      <div className="h-[584px] w-[1280px] bg-[#2A254B] relative left-[90px] top-[60px]">
        <div className=" w-[513px] h-[187px] relative top-[60px] left-[60px] gap-[41px]">
          <h2 className="text-[32px] text-white">The furniture brand for the future, with timeless designs</h2>
          <button className="text-white  bg-[#F9F9F926] h-[56px] w-[170px] relative top-[16px] right-[32px] bottom-[16px] left-[32px] gap-[10px]">View Collection</button>
          <p className="text-[18px] text-white relative top-[229px] ">A new era in eco friendly furniture with Avelon, the French luxury retail brand
            with nice fonts, tasteful colors and a beautiful way to display things digitally
            using modern web technologies.</p>
        </div>
      </div>

      <Image src={rightimage} alt="rightimage"className="relative top-[60px]  left-[-100px] h-[584px] w-[520px]"></Image>
    </div>
  );
} 