"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/varient";

type Props = {};

const Form = (props: Props) => {
  return (
    <section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="w-full grid place-items-center my-6"
      >
        <form className="w-full grid grid-rows-1 gap-10 place-items-center px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pr-8 md:pr-0">
            <label htmlFor="Company" className="relative">
              <span className="absolute top-[-.9rem] left-3 bg-white ">
                Company *
              </span>
              <input
                type="text"
                id="Company"
                className=" border border-solid border-[black] p-2 inline-block w-full"
                placeholder="Company"
              />
            </label>
            <label htmlFor="fullname" className=" relative">
              <span className="absolute top-[-.9rem] left-3 bg-white ">
                Fullname *
              </span>
              <input
                type="text"
                id="fullname"
                className=" border border-solid border-[black] p-2 inline-block w-full"
                placeholder="fullname"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pr-8 md:pr-0">
            <label htmlFor="website" className="relative">
              <span className="absolute top-[-.9rem] left-3 bg-white ">
                Company Website *
              </span>
              <input
                type="text"
                id="website"
                className=" border border-solid border-[black] p-2 inline-block w-full"
                placeholder="www.company.com"
              />
            </label>
            <label htmlFor="email" className="relative">
              <span className="absolute top-[-.9rem] left-3 bg-white ">
                Email *
              </span>
              <input
                type="email"
                id="email"
                className=" border border-solid border-[black] p-2 inline-block w-full"
                placeholder="johnaduga@gmail.com"
              />
            </label>
          </div>
          <div className="w-full pr-8 md:pr-0">
            <label htmlFor="services" className="relative">
              <span className="absolute top-[-1.4rem] left-3 bg-white ">
                Services *
              </span>
              <input
                type="text"
                id="services"
                className=" border border-solid border-[black] p-2 inline-block w-full"
                placeholder="Ai integration"
              />
            </label>
          </div>
          <div className="w-full relative">
            <label htmlFor="fullname" className="">
              <span className="absolute top-[-.8rem] left-3 bg-white text-sm ">
                Project Brief and requirements *
              </span>
              <textarea
                id="fullname"
                className=" border border-solid border-[black] p-2 inline-block w-full"
                placeholder="List your requirements"
              />
            </label>
          </div>

          <div className="w-full">
            <button className="text-white text-center py-3 px-4 bg-black w-full">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Form;
