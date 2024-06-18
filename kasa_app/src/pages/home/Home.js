import React from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import Cards from "../home/Cards";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Banner name="home" />
      <Cards />
    </div>
  );
};
export default Home;
