import React from "react";
import style from "../../app/styles/featuredevents.module.scss";
import Image from "next/image";

const FeaturedEvents = ({ featuredEvent }) => {
  return (
    <div className={style.featuredevents__container}>
      <h1>Featured Event</h1>
      <p className={style.event_title_paragraph}>
        Check out our workshops and sessions
      </p>
      <div className={style.event__container}>
        {featuredEvent.map((event, i) => {
          return (
            <div key={i} className={style.event}>
              <div className={style.event_description}>
                <h2>{event.card_title}</h2>
                <p className={style.description}>{event.description}</p>
                <p>
                  <i className="ri-calendar-line"></i> {event.date}{" "}
                </p>
                {event.winning_price && (
                  <p>
                    <i className="ri-price-tag-line"></i> {event.winning_price}{" "}
                  </p>
                )}
                <button>Read More</button>
              </div>
              <div className={style.img__container}>
                <Image src={event.card_img} width={500} height={500} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.viewmore__container}>
        <button className={style.viewmore__btn}>View More </button>
        <p>
          <i className="ri-arrow-right-line"></i>
        </p>{" "}
      </div>
    </div>
  );
};

export default FeaturedEvents;
