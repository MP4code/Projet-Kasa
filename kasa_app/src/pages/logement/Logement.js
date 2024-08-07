import React, { useEffect, useState} from "react";
import { useNavigate , useParams } from 'react-router-dom';
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import "../logement/logement.css";
import Rating from "../../components/rating/Rating";

const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const lgt = logements.find((house) => house.id === id);
    setLogement(lgt);
    
    if(!lgt){
      navigate('/error-404');
     }
     else{
      setLogement(lgt);
      setLoading(false);
     }
    
    
  }, [id, navigate]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="card-logement">
      <div className="card-logement_container">
        <Carousel pictures={logement.pictures} />
        <div className="Card-logement-container">
          <div className="card-logement_content">
            <div className="card-logement_title">
              <h3>{logement.title}</h3>
              <p>{logement.location}</p>
            </div>
            <div className="card-logement_tag">
              {logement.tags.map((tag, i) => (
                <p key={i}>{tag}</p>
              ))}
            </div>
          </div>
          <div className="card-logement_content">
            <div className="card-logement_host">
              <div>
                <p>{logement.host.name.split(" ")[0]}</p>
                <p>{logement.host.name.split(" ")[1]}</p>
              </div>
              <img src={logement.host.picture} alt="profil"/>
            </div>
            <div className="card-logement_rating">
              <Rating content={logement.rating} />
            </div>
          </div>
        </div>
        <div className="card-logement_info">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
