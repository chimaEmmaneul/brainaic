import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";
import bg from "@/app/assets/bg.svg";
import Form from "@/components/Form/Form";
import TechStats from "@/components/TechStats/TechStats";
import Industries from "@/components/Industries/Industries";
import Softwart from "@/components/Software/Softwart";
import Testimonial from "@/components/Testimonials/Testimonial";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <section>
      <div className="w-full">
        <div className="relative">
          <div className=" flex justify-center w-full  ">
            <Image src={bg} alt="Banner" priority />
          </div>
        </div>
        <div className=" max-w-3xl mx-auto my-16">
          <h2 className="uppercase text-center">Need help?</h2>
          <h1 className="text-center font-extrabold text-2xl">
            Talk To Our Specialist Team
          </h1>
          <Form />
        </div>
        <Softwart />
        <TechStats />
        <Industries />
        <Testimonial />
      </div>
    </section>
  );
};

export default ContactUs;
