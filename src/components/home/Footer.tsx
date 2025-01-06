import Image from "next/image";


export default function Navbar() {
    return (
        <div className="h-[380px] w-[1440px]">
            <div className="h-[361px] w-[1440px] bg-[#2A254B] flex">
                <div className="[Menu] h-[175px] w-[108px] pt-[58px] ml-[82px] flex flex-col gap-3">
                    <p className="text-[16px] text-white">Menu</p>
                    <p className="text-[14px] text-white">New arrivals</p>
                    <p className="text-[14px] text-white">Best sellers</p>
                    <p className="text-[14px] text-white">Recently viewed</p>
                    <p className="text-[14px] text-white">Popular this week</p>
                    <p className="text-[14px] text-white">All products</p>
                </div>
                <div className="h-[206px] w-[84px] ml-[115px] flex flex-col gap-[12px] mt-[58px]">
                    <p className="text-[16px] text-white">Categories</p>
                    <p className="text-[14px] text-white">Crockery</p>
                    <p className="text-[14px] text-white">Furniture</p>
                    <p className="text-[14px] text-white">Homeware</p>
                    <p className="text-[14px] text-white">Plant pots</p>
                    <p className="text-[14px] text-white">Chairs</p>
                    <p className="text-[14px] text-white">Crockery</p>

                </div>
                <div className="h-[175px] w-[105px] ml-[131px] flex flex-col gap-[12px] mt-[58px]">
                    <p className="text-[16px] text-white">Our company</p>
                    <p className="text-[14px] text-white">About us</p>
                    <p className="text-[14px] text-white">Vacancies</p>
                    <p className="text-[14px] text-white">Homeware</p>
                    <p className="text-[14px] text-white">Contact us</p>
                    <p className="text-[14px] text-white">Privacy</p>
                    <p className="text-[14px] text-white">Returns policy</p>
                </div>
                <div className="[input and heading] h-[90px] ml-[106px] mt-[58px] w-[627px] flex flex-col">
                    <p className="text-white ">Join our mailing list</p>
                    <div className="[input-and-button] flex mt-[14px]">
                        <input type="text" placeholder="yourgmail@.com" className="w-[509px] h-[56px] bg-[#4a4666]" />
                        <button className=" bg-white w-[118px] h-[56px]">Sign up</button>
                    </div>
                </div>
            </div>
            <div className="h-[69px] w-[1440px] bg-[#2A254B]">
                <div className="border-[1px] border-[border: 1px solid #4E4D93] ml-[80px] w-[1277px] flex"></div>
                <div className="mt-[25px] flex justify-evenly gap-[530px]">
                    <p className="text-[14px] text-white flex justify-between">Copyright 2022 Avion LTD</p>
                    <div className="h-[24px] w-[264px] flex gap-[24px]">
                        <i className="text-white bi bi-instagram"></i>
                        <i className="text-white bi bi-skype"></i>
                        <i className="text-white bi bi-facebook"></i>
                        <i className="text-white bi bi-twitter"></i>
                        <i className="text-white bi bi-pinterest"></i>
                    </div>
                </div>
            </div>
        </div>
    );
} 