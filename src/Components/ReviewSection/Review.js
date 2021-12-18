import React, { useState } from "react";
import "../../css/Review.css";
import reviews from "./ReviewData.js";
import { FcPrevious, FcNext } from "react-icons/fc";

function Review({ id }) {
  const [count, setCount] = useState(0);

  const { name, role, location, text, img } = reviews[count];

  const checkCount = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    }
    if (num < 0) {
      return reviews.length - 1;
    }
    return num;
    //  num > reviews.length - 1 ? return  0 :  return num;
  };

  const nextReview = () => {
    setCount((count) => {
      let newCount = count + 1;
      return checkCount(newCount);
    });
  };

  const prevReview = () => {
    setCount((count) => {
      let newCount = count - 1;
      return checkCount(newCount);
    });
  };

  return (
    <>
      <section className="review__section" id={id}>
        <h2 className="review__title">What They Say</h2>

        <img
          className="reviewImg"
          src="/images/reviewBgImg.png"
          alt="reviewImg"
        />

        <article className="review__container">
          <img src={img} className="review__personImg" alt="reviewPerson" />
          <div className="review__details">
            <h1 className="review__heading">{name} </h1>

            <p className="review__role">
              <span>{role}</span>: {location}
            </p>
            <p className="review__desc">{text}</p>
          </div>

          <div className="review__icons">
            <FcPrevious className="review__prevIcon" onClick={prevReview} />
            <FcNext className="review__nextIcon" onClick={nextReview} />
          </div>
        </article>
      </section>
    </>
  );
}

export default Review;
