import React from "react";
import style from "../../app/styles/mobilenavigation.module.scss";
import { links } from "@/app/Navbar";
import Link from "next/link";

const MobileNavigation = ({ mobilenavigationref, useOutsideAlerter }) => {
  useOutsideAlerter(mobilenavigationref);
  return (
    <div
      className={style.mobile_navigation__container}
      ref={mobilenavigationref}
    >
      <div className={style.links}>
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

export default MobileNavigation;
