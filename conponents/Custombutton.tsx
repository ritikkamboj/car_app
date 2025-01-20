"use client";

import React from "react";
import Image from "next/image";
import { customButtonProps } from "@/types";

function Custombutton({
  title,
  containerStyles,
  handleClick,
}: customButtonProps) {
  return (
    <button
      disabled={false}
      type="submit"
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default Custombutton;
