"use client";
import { services } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fadeIn } from "@/utils/varient";
import { motion } from "framer-motion";

type Props = {};

const Services = (props: Props) => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-12 w-full ">
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-20">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="my-6">
              <h4 className="text-center p-2 capitalize">Our services</h4>
              <h1 className="text-center font-extrabold py-2 capitalize">
                What we can do for you
              </h1>
            </div>
          </motion.div>
          <div className="w-full  ">
            <Slider {...settings}>
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  style={{
                    background: service.bgColor,
                    top: service.marginTop,
                  }}
                  //bg-[${service.bgColor}] top-[${service.marginTop}]
                  className={`mb-4  py-12 px-6 bg-[${service.bgColor}] top-[${service.marginTop}]`}
                >
                  <Image
                    src={service.Icon}
                    alt={service.heading}
                    height={70}
                    width={70}
                    className="mx-auto"
                  />
                  <div className="">
                    <h1 className="font-extrabold text-center py-4">
                      {service.heading}
                    </h1>
                    <p className="text-sm text-center">{service.text}</p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
