import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const ServiceCard = ({ imgURL, label, subtext, index }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: "all" });
  const mainControls = useAnimation();
  useEffect(() => {
    isInView && mainControls.start("show");
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: index / 2, duration: 0.5 }}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
    >
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </motion.div>
  );
};
