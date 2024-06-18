import React, { useState } from "react";

const Carousel = (props) => {
  const { pictures } = props;
  const [index, setIndex] = useState(0);
  const increment = () => {
    let newIndex = index + 1;
    if (newIndex > pictures.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  const decrement = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }
    setIndex(newIndex);
  };
  return (
    <div>
      <button onClick={decrement}>précédent</button>
      <button onClick={increment}>suivant</button>
      <img src={pictures[index]}></img>
    </div>
  );
};

export default Carousel;
