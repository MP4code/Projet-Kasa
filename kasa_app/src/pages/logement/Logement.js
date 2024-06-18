import React, { useEffect, useState } from "react";
import Data from "../../data/Data";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const lgt = logements.find((house) => house.id === id);
    setLogement(lgt);
    setLoading(false);
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <Carousel pictures={logement.pictures} />
      <h2>{logement.title}</h2>
    </div>
  );
};

export default Logement;
