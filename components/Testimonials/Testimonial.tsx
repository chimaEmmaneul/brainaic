import Test1 from "@/app/assets/Testimonial1.svg";
import Test2 from "@/app/assets/Testimonial2.svg";
import Test3 from "@/app/assets/Testimonial3.svg";
import Test4 from "@/app/assets/Testimonial4.svg";
import Test5 from "@/app/assets/Testimonial5.svg";
import Frame from "@/app/assets/EnvFrame.svg";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-white md:bg-[#FCFCFC] w-full">
      <div className=" max-w-screen-xl mx-auto md:grid grid-cols-2 py-7 px-[4%] sm:p-10">
        <div className="text-[#202020]">
          <div className="mb-12 md:mb-16 lg:mb-20 px-[5%] sm:px-0">
            <p className="text-xs lg:text-base uppercase">testimonials</p>
            <h3 className="capitalize font-bold text-xl lg:text-2xl">
              trust us from what our happy clients have to say about us.
            </h3>
          </div>
          <div className="p-[2px] rounded-[10px] bg-gradient-to-br from-[#C1C1C1] to-[#C1C1C100]">
            <div className="bg-white md:bg-[#FCFCFC] relative rounded-[9px] py-10 md:py-16 lg:py-20 px-3 sm:px-[3rem] lg:px-[5.5rem] capitalize">
              <div>
                <h3 className="text-[#5D5D5D] text-xs lg:text-sm font-bold">
                  Funding freemium technology focus equity bootstrapping usernce
                  niche market. Seed round agile development growth hacking
                  retur on investment alpha investor advisor.
                </h3>
              </div>
              <div className="bg-white sm:bg-[#FCFCFC] absolute -top-6 lg:-top-8 flex">
                <div className="pr-3 min-[351px]:px-3 min-[351px]:pt-3 lg:pt-4">
                  <p className="bg-[#FCFCFC] font-bold text-xs sm:text-sm lg:text-base max-[350px]:w-14 max-[350px]:pt-2">
                    mary spencer
                  </p>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 pr-2 lg:pr-3">
                  <Image
                    src={Test1}
                    alt="First client"
                    className="w-12 lg:w-auto"
                  />
                  <Image
                    src={Test2}
                    alt="Second client"
                    className="w-6 lg:w-auto"
                  />
                  <Image
                    src={Test3}
                    alt="Third client"
                    className="w-4 lg:w-auto"
                  />
                  <Image
                    src={Test4}
                    alt="Fourth client"
                    className="w-4 lg:w-auto"
                  />
                  <Image
                    src={Test3}
                    alt="Fifth client"
                    className="w-4 lg:w-auto"
                  />
                  <Image
                    src={Test5}
                    alt="Sixth client"
                    className="w-4 lg:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex md:block justify-center px-[5%] md:px-0">
          <div className="md:absolute bottom-12 left-5 pt-7 pb-5 md:py-0 mt-7">
            <Image src={Frame} alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
