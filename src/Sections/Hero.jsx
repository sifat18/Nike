import React from "react";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../utility/constants";

export const Hero = () => {
  return (
    <section
      id="home"
      className="flex xl:flex-row  flex-col gap-10 max-container min-h-screen "
    >
      <div className="relative flex flex-col  justify-center items-start w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p className="text-lg font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative pr-10 z-10 xl:bg-white xl:whitespace-nowrap">
            The New Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3"> Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort and innovation for
          your active life
        </p>
        <Button label="Show Now" icon={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics?.map((i, index) => (
            <div key={index}>
              <p className="text-4xl font-bold font-palanquin">{i?.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {i?.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
