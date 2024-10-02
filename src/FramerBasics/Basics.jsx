import React from "react";
import { motion } from "framer-motion";
const blinkForParent = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 1 } },
};
const blinkForChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export const Basics = () => {
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
          1
        </motion.div>
        <motion.div
          variants={blinkForChild}
          className="bg-slate-800 rounded-lg aspect-square gap-10 flex justify-center items-center"
        >
          1
        </motion.div>
        <motion.div
          variants={blinkForChild}
          className="bg-slate-800 rounded-lg aspect-square gap-10 flex justify-center items-center"
        >
          1
        </motion.div>
      </motion.div>
    </section>
  );
};
