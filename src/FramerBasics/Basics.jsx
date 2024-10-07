import React from "react";
import { motion, useScroll } from "framer-motion";
const blinkForParent = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 1 } },
};
const blinkForChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export const Basics = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section className="flex flex-col overflow-x-hidden space-y-5">
      <motion.div
        variants={blinkForParent}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 gap-10 p-10"
      >
        <motion.div
          variants={blinkForChild}
          className="bg-slate-800 rounded-lg aspect-square gap-10 flex justify-center items-center"
        >
          {/* fade from right left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
            className="bg-red-500 w-5 h-5 rounded"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="bg-green-400 w-5 h-5 rounded-full"
          ></motion.div>
        </motion.div>
        <motion.div
          variants={blinkForChild}
          className="bg-slate-800 rounded-lg aspect-square gap-10 flex justify-center items-center"
        >
          {/* shape shift */}
          <motion.div
            animate={{
              scale: [1, 2, 1, 2, 1],
              rotate: [0, -45, 90, -135, 180],
              borderRadius: ["10%", "10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              // delay: 0.2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="bg-red-500 w-1/3 h-1/3 rounded"
          ></motion.div>
        </motion.div>
        <motion.div
          variants={blinkForChild}
          className="bg-slate-800 rounded-lg aspect-square gap-10 flex justify-center items-center"
        >
          {/* shape shift */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              bounceDamping: 50,
              bounceStiffness: 600,
            }}
            className="bg-emerald-600 w-1/2 p-5 text-2xl text-stone-200 tracking-wide"
          >
            Click Me
          </motion.button>
        </motion.div>
        <motion.div
          variants={blinkForChild}
          className="bg-slate-800 rounded-lg aspect-square gap-10 flex justify-center items-center"
        >
          {/* drag shift */}
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              bottom: 20,
              right: 50,
              left: -50,
            }}
            dragTransition={{
              bounceDamping: 50,

              bounceStiffness: 600,
            }}
            className="bg-orange-500 w-1/3 h-1/3 rounded-3xl cursor-grab"
          ></motion.div>
        </motion.div>
        <motion.div
          variants={blinkForChild}
          className="bg-slate-800 rounded-lg aspect-square gap-10 flex justify-center items-center"
        >
          {/* progress */}
          <motion.div className="w-40 aspect-square rounded-xl bg-gray-50/20">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: scrollYProgress }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={blinkForChild}
          className="bg-slate-800 rounded-lg aspect-square gap-10 flex justify-center items-center"
        >
          {/* drag shift */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="stroke-orange-500 w-1/2 stroke-[0.5]"
          >
            <motion.path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
