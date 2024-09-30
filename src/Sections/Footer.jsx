import React from "react";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../utility/constants";

export const Footer = () => {
  return (
    <footer className="max-container">
      <div className="">
        <div className="">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="">
            {socialMedia.map((icon) => (
              <div className="" key={icon.alt}>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
