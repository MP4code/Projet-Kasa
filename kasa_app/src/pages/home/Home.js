import React from "react";

import "./home.css";
import Banner from "../../components/banner/Banner";
import Cards from "../../components/cards/Cards"


const Home = () => {

  return (
    <div className="home">
      <Banner name="home" />
      <Cards />
    </div>
  );
};
export default Home;
