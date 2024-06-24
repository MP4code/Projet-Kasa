import React from "react";
import "../footer/footer.css";
import Logo from "../../img/LOGO (1).png"
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <img src={Logo} alt="Logo Kasa"/>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
