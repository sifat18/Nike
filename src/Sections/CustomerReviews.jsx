import React from "react";
import { reviews } from "../utility/constants";
import { ReviewCard } from "../components/ReviewCard";
import { upwards } from "./PopularProducts";
import { motion } from "framer-motion";
export const CustomerReviews = () => {
  return (
    <section className="max-container">
      <motion.div
        variants={upwards}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2, duration: 0.5, ease: "easeIn" }}
      >
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </motion.div>
      <motion.div
        variants={upwards}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2, duration: 0.5, ease: "easeIn" }}
        className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </motion.div>
    </section>
  );
};
