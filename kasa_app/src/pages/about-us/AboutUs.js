import React from "react";
import "../about-us/aboutUs.css";
import Banner from "../../components/banner/Banner";
import { aboutList } from "./aboutList";
import Collapse from "../../components/collapse/Collapse";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Banner name="bannerAboutUs" />
      <div className="aboutList-container">
        <div className="aboutList-content">
          {aboutList.map((about) => (
            <Collapse
              title={about.title}
              content={about.content}
              key={about.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
