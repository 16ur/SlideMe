import React from "react";

export default function Slider({
  type,
  titre,
  sousTitre,
  contenu,
  image,
  imageSize,
  listePuces,
  listeNum,
  code,
  markDown,
}) {
  let content = null;

  if (type) {
    switch (type) {
      case "titreOnly":
        content = (
          <div className="slider-container flex justify-center items-center h-full">
            <h1 className="text-6xl font-bold">{titre}</h1>
            {image && <div>{image}</div>}
          </div>
        );
        break;

      case "titreContenu":
        content = (
          <div className="slider-container">
            <h1 className="text-4xl font-bold text-center">{titre}</h1>
            <p>{contenu}</p>
          </div>
        );
        break;
      case "contenuSeul":
        content = (
          <div className="slider-container">
            <p>{contenu}</p>
          </div>
        );
        break;
      case "gridColumn":
        content = (
          <div className="slider-container grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-4xl font-bold">{titre}</h1>
              <p>{contenu}</p>
              {image && <div>{image}</div>}
            </div>
            <div>
              <ul>
                {listePuces &&
                  listePuces.map((puce, index) => (
                    <li key={index}>• {puce}</li>
                  ))}
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
              {markDown && <div>{markDown}</div>}
            </div>
          </div>
        );
        break;
      default:
        content = (
          <div className="slider-container">
            <p>Diapositive non reconnue</p>
          </div>
        );
    }
  } else {
    content = (
      <div className="slider-container">
        <h1>{titre}</h1>
        <h2>{sousTitre}</h2>
        <p>{contenu}</p>
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
        {markDown && <div>{markDown}</div>}
      </div>
    );
  }

  return content;
}
