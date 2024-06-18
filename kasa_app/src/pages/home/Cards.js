import React from "react";
import House from "../../data/logements.json";

const Cards = (props) => {
  const getId = props.house;
  const GetId1 = House.map((house) => (
    <li key={House.toString()}>{house.title}</li>
  ));
  return (
    <ul>
      <li>
        <link>{GetId1}</link>
      </li>
    </ul>
  );
};

export default Cards;
