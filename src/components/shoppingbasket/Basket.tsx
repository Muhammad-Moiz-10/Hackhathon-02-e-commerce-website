import Image from "next/image";
import basketimagediv1 from "../../../public/images/basketimagediv1.png"

export default function Basket() {
    return (
        <div className="w-[1440px] h-[749px] bg-[#F9F9F9]">
            <p className="text-[36px] text-[#2A254B] relative  top-[64px]  ml-[188px]">Your shopping cart</p>
            <div className="mt-[62px] h-[20px] w-[1055px] flex ml-[188px]">
                <p className="text-[14px] text-[#2A254B]">Product</p>
                <p className="ml-[590px] text-[14px] text-[@2a254b]">Quantity</p>
                <p className="ml-[315px] text-[14px] text-[@2a254b]">Total</p>
            </div>
            <div className="mt-[35px] h-[285px] w-[1068px] ml-[188px]  grid grid-cols-3">
                <div className="h-[134px] w-[309px] flex">
                    <Image src={basketimagediv1} alt="product image" height={134} width={109}></Image>
                    <div className="flex flex-col gap-[8px] mt-[16px] ml-[18px]">
                        <p className="text-[20px] text-[#2A254B]">Graystone vase</p>
                        <p className="text-[14px] text-[#2A254B]">A timeless ceramic vase with
                            a tri color grey glaze.</p>
                        <p className="text-[14px] text-[#2A254B]">$56</p>
                    </div>
                </div>
                <div className=" bg-red-500 h-[46px] w-[122px] flex px-[16px] py-[12px] items-center justify-between">
                    <p className="text-[#2A254B]">+</p>
                    <p className="text-[#2A254B]">1</p>
                    <p className="text-[#2A254B]">-</p>
                </div>
                <p className="text-[18px] text-[#2A254B]">£85</p>
            </div>
        </div>
    );
}
