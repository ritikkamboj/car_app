import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <nav className=" flexBetween padding-container max-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={79} height={29} alt="Logo" />
      </Link>

      <ul className="hidden h-full lg:flex gap-12">
        {NAV_LINKS.map((item) => (
          <Link
            href={`${item.href}${item.key}`}
            key={item.key}
            className="regular-16 text-gray-50 cursor-pointer pb-1.5 flexCenter hover:font-bold transition-all"
          >
            {item.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        className="lg:hidden inline-block cursor-pointer "
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
      />
    </nav>
  );
}

export default Navbar;
