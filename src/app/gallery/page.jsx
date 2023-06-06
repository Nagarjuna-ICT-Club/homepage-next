import React from "react";
import style from "../styles/gallery.module.scss";
import Image from "next/image";
import moment from "moment";

const Gallery = () => {
  return (
    <div className={style.gallery__container}>
      <h1>
        Take a visual journey through the vibrant world of our ICT Club. Browse
        our gallery to see snapshots of memorable events, engaging workshops,
        project showcases, and moments of collaboration.
      </h1>

      <div className={style.gallery__wrapper}>
        <h2>Showcase of our Albums</h2>
        <div className={style.albums__container}>
          <div className={style.album} data-album="first">
            <div className={style.album__first}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
                width={400}
                height={400}
                alt="unsplash-image"
                data-album-img="first"
              />
              <h3>Session Name</h3>
              <p>{moment().format("MMMM Do , YYYY")}</p>
            </div>
            <div data-album-img="second">
              <p>{moment().format("MMMM Do , YYYY")}</p>
              <Image
                src={
                  "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
                width={500}
                height={500}
              />
              <h3>Session Name</h3>
            </div>
          </div>
          <div className={style.album} data-album="second">
            <h3>Git and Github Session</h3>
            <div data-album-img="first">
            <p>{moment().format("MMMM Do , YYYY")}</p>
              <Image
                src={
                  "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
                width={600}
                height={600}
                alt="unsplash-image"
              />
            </div>
            <div data-album-img="second">
            <p>{moment().format("MMMM Do , YYYY")}</p>
              <Image
                src={
                  "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                }
                width={400}
                height={800}
                alt="unsplash-image"
              />
              <h3>Session Name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
