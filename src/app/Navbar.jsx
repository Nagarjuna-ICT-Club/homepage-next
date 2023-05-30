import React from "react";
import logo from "./assets/logo.webp";
import Image from "next/image";
import Link from "next/link";

export const links = [
  {
    link: "Home",
    href: "/",
  },
  {
    link: "About Us",
    href: "/",
  },
  {
    link: "Blogs",
    href: "/",
  },
  {
    link: "Events",
    href: "/",
  },
  {
    link: "Members",
    href: "/",
  },
  {
    link: "Gallery",
    href: "/",
  },
];
const Navbar = () => {

  return (
    <div className="flex items-center justify-between px-20">
      <div>
        <Image
          src={logo}
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex gap-8">
        {links.map((link, i) => {
          return (
            <Link key={i} href={`${link.href}`}>
              {link.link}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
