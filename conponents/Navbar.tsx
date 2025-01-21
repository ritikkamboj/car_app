import Link from "next/link";
import Image from "next/image";
import React from "react";
import Custombutton from "./Custombutton";

function Navbar() {
  return (
    <header className="w-full absolute z-10 bg-blue-500 padding-x">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-centre sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} />
        </Link>

        <Custombutton
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white "
          btnType="button"
        />
      </nav>
    </header>
  );
}

export default Navbar;
