import React from "react";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";

export const Parallax = () => {
  return (
    <main className="relative h-[100vh]">
      <Section1 />

      <Section2 />
    </main>
  );
};