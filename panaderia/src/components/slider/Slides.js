import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://duquesa.com.co/wp-content/uploads/duquesa-blog-productos-que-no-pueden-faltar-productos-muffins.jpg",
    alt: "Muffins",
    desc: "Muffins",
  },
  {
    src:
      "https://duquesa.com.co/wp-content/uploads/duquesa-blog-productos-que-no-pueden-faltar-rollos-canela-panaderia.jpg",
    alt: "Rollos de canela",
    desc: "Rollos de canela",
  },
  {
    src:
      "https://duquesa.com.co/wp-content/uploads/duquesa-blog-productos-que-no-pueden-faltar-brownies-gourmet.jpg",
    alt: "Brownies gourmet",
    desc: "Brownies gourmet",
  },
  
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
