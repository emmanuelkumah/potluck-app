import React, { useState } from "react";
import "./Review.css";
import { reviews } from "./ReviewData.js";
import { FcPrevious, FcNext } from "react-icons/fc";

function Review() {
  const [count, setCount] = useState(0);
  //   console.log(reviews[count]);
  let reviewData = reviews[count];
  function getReview() {
    setCount(count + 1);
    // console.log(reviews[count]);
    reviewData = reviews[count];
  }
  return (
    <>
      <section className="review__section">
        <article className="review__container">
          <h1>{reviewData.name} </h1>

          <p>
            {reviewData.role} - {reviewData.location}
          </p>
          <p>{reviewData.text}</p>
          <div>
            <FcPrevious />
            <FcNext />
          </div>
        </article>
      </section>
    </>
  );
}

export default Review;
