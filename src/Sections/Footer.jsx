import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../utility/constants";
import { copyrightSign } from "../assets/icons";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 1,
              delay: 0.5,
            },
          }}
          className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"
        >
          <motion.a
            href="/"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </motion.a>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 1,
                delay: 0.5,
              },
            }}
            className="flex items-center gap-5 mt-8"
          >
            {socialMedia.map((icon) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 1,
              delay: 0.5,
            },
          }}
          className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap"
        >
          {footerLinks.map((section) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              key={section.title}
            >
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 1,
            delay: 0.5,
          },
        }}
        className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer"
        >
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </motion.div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </motion.div>
    </footer>
  );
};
