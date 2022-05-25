import React from "react";
import "./Cover.css";
import coverVideo from "../../media/spot.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>PANADERÍA SANTA ISABEL</h1>
      <p> Pasteles | Pan | Buñuelos | Postres  </p>
    </div>
  );
};

export default Cover;
