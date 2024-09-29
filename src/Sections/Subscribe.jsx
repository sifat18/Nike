import React from "react";
import { Button } from "../components/Button";

export const Subscribe = () => {
  return (
    <section id="contact-us" className="">
      <h3 className="">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};
