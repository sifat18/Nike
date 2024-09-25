import React, { useState } from "react";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../utility/constants";
import { bigShoe1 } from "../assets/images";
import { ShoeCard } from "../components/ShoeCard";

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row  flex-col gap-10 max-container min-h-screen "
    >
      <div className="xl:w-2/5 relative flex flex-col  justify-center items-start w-full  max-xl:padding-x pt-28">
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
      <div className="flex-1 flex justify-center items-center xl:min-h-screen bg-primary bg-cover max-xl:py-40 bg-hero bg-center w-full">
        <img
          src={bigShoe1}
          alt="big-shoe1"
          width={610}
          height={500}
          className="object-contain z-10 relative"
        />
        <div>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
