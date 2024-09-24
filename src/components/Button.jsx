import React from "react";

export const Button = ({ label, icon }) => {
  return (
    <button className="flex justify-center items-center px-7 gap-2 py-4 text-lg border font-montserrat leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <img src={icon} alt="" srcset="" className="ml-2 rounded-full w-5 h-5" />
    </button>
  );
};
