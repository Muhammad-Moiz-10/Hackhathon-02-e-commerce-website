import Image from "next/image";
import myproduct1 from "../../../public/images/myproducts1.png"
import rightimage from "../../../public/images/RightImage.png"
import myproducts3 from "../../../public/images/myproducts3.png"

export default function Popularproducts() {
  return (
    <div className="h-[744px] w-[1440px]">
      <h2 className="mt-[64px] ml-[80px] text-[32px]">Our popular products</h2>
      <div className="w-[1281px]  h-[462px] ml-[80px] mt-[32px] flex gap-[24px]">
        <div className="h-full w-[630px]">
          <Image src={myproduct1} alt="largesofa" height={375} width={630} className=""></Image>
          <div className="[Details] h-[63px] w-[209px]  mt-[24px]  flex flex-col ">
            <p className="text-[20px] text-[#2A254B]">The Poplar suede sofa</p>
            <p className="text-[18px] text-[#2A254B]">£980</p>
          </div>
        </div>
        <div className="h-[462px] w-[305px]">
          <Image src={rightimage} alt="largesofa" height={375} width={345} className="bg-[#83A9AC] pt-[30px]"></Image>
          <div className="[Details] h-[63px] w-[209px]  mt-[16px]  flex flex-col gap-2">
            <p className="text-[20px] text-[#2A254B]">The Dandy chair</p>
            <p className="text-[18px] text-[#2A254B]">£250</p>
          </div>
        </div>
        <div className="h-[462px] w-[305px]">
          <Image src={myproducts3} alt="largesofa" height={375} width={345} className="bg-[#83A9AC]"></Image>
          <div className="[Details] h-[63px] w-[209px]  mt-[16px]  flex flex-col gap-2">
            <p className="text-[20px] text-[#2A254B]">The Dandy chair</p>
            <p className="text-[18px] text-[#2A254B]">£250</p>
          </div>
        </div>

      </div>
      <div className="h-[56px] w-full  flex justify-center items-center">
        <button className=" text-[16px] bg-[#f9f9f9] flex justify-center items-center h-[56px] w-[170px] text-center px-[32px] py-[16px]">
          View collection
        </button>
      </div>
    </div>
  );
} 