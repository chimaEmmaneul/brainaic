"use client";
import Banner from "@/components/Banner/Banner";
import React from "react";
import bg from "@/app/assets/bg.svg";
import TechStats from "@/components/TechStats/TechStats";
import Industries from "@/components/Industries/Industries";
import Services from "@/components/Services/Services";
import Image from "next/image";
import Mission from "@/app/assets/Mission.svg";
import Vision from "@/app/assets/Vision.svg";
import Testimonial from "@/components/Testimonials/Testimonial";

type Props = {};

const page = (props: Props) => {
  const bannercontent = (
    <div className=" flex flex-col gap-6 ml-6">
      <h1 className="md:text-white text-3xl tracking-[.4rem]">
        Unconventional
      </h1>
      <h1 className="text-white font-extrabold bg-[#17374C] text-3xl py-3 px-4 tracking-wide w-fit ">
        Technology
      </h1>
      <h1 className="text-3xl md:text-white tracking-[.2rem] capitalize font-extrabold">
        {" "}
        Service company
      </h1>
      <p className="bg-white text-center p-3 w-fit">
        Delivering Inovative Solution in the Digital Realm
      </p>
      <p className="bg-[#17374C] py-3 px-4 text-center md:text-white w-fit flex items-center">
        <span className="rounded-full h-6 w-6 p-1 bg-white text-black mr-2 inline-block ">
          ?
        </span>
        Requst a call back
      </p>
    </div>
  );
  return (
    <section className="w-full">
      <div className="relative">
        <div className=" flex justify-center w-full  ">
          <Image src={bg} alt="Banner" priority />
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="my-6">
          <h1 className="text-center py-2 uppercase">company</h1>
          <h1 className="text-center py-2 uppercase mb-8 font-extrabold">
            values
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-6">
          <div className="bg-[#17374C] text-white px-4 pt-4 pb-16">
            <div className="flex gap-4 items-center">
              <Image src={Mission} alt="mission" />
              <span text-white>Mission</span>
            </div>
            <h4 className="max-w-[20rem] font-bold text-xl py-6">
              Building Credibility Through Online Marketing Services
            </h4>
            <p>
              We are bent upon providing A-one results to clients along with
              unique and creative opportunities to benefit our team. For
              partnered success, both go a long way to achieve extraordinary
              results.
            </p>
          </div>
          <div className="bg-[#17374C] text-white p-4">
            <div className="flex gap-4 items-center">
              <Image src={Vision} alt="Vision" />
              <span className="text-white">Vision</span>
            </div>
            <h4 className="max-w-[20rem] font-bold text-xl py-6">
              Building Credibility Through Online Marketing Services
            </h4>
            <p>
              We are bent upon providing A-one results to clients along with
              unique and creative opportunities to benefit our team. For
              partnered success, both go a long way to achieve extraordinary
              results.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <TechStats />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center py-2 uppercase">
          RELIABLE SERVICES & SOLUTIONS FOR
        </h1>
        <h1 className="text-center py-2 uppercase mb-8 font-extrabold">
          Startup’s & SMEs.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-6 ">
          <div className="bg-[#17374C] text-white px-4 pt-4 pb-16">
            <p>
              We are bent upon providing A-one results to clients along with
              unique and creative opportunities to benefit our team. For
              partnered success, both go a long way to achieve extraordinary
              results.
            </p>
          </div>
          <div className="bg-[#17374C] text-white p-4">
            <p>
              We are bent upon providing A-one results to clients along with
              unique and creative opportunities to benefit our team. For
              partnered success, both go a long way to achieve extraordinary
              results.
            </p>
          </div>
        </div>
      </div>
      <Industries />
      <Testimonial />
    </section>
  );
};

export default page;
