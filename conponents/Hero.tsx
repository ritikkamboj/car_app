"use client";

import React from "react";
import Image from "next/image";
import Custombutton from "./Custombutton";

function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find Book and Rent Car Easily </h1>
        <p className="hero__subtitle">
          Streamline your Car rental experience with our Effortless booking
          Experience
        </p>
        <Custombutton
          title="Explore Cars"
          containerStyles="bg-blue-500"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
}

export default Hero;
