import React from "react";
import { star } from "../assets/icons";

export const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      {" "}
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
      </div>
    </div>
  );
};
