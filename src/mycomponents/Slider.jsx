import React from "react";

export default function Slider({
  titre,
  sousTitre,
  contenu,
  image,
  imageSize,
}) {
  return (
    <div className="slider-container">
      <h1>{titre}</h1>
      <h2>{sousTitre}</h2>
      <p>{contenu}</p>
      <div className={`${imageSize}`}>{image}</div>
    </div>
  );
}
