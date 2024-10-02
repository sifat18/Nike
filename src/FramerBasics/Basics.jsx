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
