import React, { useEffect, useState } from "react";
import { Hero } from "./Sections/Hero";
import { PopularProducts } from "./Sections/PopularProducts";
import { SuperQuality } from "./Sections/SuperQuality";
import { Services } from "./Sections/Services";
import { SpecialOffer } from "./Sections/SpecialOffer";
import { Subscribe } from "./Sections/Subscribe";
import { Footer } from "./Sections/Footer";
import { Nav } from "./Sections/Nav";
import { CustomerReviews } from "./Sections/CustomerReviews";
import { Parallax } from "./FramerBasics/Parallax";
// import { Circles } from "./components/Circles";
// import { Basics } from "./FramerBasics/Basics";
import { motion, useScroll, useTransform } from "framer-motion";

export const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };
  return (
    <main className="relative overflow-x-hidden ">
      <Nav />
      <section className="mx-11 xl:padding-r wide:padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
      {/* <Circles /> */}
      {/* <Basics /> */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </main>
    // <Parallax />
  );
};
