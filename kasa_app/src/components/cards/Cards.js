import React from "react";
import logements from "../../data/logements.json";
import "../cards/card.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-container">
        {logements.map((logement) => (
          <Link className="card-link" to={`/logement/${logement.id}`} key={logement.id}> 
            
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
