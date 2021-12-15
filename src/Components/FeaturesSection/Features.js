import React from "react";
import "./Features.css";
// import { IoFastFoodOutline } from "react-icons/";
import {
  MdOutlineNoFood,
  MdFastfood,
  MdEmojiFoodBeverage,
} from "react-icons/md";

function Features({ id }) {
  return (
    <>
      <section className="features__section" id={id}>
        <div className="features__heading">
          <h1>Bring & Share </h1>
          <p>Little ways to find great joy</p>
        </div>

        <div className="cards">
          <div className="cards__item hvr-float-shadow">
            <div>
              <div className="card__cover">
                <MdFastfood className="card__icon" />
              </div>
              <h1 className="card__title">Show Love</h1>
              <p className="card__content">
                Easily allow friends to indicate what they would love to bring
                at the next office meet up
              </p>
            </div>
          </div>
          <div className="cards__item hvr-float-shadow">
            <div>
              <div className="card__cover">
                <MdOutlineNoFood className="card__icon" />
              </div>

              <h1 className="card__title">No Boring Meals</h1>
              <div className="card__content">
                <p>
                  Show your co-workers, your boss and family who is boss, when
                  it comes to cooking !
                </p>
              </div>
            </div>
          </div>
          <div className="cards__item hvr-float-shadow">
            <div>
              <div className="card__cover">
                <MdEmojiFoodBeverage className="card__icon" />
              </div>
              <h1 className="card__title">Who brings what</h1>
              <p className="card__content">
                View what your office colleague plans to brings and see how you
                can help make this group meals a great suceess
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
