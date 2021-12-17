import React from "react";
import "../../css/card.css";
import "../../css/hover.css";
import { AiOutlineLike } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function EventCard({ events }) {
  return (
    <IconContext.Provider value={{ color: "blue", size: "50px" }}>
      <div className="event__card__container">
        {events.map((event) => (
          <div className="event__card__item hvr-hang">
            <div className="event__card__cover">
              <img src="/images/eventImage.jpg" alt="eventCover" />

              <AiOutlineLike className="event__icon" />
            </div>
            <div className="event__card__content">
              <h4>{event.name}</h4>
              <p>{event.date}</p>
              <h6>{event.location}</h6>
              <p>{event.mainDish}</p>
              <p>{event.sideDish}</p>
              <p>{event.beverage}</p>
              <p>{event.dessert}</p>
              <p>{event.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </IconContext.Provider>
  );
}

export default EventCard;
