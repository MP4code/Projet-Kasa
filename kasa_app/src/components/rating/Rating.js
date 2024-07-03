import React, { useState, useEffect } from "react";
import starRatingA from "../../img/Vector.png";
import starRatingI from "../../img/VectorInactive.png";

const Rating = (props) => {
  const { content } = props;

  const [stars, setStars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (content > i) {
        starsArray.push(
          <img src={starRatingA} key={i} style={{ width: "24px" }} alt="star" />
        );
      } else {
        starsArray.push(
          <img src={starRatingI} key={i} style={{ width: "24px" }} alt="star" />
        );
      }
    }
    setStars(starsArray);

    setLoading(false);
  }, [content]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>{stars?.map((star) => star)}</div>
  );
};

export default Rating;
