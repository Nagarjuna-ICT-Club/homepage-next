import React from "react";
import style from "../styles/about.module.scss";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={style.about__container}>
      <div className={style.about__header}>
        <h1>
          Welcome to our ICT Club, a dynamic community passionate about
          exploring the vast world of Information and Communication Technology.
        </h1>
        <p>
          Our dedicated team of industry professionals and tech enthusiasts is
          committed to providing a platform for knowledge sharing, networking,
          and innovation.
        </p>
      </div>
      <div className={style.img__container}>
        <Image
          src={
            "https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          }
          fill={true}
          alt="unsplash-image"
        />
      </div>
      <div className={style.divider}></div>
      <div className={style.description}>
        <h2>Who are we ?</h2>
        <div>
          <p>
            At our club, we bring together passionate individuals who share a
            common enthusiasm for technology and its impact on our lives.
            Through a variety of engaging activities, we aim to foster knowledge
            sharing, skill development, and innovation.
          </p>
          <p>
            Join us on this exciting journey as we explore the frontiers of
            technology and harness its potential for positive change. Together,
            let's shape the future through innovation, collaboration, and
            continuous learning.
          </p>
        </div>
      </div>
      <div className={style.quote_container}>
        <q>
          Our goal at the ICT Club is to empower individuals with the knowledge
          and skills needed to thrive in the digital era. We foster a culture of
          learning, creativity, and collaboration, connecting like-minded
          individuals and exploring emerging technologies. Our aim is to make a
          positive impact by leveraging technology for social good. 
        </q>
      </div>
    </div>
  );
};

export default AboutUs;
