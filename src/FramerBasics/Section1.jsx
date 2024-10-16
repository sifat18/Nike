import React from "react";
import Pic1 from "../assets/images/1.jpg";

export const Section1 = () => {
  return (
    <div className="h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <p>Scroll Perspective</p>

      <div className="flex gap-4">
        <p>Section</p>

        <div className="relative w-[12.5vw]">
          <img src={Pic1} alt="img" placeholder="blur" fill />
        </div>

        <p>Transition</p>
      </div>
    </div>
  );
};
