import React from "react";
import Image from "next/image";
import gif from "../../app/assets/team.gif";
import style from "../../app/styles/team.module.scss";
import Member from "./Member";

const MeetTeam = () => {
  const teams = [
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1685703206477-aa1df00a1f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      links: [
        {
          logo: <i className="ri-facebook-fill"></i>,
        },
        {
          logo: <i className="ri-instagram-line"></i>,
        },
        {
          logo: <i className="ri-linkedin-line"></i>,
        },
      ],
    },
  ];

  return (
    <div className={style.team__container}>
      <div className={style.team__header}>
        <div className={style.team__intro}>
          <h1>
            Meet our diverse team of creators,designers and problem solvers
          </h1>
        </div>
        <div className={style.gif__container}>
          <Image src={gif} height={250} width={250} alt="team-gif" />
        </div>
      </div>
      <div className={style.teams}>
        {teams.map((team, i) => {
          return <Member team={team} key={i} />;
        })}
      </div>
    </div>
  );
};

export default MeetTeam;
