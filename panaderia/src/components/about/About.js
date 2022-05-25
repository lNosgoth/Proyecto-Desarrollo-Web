import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>NOSOTROS</h3>
        <p>
        La empresa panadería “SANTA ISABEL” ha sido creado para satisfacer los gustos más exigentes
        de nuestros consumidores tanto en sabor como en calidad por ello contamos con dos personas 
        expertos en la elaboración de kekes, repostería y panadería en general especiales y repostería en general,
        con pequeñas máquinas de última generación, ambientes saludables, insumos de calidad con registros sanitarios,
        buena ubicación, documentación en regla y además cuenta con el libro de reclamos para satisfacer todas las
        necesidades de los clientes y no solo eso sino que brindaremos un servicio rápido con calidad y puntualidad.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://www.colegiatura.edu.co/wp-content/uploads/2019/06/Diplomatura_PPR_Colegiatura-1024x472.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
