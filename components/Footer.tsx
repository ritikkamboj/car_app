import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-14 text-gray-30">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
          <div className="flex flex-col gap-5 ">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  key={link.label}
                  href="/"
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p>{link.label}:</p>
                  <p className="medium-14 text-blue-70">{link.value}</p>
                </Link>
              ))}
            </FooterColumn>
          </div>
          <div className="flex flex-col gap-5">
            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30 ">
                {SOCIALS.links.map((link) => (
                  <Link href="/" key={link}>
                    <Image src={link} alt="logo" width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2025 HiLink| All Right Reserved{" "}
        </p>
      </div>
    </footer>
  );
}

type FooterComp = {
  title: string;
  children: React.ReactNode;
};

function FooterColumn({ title, children }: FooterComp) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18">{title}</h4>
      {children}
    </div>
  );
}

export default Footer;
