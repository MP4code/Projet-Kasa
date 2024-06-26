import React from "react";
import Header from "../../layout/header/Header";
import "./home.css";
import Banner from "../../components/banner/Banner";
import Cards from "../home/Cards";


const Home = () => {
  return (
    <div>
      <Banner name="home" />
      <Cards />
    </div>
  );
};
export default Home;
