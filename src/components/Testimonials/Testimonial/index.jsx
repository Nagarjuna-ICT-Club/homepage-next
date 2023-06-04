import Image from "next/image";
import React from "react";
import style from "../../../app/styles/testimonials.module.scss";

export const Testimonial = ({ testimonial }) => {
  return (
    <div className={style.testimonial}>
      <div className={style.img_container}>
        <Image src={testimonial.img} width={50} height={50} />
        <div className={style.memeber_details}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.title}</p>
        </div>
      </div>
      <div className={style.description}>
        <p>{testimonial.testimonial}</p>
      </div>
    </div>
  );
};
