import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  Img: string;
  bannertext?: ReactNode;
};

const Banner = ({ Img, bannertext }: Props) => {
  return (
    <div className="w-full mb-6">
      <div className=" flex justify-center max-w-screen-2xl mx-auto relative ">
        <Image
          src={Img}
          alt="Banner"
          priority
          className="w-full hidden md:block"
        />
        {bannertext && (
          <div className="bg:gray-800 md:absolute top-10 left-2">
            {bannertext}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
