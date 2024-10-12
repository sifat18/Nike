import React from "react";
import { star } from "../assets/icons";
import { upwards } from "../Sections/PopularProducts";
import { motion } from "framer-motion";

export const PopularProductCard = ({ index, imgURL, name, price }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 == 0 ? 50 : -50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index / 2, duration: 0.5, ease: "easeInOut" },
      }}
      viewport={{
        amount: "10",
      }}
      className="flex flex-1 flex-col w-full max-sm:w-full"
    >
      {" "}
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </motion.div>
  );
};
