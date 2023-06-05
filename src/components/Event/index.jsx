import React from "react";
import style from "../../app/styles/events.module.scss";

const Event = ({ event }) => {
  return (
    <div
      className={style.event}
      style={{ backgroundImage: `url(${event.card_img})` }}
    >
      <div className={style.description}>
        <p>{event.card_title}</p>
        <p>
          <i className="ri-arrow-right-up-line"></i>
        </p>
      </div>
    </div>
  );
};

export default Event;
