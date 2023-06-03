import React from "react";
import Image from "next/image";
import style from "../../../app/styles/member.module.scss";

const Member = ({ team }) => {
  return (
    <div className={style.member__container}>
      <Image src={team.img} width={300} height={200} alt={`team-member`} />
      <h3>{team.name}</h3>
      <p className={style.title}>{team.title}</p>
      <div className={style.links}>
        {team.links.map((link, i) => {
          return <p key={i}>{link.logo}</p>;
        })}
      </div>
    </div>
  );
};

export default Member;
