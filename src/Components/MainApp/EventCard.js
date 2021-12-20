import React from "react";
import "../../css/card.css";
import "../../css/hover.css";
import { AiOutlineLike, AiOutlineDelete } from "react-icons/ai";
import { BiDish, BiNote } from "react-icons/bi";
import { BsFillPinMapFill } from "react-icons/bs";
import {
  MdOutlineEmojiFoodBeverage,
  MdOutlineCake,
  MdOutlineFastfood,
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

function EventCard({ events, deleteEvent, updateEvent, increaseLikes }) {
  return (
    <IconContext.Provider value={{ color: "#011627" }}>
      <div className="event__card__container">
        {events.length === 0 ? (
          <h2 className="event__subtitle">
            No meal planned yet, starting planning your meals
          </h2>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event__card__item hvr-hang">
              <div className="event__card__cover">
                <img
                  className="eventImg"
                  src="/images/eventImage.jpg"
                  alt="eventCover"
                />
                <AiOutlineDelete
                  className="delete__icon"
                  onClick={() => deleteEvent(event.id)}
                />
                <FiEdit
                  className="edit__icon"
                  onClick={() => updateEvent(event.id, event)}
                />

                <AiOutlineLike
                  className="like__icon "
                  onClick={() => increaseLikes(event.id, event)}
                />
                <span className="event__count"> {event.count}</span>
              </div>
              <div className="event__card__content">
                <h3 className="event__card__name">{event.name}</h3>
                <p>{event.date}</p>
                <p className="event__card__location">
                  <BsFillPinMapFill
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                  {event.location}
                </p>

                <p>
                  <BiDish style={{ fontSize: "20px", marginRight: "5px" }} />

                  <span className="event__card__dish">Main Dish:</span>
                  {event.mainDish}
                </p>
                <p>
                  <MdOutlineFastfood
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />

                  <span className="event__card__dish">Side Dish:</span>
                  {event.sideDish}
                </p>
                <p>
                  <MdOutlineEmojiFoodBeverage
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />

                  <span className="event__card__dish">Beverage:</span>
                  {event.beverage}
                </p>
                <p>
                  <MdOutlineCake
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                  <span className="event__card__dish">Dessert:</span>
                  {event.dessert}
                </p>
                <p>
                  <BiNote style={{ fontSize: "20px", marginRight: "5px" }} />
                  <span className="event__card__dish">Note:</span>
                  {event.comment}
                </p>
              </div>
              <div>
                <hr className="event__hr" />
                <div className="social__container">
                  <FacebookShareButton
                    className="event__social__share"
                    url="http://localhost:3000/"
                    quote="Join the party"
                    hashtag="#React"
                  >
                    <FacebookIcon
                      iconFillColor="white"
                      round={true}
                      size={32}
                    ></FacebookIcon>
                  </FacebookShareButton>
                  <WhatsappShareButton
                    className="event__social__share"
                    title="Let's cook together"
                    url="http://localhost:3000/"
                  >
                    <WhatsappIcon
                      iconFillColor="white"
                      round={true}
                      size={32}
                    ></WhatsappIcon>
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </IconContext.Provider>
  );
}

export default EventCard;
