"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/varient";
import ChooseUsImg from "@/app/assets/chooseUs.svg";

type Props = {};

const ChooseUs = (props: Props) => {
  return (
    <section className="bg-[#FCE0AE] w-full p-10 mt-4 pb-8">
      <div className="max-w-screen-2xl  mx-auto">
        <div className=" mx-6 md:mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h3 className="uppercase">Yes us!!!</h3>
              <h1 className="font-bold tracking-wide mb-8 text-2xl">
                why choose us
              </h1>
              <p>
                Every project undertaken project is fulfilled by skilled
                professionals having expertise in web development solutions to
                digital marketing strategies. To reward our clients with
                cutting-edge services, we keep ourselves at the forefront of
                industry trends. We are focused on a data-driven approach,
                customized solutions and dedicated client support. Analyzing key
                metrics and user behaviour usher us with valuable insights to
                strengthen and optimize our services. We are ready for the
                initial consultation and ongoing website maintenance.
              </p>

              <div className="bg-gray-900 w-full text-white  my-6 uppercase text-center text-sm md:text-base grid grid-rows-1 md:grid-cols-3">
                <p className=" bg-[#17374C] p-3 ">TAILORED SOLUTIONS</p>
                <p className="bg-[#17374D] p-3  ">Cutting edge technology</p>
                <p className="bg-[#17374F] p-3  ">Result driven approach</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-full grid place-items-center"
            >
              <Image src={ChooseUsImg} alt="choose us" priority />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
