"use client";
import React from "react";
import logo from "./assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import style from "./styles/navbar.module.scss";
import MobileNavigation from "@/components/MobileNav";
import { useRouter } from "next/navigation";

export const links = [
  {
    link: "Home",
    href: "/",
  },
  {
    link: "About Us",
    href: "/aboutus",
  },
  {
    link: "Events",
    href: "events/",
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
  const [showmobilenav, setShowMobileNav] = React.useState(false);
  const mobilenavigationref = React.useRef();
  const router = useRouter();

  function useOutsideAlerter(ref) {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowMobileNav(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div
      className={`flex items-center justify-between  ${style.navbar__container}`}
    >
      <div onClick={() => router.push("/")} style={{cursor:"pointer"}}>
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
        {!showmobilenav ? (
          <p onClick={() => setShowMobileNav(true)}>
            <i className="ri-menu-line"></i>
          </p>
        ) : (
          <p onClick={() => setShowMobileNav(false)}>
            <i className="ri-close-line"></i>
          </p>
        )}
      </div>

      {showmobilenav && (
        <MobileNavigation
          mobilenavigationref={mobilenavigationref}
          useOutsideAlerter={useOutsideAlerter}
        />
      )}
    </div>
  );
};

export default Navbar;
