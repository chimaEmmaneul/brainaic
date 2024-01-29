"use client";
import React, { useState } from "react";
import { BannerLogo } from "@/utils/constants";
import Star from "@/app/assets/Star.svg";
import StarDark from "@/app/assets/StarDark.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const BannerIcons = (props: Props) => {
  const [rating, setRating] = useState(4.5);

  const totalStars = 5;

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
    <div className=" w-full flex justify-center mb-14 ">
      <div className="  w-[70%] mx-auto relative  md:top-[-3.5rem]">
        <Slider {...settings}>
          {BannerLogo.map((logo) => (
            <div
              key={logo.id}
              className="bg-white  rounded-md  h-24 flex items-center text-center shadow-lg p-2 "
            >
              <Image src={logo.Icon} alt={logo.name} className="mx-auto" />
              <div className="flex items-center justify-center">
                {"(4.5)"}
                {[...Array(totalStars)].map((_, index) => (
                  <span
                    key={index}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {index < rating ? (
                      <Image src={Star} alt="Star" />
                    ) : (
                      <Image src={StarDark} alt="Star" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerIcons;
