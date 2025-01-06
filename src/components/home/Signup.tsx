

export default function Signup() {
  return (
      <div className="w-[1440px] h-[481px] bg-[#F9F9F9] flex justify-center items-center">
        <div className="[Container] h-[364px] w-[1273px] bg-white">
            <div className="[Text-content] h-[114px] w-[571px] mt-[68px] ml-[351px] gap-[16px]">
                <p className="text-center text-[36px]">Join the club and get the benefits</p>
                <p className="text-center text-[16px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
            </div>
            <div className="[Text-input] h-[56px] w-[472px] mt-[76px] ml-[400px] flex">
                <input type="text" placeholder="your@email.com" className="bg-[#F9F9F9] h-[56px] w-[354px] pl-[32px]"/>
                <button className="w-[118px] h-[56px] flex justify-center items-center text-white bg-[#2A254B]">Sign up</button>
            </div>
        </div>
      </div>
  );
} 