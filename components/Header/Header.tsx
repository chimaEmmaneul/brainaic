"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/Logo.svg";
import Menu from "@/app/assets/Menu.svg";
import DownArrow from "@/app/assets/DownArrow.svg";
import Nigeria from "@/app/assets/Nigeria.svg";
import { navLinks } from "@/utils/constants";
import { usePathname } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const pathName = usePathname();
  return (
    <div className="bg-white w-full">
      <div className=" max-w-screen-xl mx-auto  px-4 sm:px-6 ">
        <div className="flex  h-24 md:h-16 items-center text-center justify-between ">
          <div className="bg-[#17374C] flex gap-2 py-3 px-5 rounded-full items-center justify-center md:hidden ">
            <Image src={Nigeria} alt="Nigeria" height={30} width={30} />
            <Image src={DownArrow} alt="DownArrow" height={8} width={8} />
          </div>

          <div className=" md:flex md:items-center md:gap-12 ">
            <a className="block text-teal-600 mt-2" href="/">
              <Image src={Logo} alt="Logo" height={170} width={170} />
            </a>
          </div>

          {/* <div className="md:flex md:items-center md:gap-12"> */}
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center gap-6 text-sm">
              {navLinks.map((link) => {
                const isActive = pathName === link.path;
                return (
                  <li key={link.id}>
                    <a
                      className={`text-gray-500  hover:text-gray-500/75 transition-all ${
                        isActive
                          ? "border-b-2 border-b-[#FF972C] border-solid pb-1"
                          : "border-none"
                      }`}
                      href={link.path}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="  block md:hidden">
            <div className="">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <Image src={Menu} alt="Menu" />
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
