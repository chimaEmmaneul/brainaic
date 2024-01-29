"use client";
import Image from "next/image";
import bg from "@/app/assets/bg.svg";
import { motion } from "framer-motion";
import BannerIcons from "../components/BannerIcons/BannerIcons";
import { InfoText, brainiacSoftwares } from "@/utils/constants";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Form from "@/components/Form/Form";
import ChooseUs from "@/components/chooseUs/ChooseUs";
import TechStats from "@/components/TechStats/TechStats";
import Industries from "@/components/Industries/Industries";
import Footer from "@/components/Footer/Footer";
import Softwart from "@/components/Software/Softwart";
import { fadeIn } from "@/utils/varient";
import { Suspense } from "react";
import Testimonial from "@/components/Testimonials/Testimonial";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto">
        <div className="relative">
          <div className=" flex justify-center w-full  ">
            <Image src={bg} alt="Banner" priority />
          </div>
        </div>
        <BannerIcons />
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full"
        >
          <div className="max-w-screen-2xl mx-auto  ">
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2  ">
              <div className="mt-[-4rem]">
                <h1 className="font-extrabold text-2xl ml-10 my-6">
                  Click. Convert. Thrive
                </h1>
                <p className=" mx-5  md:mx-6   lg:mx-10">{InfoText}</p>
              </div>
              <Form />
            </div>
          </div>
        </motion.div>
        <Softwart />
        <Services />

        <Suspense fallback={<h1>Loading Portfolio</h1>}>
          <Gallery />
        </Suspense>

        <ChooseUs />
        <TechStats />
        <Industries />
        <Testimonial />
      </div>
    </main>
  );
}
