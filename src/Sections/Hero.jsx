import React from "react";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";

export const Hero = () => {
  return (
    <section
      id="home"
      className="flex xl:flex-row  flex-col gap-10 max-container min-h-screen "
    >
      <div className="relative flex flex-col  justify-center items-start w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <p></p>
        <h1>
          <span>The New Arrivals</span>
          <br />
          <span>Nike</span>Shoes
        </h1>
        <p>
          Discover Stylish Nike arrivals, quality comfort and innovation for
          your active life
        </p>
        <Button label="Show Now" icon={arrowRight} />
      </div>
    </section>
  );
};