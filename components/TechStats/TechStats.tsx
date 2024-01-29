import { techStats } from "@/utils/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const TechStats = (props: Props) => {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 md:gap-4">
          {techStats.map((stat) => (
            <div key={stat.id} className="text-center">
              <Image
                src={stat.Icon}
                alt={stat.name}
                className="mx-auto"
                priority
              />
              <h1 className="font-extrabold text-2xl py-1">{stat.stats}</h1>
              <p className="text-sm">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStats;
