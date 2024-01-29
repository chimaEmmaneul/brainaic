import Logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import France from "@/app/assets/Nigeria.svg";
import Nigeria from "@/app/assets/Nigeria.svg";

const Footer = () => {
  return (
    <div className="bg-[#17374C] w-full">
      <div className=" max-w-screen-xl mx-auto pt-2 pb-5 md:py-14 px-[2%] md:px-[5%]">
        <div className="">
          <div className="mb-2 md:mb-7">
            <Image src={Logo} alt="logo" className="w-[8.5rem] sm:w-auto" />
          </div>
          <div className="relative grid grid-cols-8 md:grid-cols-5 text-white capitalize">
            <div className="col-span-3 md:col-span-1">
              <div>
                <div className="mb-2 md:mb-7">
                  <p className="font-semibold text-[3.5vw] min-[371px]:text-sm sm:text-base mb-3">
                    service & expertise
                  </p>

                  <ul className="text-[#D9D9D9] list-disc text-[2.5vw] min-[371px]:text-[10px] sm:text-xs pl-5">
                    <li className="mb-1 md:mb-3">design & development</li>
                    <li className="mb-1 md:mb-3">AI integration</li>
                    <li className="mb-1 md:mb-3">cloud computing</li>
                    <li className="mb-1 md:mb-3">AR & VR</li>
                  </ul>
                </div>
                <div className="pb-14 sm:pb-0">
                  <p className="font-semibold text-[3.5vw] min-[371px]:text-sm sm:text-base mb-3">
                    terms & policies
                  </p>

                  <ul className="text-[#D9D9D9] list-disc text-[2.5vw] min-[371px]:text-[10px] sm:text-xs pl-5">
                    <li className="mb-1 md:mb-3">terms & conditions</li>
                    <li className="mb-1 md:mb-3">privacy policy</li>
                    <li className="mb-1 md:mb-3">disclaimer</li>
                    <li className="mb-1 md:mb-3">cookie policy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="font-semibold text-[3.5vw] min-[371px]:text-sm sm:text-base mb-1 md:mb-3">
                useful links
              </p>

              <ul className="text-[#D9D9D9] list-disc text-[2.5vw] min-[371px]:text-[10px] sm:text-xs pl-5">
                <li className="mb-1 md:mb-3">about us</li>
                <li className="mb-1 md:mb-3">portfolio</li>
                <li className="mb-1 md:mb-3">blog</li>
                <li className="mb-1 md:mb-3">career</li>
                <li className="mb-1 md:mb-3">packages</li>
                <li className="mb-1 md:mb-3">testimonial</li>
                <li className="mb-1 md:mb-3">partners</li>
                <li className="mb-1 md:mb-3">contact</li>
              </ul>
            </div>
            <div className="col-span-3 md:col-span-3 m-0 md:ml-10">
              <div className="hidden md:block">
                <p className="text-[#D9D9D9] text-xs">
                  no matter where you are
                </p>
                <h2 className="font-semibold">
                  in USA, canada, australia & UK, we can serve you
                </h2>
              </div>
              <div className="block md:hidden font-semibold">
                <div className="flex gap-5 items-end">
                  <Image
                    src={France}
                    alt="France flag"
                    className="w-8 sm:w-auto"
                    priority
                  />
                  <h2 className="text-[3.5vw] min-[371px]:text-sm sm:text-base">
                    france
                  </h2>
                </div>
                <p className="text-[3vw] min-[371px]:text-xs sm:text-sm mt-4 mb-6">
                  plot 46, bode thomas street, surulere, 101212 lagos, NG
                </p>
                <div className="text-[3vw] min-[371px]:text-xs sm:text-sm font-normal">
                  <p>+94 33 4004 4425</p>
                  <p className="normal-case">Info@sgincorp.com</p>
                </div>
              </div>
              <div className="min-[440px]:w-[10rem] sm:w-[12rem] md:w-[16rem] font-semibold pt-5">
                <div className="flex gap-5 items-end">
                  <Image
                    src={Nigeria}
                    priority
                    alt="Nigerian flag"
                    className="w-8 sm:w-auto"
                  />
                  <h2 className="text-[3.5vw] min-[371px]:text-sm sm:text-base">
                    nigeria
                  </h2>
                </div>
                <p className="hidden md:block text-sm my-3">
                  1A hughes avenue, alagomeji, lagos state, NG
                </p>
                <p className="block md:hidden text-[3vw] min-[371px]:text-xs sm:text-sm mt-4 mb-6">
                  plot 46, bode thomas street, surulere, 101212 lagos, NG
                </p>
                <div className="text-[3vw] min-[371px]:text-xs sm:text-sm font-normal">
                  <p>+234 33 4004 4425</p>
                  <p className="normal-case">Info@sgincorp.com</p>
                </div>
              </div>
            </div>
            <div className="md:hidden block absolute bottom-2 w-[62.5%] pr-1">
              <p className="text-[#D9D9D9] text-[2.5vw] min-[371px]:text-[10px] sm:text-xs">
                no matter where you are
              </p>
              <h2 className="font-semibold text-[3vw] min-[371px]:text-xs sm:text-sm">
                in USA, canada, australia & UK, we can serve you
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:pt-10 pb-3">
        <p className="text-xs text-center">
          Copyright &copy; 2023 Brainiac.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
