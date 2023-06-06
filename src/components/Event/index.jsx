import React from "react";
import style from "../../app/styles/events.module.scss";
import Link from "next/link";

const Event = ({ event }) => {
  return (
    <Link
      href={{
        pathname: `/events/${event.navigationPath}`,
        query:  event
      }}
    >
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
    </Link>
  );
};

export default Event;
