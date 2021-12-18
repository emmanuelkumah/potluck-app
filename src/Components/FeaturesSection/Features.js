import React from "react";
import "../../css/Features.css";
import { MdOutlineNoFood } from "react-icons/md";
import { AiOutlineSmile } from "react-icons/ai";
import { BiDish } from "react-icons/bi";

function Features({ id }) {
  return (
    <>
      <section className="features__section" id={id}>
        <div className="features__heading">
          <h2 className="features__title">Bring & Cook </h2>
          <p>Little ways to find great joy, cooking together</p>
        </div>

        <div className="cards">
          <div className="cards__item ">
            <div>
              <div className="card__cover">
                <BiDish className="card__icon" />
              </div>
              <h3 className="card__title">Helping Hand</h3>
              <p className="card__content">
                Join a friend to cook for your next office hangout, game night
                and family gathering
              </p>
            </div>
          </div>
          <div className="cards__item">
            <div>
              <div className="card__cover">
                <MdOutlineNoFood className="card__icon" />
              </div>

              <h3 className="card__title">No Junk Meals</h3>

              <p className="card__content">
                No more burger and pizza, participants joins hands cook healthy
                meals in a relaxed atmosphere
              </p>
            </div>
          </div>
          <div className="cards__item ">
            <div>
              <div className="card__cover">
                <AiOutlineSmile className="card__icon" />
              </div>
              <h3 className="card__title">Create Memories</h3>
              <p className="card__content">
                Let your colleagues know you are a chef, dazzle them with your
                culinary skills and create lasting memories
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
