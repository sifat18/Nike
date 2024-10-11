import React, { useState } from "react";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../utility/constants";
import { bigShoe1 } from "../assets/images";
import { ShoeCard } from "../components/ShoeCard";
import { AnimatePresence, easeIn, motion } from "framer-motion";
export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, zIndex: 9999 },
        }}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
          className="text-xl font-montserrat text-coral-red"
        >
          Our Summer collections
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1, ease: "easeIn" }}
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.5, duration: 1, ease: "easeIn" }}
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>

        <Button
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
          label="Shop now"
          iconURL={arrowRight}
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 2, duration: 1, ease: "easeIn" }}
          className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={bigShoeImg}
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 100,
              transition: {
                duration: 0.2,
              },
            }}
            src={bigShoeImg}
            alt="shoe colletion"
            width={610}
            height={502}
            className="object-contain relative z-10"
          />
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { staggerChildren: 1 } }}
          className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"
        >
          {shoes.map((image, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={index}
            >
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
