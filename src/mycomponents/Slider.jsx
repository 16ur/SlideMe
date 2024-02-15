import React from "react";

export default Slider;

function Slider({ titre, sousTitre, contenu, image, imageSize }) {
  return (
    <div className="slider-container">
      <h1>{titre}</h1>
      <h2>{sousTitre}</h2>
      <p>{contenu}</p>
      <div className="w-full">{image}</div>
    </div>
  );
}
