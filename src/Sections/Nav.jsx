import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { routes } from "../utility/routes";
export const Nav = () => {
  return (
    <header className="z-10 w-full bg-red-400 padding-x py-8 absolute">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
          {routes?.map((i) => (
            <li key={i?.label}>
              <a
                href={i?.href}
                className="text-lg text-slate-300 font-montserrat leading-normal "
              >
                {i?.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
