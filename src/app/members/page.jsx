import React from "react";
import style from "../styles/members.module.scss";

const Members = () => {
  const members = [
    {
      img: "https://images.unsplash.com/photo-1685452329316-d505335ca3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          link: <i className="ri-facebook-line"></i>,
        },
        {
          link: <i className="ri-instagram-line"></i>,
        },
        {
          link: <i className="ri-linkedin-line"></i>,
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
    </div>
  );
};

export default Members;
