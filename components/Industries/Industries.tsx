import { industries } from "@/utils/constants";
import Image from "next/image";
import React from "react";

type Props = {};

const Industries = (props: Props) => {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto">
        <h4 className="text-center p-2 uppercase">Industries</h4>
        <h1 className="text-center font-extrabold mb-4 capitalize">We serve</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 md:gap-4 mx-16">
          {industries.map((industrie) => (
            <div key={industrie.id} className="text-center">
              <Image
                src={industrie.Icon}
                alt={industrie.name}
                className="mx-auto"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
