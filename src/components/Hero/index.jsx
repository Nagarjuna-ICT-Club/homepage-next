import React from "react";
import style from "../../app/styles/hero.module.scss";
import Image from "next/image";
import moment from "moment";

const Hero = () => {
  return (
    <div className={style.hero__container}>
      <h1>Nagarjuna ICT Club</h1>
      <div className={style.hero__wrapper}>
        <div
          className={`flex flex-col justify-between ${style.herotext__wrapper}`}
        >
          <p className={style.datetime__container}>
            {moment().format("MMMM Do YYYY")}
          </p>
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={250}
            height={300}
            data-img-value="1"
          />
          <p className={`flex items-end ${style.hero__text}`}>
            Discover endless possibilities as we explore the dynamic world of
            Information and Communication Technology.
          </p>
        </div>
        <div className={style.images__container}>
          <div className={style.first__imagecontainer}>
            <Image
              src={
                "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              }
              width={250}
            height={300}
              data-img-value="1"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              }
              width={250}
            height={300}
              data-img-value="2"
            />
          </div>
          <div className={style.second__imagecontainer}>
            <Image
              src={
                "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              }
              width={250}
              height={300}
              data-img-value="2"
            />
          </div>
          <div className={style.first__imagecontainer}>
            <Image
              src={
                "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              }
              width={250}
              height={300}
              data-img-value="1"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              }
              width={250}
              height={300}
              data-img-value="2"
            />
          </div>
          {/* <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
            data-img-value="3"
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
            data-img-value="4"
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
            }
            width={80}
            height={80}
            data-img-value="5"
          /> */}
        </div>
        <div className={`flex flex-col gap-12 ${style.herotext__wrapper}`}>
          <p>
            Unlock your creativity, develop essential skills, and stay ahead of
            the curve in this rapidly evolving digital era.
          </p>
          <Image
              src={
                "https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              }
              width={250}
              height={300}
              data-img-value="2"
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;
