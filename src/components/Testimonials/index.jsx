import React from "react";
import style from "../../app/styles/testimonials.module.scss";
import { Testimonial } from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae magnam praesentium ab neque rerum est!",
    },
    {
      img: "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicingelit. Repudiandae magnam praesentium ab neque rerum est!, Lorem ipsum dolor sit amet consectetur, adipisicingelit. Repudiandae magnam praesentium ab neque rerum est",
    },
    {
      img: "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae magnam praesentium ab neque rerum est!",
    },
    {
      img: "https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
      name: "Sudeep Kumar Mishra",
      title: "President",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae magnam praesentium ab neque rerum est!",
    },
  ];
  return (
    <div className={style.testimonials__container}>
      <h1>Testimonials</h1>
      <p className={style.title_paragraph}>Hear what our members have to say</p>
      <div className={style.testimonial_wrapper}>
        {testimonials.map((testimonial, i) => {
          return <Testimonial testimonial={testimonial} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
