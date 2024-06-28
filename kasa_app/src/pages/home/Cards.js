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
            
            <div className="card-title"><h2>{logement.title}</h2></div>
            
            <div className="card-content" style={{
                backgroundImage:`url(${logement.cover})`,
              }}>
              
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Cards;
