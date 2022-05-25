import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>PANADERÍA SANTA ISABEL</h1>
        <p>Medellín, Antioquía.</p>
      </div>
      <div className="footer-contact">
        <h3>CONTACTANOS</h3>
        <p>3116911711</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">SABORES SIN LIMITES...</div>
        <div className="sns-links">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;


