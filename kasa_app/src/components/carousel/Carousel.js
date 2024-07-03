import React, { useState , useEffect } from "react";

import "../carousel/carousel.css";
import ArrowForward from "../../img/arrow_forward_ios-24px 1.png";
import ArrowBack from "../../img/arrow_back_ios-24px 1.png";



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
    <div className="carousel">
      <div className="carousel-container">
        <img
          src={pictures[index]}
          alt="kasa photos logements"
          className="carousel_img"
        />

       { pictures.length > 1 && 
       <>
       <div className="arrow">
          <img
            src={ArrowBack}
            alt="flèche directionnelle gauche"
            onClick={decrement}
          />

          <img
            src={ArrowForward}
            alt="flèche directionnelle droite"
            onClick={increment}
          />
        </div>
        <div className="infoPics">
          <p>
            {index + 1}/{pictures.length}
          </p>
        </div>
        </>
        }
      </div>
    </div>
  );
};

export default Carousel;
