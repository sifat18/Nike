import React from "react";
import { motion } from "framer-motion";
export const Basics = () => {
  return (
    <section className="flex flex-col overflow-x-hidden space-y-5">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
          transition: { staggerChildren: 0.25 },
        }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 gap-10 p-10"
      >
        <div className="bg-slate-gray rounded-lg aspect-square gap-10 flex justify-center items-center">
          1
        </div>
        <div className="bg-slate-gray rounded-lg aspect-square gap-10 flex justify-center items-center">
          1
        </div>
        <div className="bg-slate-gray rounded-lg aspect-square gap-10 flex justify-center items-center">
          1
        </div>
        <div className="bg-slate-gray rounded-lg aspect-square gap-10 flex justify-center items-center">
          1
        </div>
        <div className="bg-slate-gray rounded-lg aspect-square gap-10 flex justify-center items-center">
          1
        </div>
        <div className="bg-slate-gray rounded-lg aspect-square gap-10 flex justify-center items-center">
          1
        </div>
      </motion.div>
    </section>
  );
};
