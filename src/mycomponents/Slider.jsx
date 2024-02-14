import React from "react";

export default Slider;

function Slider({ titre, contenu, image }) {
  return (
    <div>
      <h1>{titre}</h1>
      <p>{contenu}</p>
      <img src={image} alt="image" />
    </div>
  );
}
