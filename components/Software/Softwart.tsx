"use client";
import { brainiacSoftwares } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const Softwart = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    //  nextArrow: <SampleNextArrow />,
    //  prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black w-full my-4">
      <div className="max-w-screen-2xl mx-auto px-32">
        <div className="py-6">
          <h2 className="uppercase text-center text-white">
            Brainaic Software
          </h2>
          <h1 className="text-center font-extrabold text-2xl text-white capitalize">
            Our happy clients
          </h1>
        </div>
        <div className=" pb-6">
          <Slider {...settings}>
            {brainiacSoftwares.map((software) => (
              <div key={software.id}>
                <Image
                  src={software.Icon}
                  alt={software.name}
                  className="mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Softwart;
//grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8
//
