import React from "react";

export default function Slider({
  titre,
  sousTitre,
  para,
  image,
  imageSize,
  listePuces,
  listeNum,
  code,
}) {
  return (
    <div className="slider-container">
      <h1>{titre}</h1>
      <h2>{sousTitre}</h2>
      <p>{para}</p>
      {image && <div>{image}</div>}
      <ul>
        {listePuces &&
          listePuces.map((puce, index) => <li key={index}>• {puce}</li>)}
      </ul>
      <ol>
        {listeNum &&
          listeNum.map((num, index) => (
            <li key={index}>
              {index + 1}. {num}
            </li>
          ))}
      </ol>

      {code && (
        <div>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
