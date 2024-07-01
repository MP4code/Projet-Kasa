import React, { useState , useEffect } from "react";

import "../carousel/carousel.css";
import ArrowForward from "../../img/arrow_forward_ios-24px 1.png";
import ArrowBack from "../../img/arrow_back_ios-24px 1.png";



const Carousel = (props) => {
  const { pictures } = props;
  const [index, setIndex] = useState(0);
  const [styleArrow, setStyleArrow] = useState("arrow");
  const [styleInfo, setStyleInfo] = useState("infoPics");

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
  
  useEffect(() => {
    if ( pictures.length < 2 ) {
     setStyleArrow("hiddenElement");
     setStyleInfo("hiddenElement")
    }
  
    
  }, []);
  
  return (
    <div className="carousel">
      <div className="carousel-container">
        <img
          src={pictures[index]}
          alt="kasa photos logements"
          style={{
            width:"100%",
            height: "415px",
            objectFit: "cover",
            borderRadius: "10px",
            position: "relative",
          }}
        />

        <div className={styleArrow}>
          <img
            src={ArrowBack}
            alt="flèche directionnelle gauche"
            style={{
              position: "absolute",
              width: "10%",
              color: "white",
              cursor: "pointer",
            }}
            onClick={decrement}
          />

          <img
            src={ArrowForward}
            alt="flèche directionnelle droite"
            style={{
              position: "absolute",
              width: "10%",
              color: "white",
              cursor: "pointer",
            }}
            onClick={increment}
          />
        </div>

        <div className={styleInfo}>
          <p>
            {[index + 1]}/{pictures.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
