import React from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import Data from "../../data/Data";
import Logement from "../logement/Logement";
import Cards from "../home/Cards";
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Banner name="home" />
      <Cards></Cards>
    </div>
  );
};
export default Home;
