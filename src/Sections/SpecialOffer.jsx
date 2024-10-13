import React, { useRef } from "react";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { useScroll, motion, useTransform } from "framer-motion";

export const SpecialOffer = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const right = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <section className="flex max-lg:flex-col-reverse" ref={containerRef}>
      <motion.div className="" style={{ translateX: right }}>
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </motion.div>
      <motion.div style={{ translateX: left }}>
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </motion.div>
    </section>
  );
};
