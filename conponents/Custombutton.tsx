"use client";

import React from "react";
import Image from "next/image";
import { customButtonProps } from "@/types";

function Custombutton({
  title,
  containerStyles,
  handleClick,
  btnType,
}: customButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className="aditya"
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default Custombutton;
