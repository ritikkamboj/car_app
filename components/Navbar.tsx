import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="border-2 border-red-500 flexBetween padding-container max-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={79} height={29} alt="Logo" />
      </Link>

      <ul className="hidden h-full lg:flex gap-12">
        {NAV_LINKS.map((item) => (
          <Link href={`${item.href}${item.key}`} key={item.key}>
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
