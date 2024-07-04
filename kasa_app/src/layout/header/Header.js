import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import "./header.css";

//
//

const Header = () => {
  const location = useLocation(); 
  const currentPath = location.pathname;
  const[ borderAccueil, setBorderAccueil]= useState("barreInactive");
  const[ borderAbout, setBorderAbout]= useState("barreInactive");
  const [loading, setLoading] = useState(true);

  
  
  useEffect(() => {
    if (currentPath === "/") {
      setBorderAccueil("barreActive");
      setBorderAbout("barreInactive")
    }
    else if (currentPath === "/about-us"){
      setBorderAbout("barreActive")
    setBorderAccueil("barreInactive")
    }
    
    setLoading(false);
  }, [location, currentPath]);


  return loading ? (
    <div>loading...</div>
  ) :(
    <header className="headerContainer">
      <img src={require("../../img/logo.png")} alt="logo kasa" />
      <nav>
        <Link to="/" className={borderAccueil} >Accueil</Link>
        <Link to="/about-us" className={borderAbout} >A Propos</Link> 
  
      </nav>
    </header>
  );
};

export default Header;
