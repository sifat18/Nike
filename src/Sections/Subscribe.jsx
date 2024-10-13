import React, { useRef } from "react";
import { Button } from "../components/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export const Subscribe = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const right = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  return (
    <section
      ref={containerRef}
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <motion.h3
        style={{ translateX: right }}
        className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"
      >
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </motion.h3>
      <motion.div
        style={{ translateX: left }}
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </motion.div>
    </section>
  );
};
