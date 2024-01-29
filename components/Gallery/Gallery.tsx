import { imageGallery } from "@/utils/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <section className="mt-32 grid place-items-center mb-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* <div className="mx-20"> */}
        <h4 className="text-center p-2 uppercase">Portfolio</h4>
        <h1 className="text-center font-extrabold mb-4 capitalize">
          check out our portfolio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center mb-6 lg:mx-4 ">
          {imageGallery.map((item) => (
            <div key={item.id}>
              <Image src={item.Icon} alt="Image" priority />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-[#17374C] px-4 py-1 my-4 rounded-sm text-white">
            view All
          </button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Gallery;
