import React from "react";
import bg from "@/app/assets/bg.svg";
import Banner from "@/components/Banner/Banner";
import Form from "@/components/Form/Form";
import { InfoText } from "@/utils/constants";
import Gallery from "@/components/Gallery/Gallery";
import TechStats from "@/components/TechStats/TechStats";
import Industries from "@/components/Industries/Industries";
import Testimonial from "@/components/Testimonials/Testimonial";

type Props = {};

const page = (props: Props) => {
  return (
    <section>
      <div>
        <Banner Img={bg} />

        <div className="w-full mt-8">
          <div className="max-w-screen-2xl mx-auto  ">
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2  ">
              <div className="">
                <h1 className="font-extrabold text-2xl ml-10 my-6">
                  Click. Convert. Thrive
                </h1>
                <p className=" mx-5  md:mx-6   lg:mx-10">{InfoText}</p>
              </div>
              <Form />
            </div>
          </div>
        </div>

        <Gallery />
        <TechStats />
        <Industries />
        <Testimonial />
      </div>
    </section>
  );
};

export default page;
