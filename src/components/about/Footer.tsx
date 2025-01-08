import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col">
            <div className="h-[295px] w-[1440px] bg-[#2A254B] flex">
                <div>
                    <p className="text-[36px] pt-[62px] ml-[80px] text-white">Avion</p>
                    <div className="h-[112px] w-[152px] flex flex-col gap-[12px] mt-[25px] ml-[80px]">
                        <p className="text-[14px] text-gray-400">21 New York Street</p>
                        <p className="text-[14px] text-gray-400">New York City</p>
                        <p className="text-[14px] text-gray-400">United States of America</p>
                        <p className="text-[14px] text-gray-400">432 34</p>
                    </div>
                </div>
                <div className="mt-[53px] ml-[60px]">
                    <p className="text-gray-400">Social links</p>
                    <div className="mt-[23px] h-[24px] w-[264px] flex gap-[24px]">
                        <i className="text-white bi bi-linkedin"></i>
                        <i className="text-white bi bi-facebook"></i>
                        <i className="text-white bi bi-instagram"></i>
                        <i className="text-white bi bi-skype"></i>
                        <i className="text-white bi bi-twitter"></i>
                        <i className="text-white bi bi-pinterest"></i>
                    </div>
                </div>
                <div className="h-[175px] w-[108px] mt-[53px] ml-[170px]">
                    <p className="text-gray-400">Menu</p>
                    <p className="text-[14px] text-gray-400">New arrivals</p>
                    <p className="text-[14px] text-gray-400">Best sellers</p>
                    <p className="text-[14px] text-gray-400">Recently viewed</p>
                    <p className="text-[14px] text-gray-400">Popular this week</p>
                    <p className="text-[14px] text-gray-400">All products</p>
                </div>
                <div className="h-[206px] w-[84px] ml-[105px] mt-[53px] flex flex-col gap-[12px]">
                    <p className="text-gray-400">Categories</p>
                    <p className="text-[14px] text-gray-400">Crockery</p>
                    <p className="text-[14px] text-gray-400">Furniture</p>
                    <p className="text-[14px] text-gray-400">Homeware</p>
                    <p className="text-[14px] text-gray-400">Plant pots</p>
                    <p className="text-[14px] text-gray-400">Chairs</p>
                    <p className="text-[14px] text-gray-400">Crockery</p>
                </div>
                <div className="h-[175px] w-[105px] mt-[53px] ml-[130px] flex flex-col gap-[12px]">
                    <p className="text-gray-400">Our company</p>
                    <p className="text-[14px] text-gray-400">About us</p>
                    <p className="text-[14px] text-gray-400">Vacancies</p>
                    <p className="text-[14px] text-gray-400">Contact us</p>
                    <p className="text-[14px] text-gray-400">Privacy</p>
                    <p className="text-[14px] text-gray-400">Returns policy</p>
                </div>
            </div>
            <div className="h-[55px] w-[1440px] bg-[#2A254B] flex flex-col">
                <div className="border-[1px] border-[#4E4D93] ml-[80px] w-[1277px]"></div>
                <p className="text-white text-[14px] ml-[80px] mt-[15px]">Copyright 2022 Avion LTD</p>
            </div>
        </div>
    );
}