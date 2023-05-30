import React from "react";
import logo from "./assets/bg-logo.png";
import Image from "next/image";
import { links } from "./Navbar";
import Link from "next/link";
import style from "./styles/footer.module.scss";

const contacts = [
  {
    logo: <i className="ri-mail-line"></i>,
    contact: "ictclub@nagarjunacollege.edu.np",
  },
  {
    logo: <i className="ri-phone-line"></i>,
    contact: "98xxxxxxxx",
  },
  {
    logo: <i class="ri-map-pin-line"></i>,
    contact: "Nagarjuna College Of IT,Sankhamul",
  },
];

const Footer = () => {
  return (
    <div className={`${style.footer__container}`}>
      <div className={`${style.newsletter}`}>
        <h1>
          Get the latest R&D updates straight to your inbox. Subscribe to our
          newsletter now!
        </h1>
        <div className={`flex gap-3`}>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.about}>
          <Image src={logo} width={140} height={140} />
          <p className={style.desp}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            ducimus repellendus tenetur porro, magnam sint molestiae repellat?
            At, debitis maiores!
          </p>
          <div className={style.links}>
            <p>
              <Link href={"https://www.facebook.com/nagarjuna.ict.club"}>
                <i className="ri-facebook-fill"></i>
              </Link>
            </p>
            <p>
              <Link href={"https://www.instagram.com/nagarjuna_ict_club/"}>
                <i className="ri-instagram-line"></i>
              </Link>
            </p>
          </div>
        </div>
        <div className={`${style.info__container}`}>
          <div className={style.info}>
            <h2>Quick Links</h2>
            <div className={"flex flex-col gap-1"}>
              {links.map((link, i) => {
                return (
                  <Link key={i} href={`${link.href}`}>
                    {link.link}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={style.info}>
            <h2>Contacts</h2>
            <div className="flex flex-col gap-1">
              {contacts.map((contact, i) => {
                return (
                  <p key={i} className="flex gap-2">
                    {contact.logo} {contact.contact}{" "}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.copyright}`}>
        <p>&copy; 2023 Nagarjuna ICT Club.All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
