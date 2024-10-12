import React from "react";
import { PopularProductCard } from "../components/PopularProductCard";
import { products } from "../utility/constants";
import { motion } from "framer-motion";

export const upwards = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};
export const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <motion.div
        variants={upwards}
        initial="hidden"
        whileInView="show"
        viewport={{
          amount: "all",
        }}
        className="flex flex-col justify-start gap-5"
      >
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </motion.div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product, index) => (
          <PopularProductCard key={product.name} {...product} index={index} />
        ))}
      </div>
    </section>
  );
};
