import React, { useRef } from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { useScroll } from "framer-motion";

export const Parallax = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <main className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />

      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
};
