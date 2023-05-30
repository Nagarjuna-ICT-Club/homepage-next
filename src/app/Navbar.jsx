import React from "react";
import logo from "./assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import style from "./styles/navbar.module.scss";

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
    <div
      className={`flex items-center justify-between  ${style.navbar__container}`}
    >
      <div>
        <Image
          src={logo}
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={`flex gap-8 ${style.links}`}>
        {links.map((link, i) => {
          return (
            <Link key={i} href={`${link.href}`}>
              {link.link}
            </Link>
          );
        })}
      </div>
      <div className={`${style.hamburgermenu}`}>
        <p>
          <i className="ri-menu-line"></i>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
