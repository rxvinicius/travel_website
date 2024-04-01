"use client";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const defaultLinkClassesName =
    "regular-16 flexCenter transition-all hover:font-bold";

  const ButtonLogin = () => (
    <Button
      type="button"
      title="Login"
      icon="/user.svg"
      variant="btn_dark_green"
    />
  );

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`${defaultLinkClassesName} text-gray-50`}
          >
            {link.label}
          </Link>
        ))}

        <ButtonLogin />
      </ul>

      <div className="inline-block cursor-pointer lg:hidden">
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`
            ${toggle ? "flex" : "hidden"}
            p-6 bg-green-gradient absolute top-15 right-0 mx-4 my-3 min-w-[220px] rounded-xl sidebar flex-col
          `}
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className={`${defaultLinkClassesName} text-white mb-3`}
            >
              {link.label}
            </Link>
          ))}

          <ButtonLogin />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
