import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";
import "../logement/logement.css"


const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const { rating } = useParams();
  useEffect(() => {
    const lgt = logements.find((house) => house.id === id);
    setLogement(lgt);
    setLoading(false);
  }, []);

  const ratingNote =()=>{
    
  }
  ratingNote();
  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="card-logement">
      <Carousel pictures={logement.pictures} />
      <div className="card-logement_container">
        <div className="card-logement_content">
        <div className="card-logement_title">
          <h3>{logement.title}</h3>
          <p>{logement.location}</p>
        </div>
        <div className="card-logement_host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} />
        </div>
        </div>

        <div className="card-logement_tag">
        <p>{logement.tags[0]}</p>
        <p>{logement.tags[1]}</p>
        <p>{logement.tags[2]}</p>
        </div>

        <div className="card-logement_rating">

        </div>

      </div>
      
      
    </div>
  );
};

export default Logement;
