import React from "react";
import logements from "../../data/logements.json";
import "../home/home.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-container">
        {logements.map((logement) => (
          <Link to={`/logement/${logement.id}`}>
            <div className="card-content">
              <h2>{logement.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Cards;
