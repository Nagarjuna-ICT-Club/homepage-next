import React from "react";
import style from "../styles/members.module.scss";
import Image from "next/image";
import Link from "next/link";

const Members = () => {
  const members = [
    {
      img: "https://images.unsplash.com/photo-1685452329316-d505335ca3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          link: "https://www.facebook.com",
          logo: <i className="ri-facebook-line"></i>,
        },
        {
          link: "https://www.instagram.com/",
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          link: "https://www.linkedin.com/",
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685452329316-d505335ca3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          link: "https://www.facebook.com",
          logo: <i className="ri-facebook-line"></i>,
        },
        {
          link: "https://www.instagram.com/",
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          link: "https://www.linkedin.com/",
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685452329316-d505335ca3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          link: "https://www.facebook.com",
          logo: <i className="ri-facebook-line"></i>,
        },
        {
          link: "https://www.instagram.com/",
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          link: "https://www.linkedin.com/",
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685452329316-d505335ca3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          link: "https://www.facebook.com",
          logo: <i className="ri-facebook-line"></i>,
        },
        {
          link: "https://www.instagram.com/",
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          link: "https://www.linkedin.com/",
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
  ];

  return (
    <div className={style.members__container}>
      <h1>
        Our ICT Club is powered by a diverse community of tech enthusiasts,
        professionals, and learners who share a passion for all things ICT. By
        becoming a member, you gain access to a range of exclusive benefits and
        opportunities.
      </h1>
      <div className={style.executive__title}>
        <h2>Executive Members</h2>
        <p>Leading the Way in our ICT Club</p>
      </div>
      {/* <div className={style.year_tabs}  >
        <button>2023</button>
      </div> */}
      <div className={style.executive__members}>
        {members.map((member, i) => {
          return (
            <div key={i} className={style.member}>
              <Image
                src={member.img}
                width={120}
                height={120}
                alt="executive member"
              />
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <div className={style.links}>
                {member.links.map((link, i) => {
                  return (
                    <Link href={link.link} key={i}>
                      {link.logo}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Members;
