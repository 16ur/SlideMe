import React from "react";

export default function Slider({
  index,
  type,
  titre,
  sousTitre,
  contenu,
  image,
  imageLeft,
  imageRight,
  imageSize,
  imageLegende,
  listePuces,
  listePucesLeft,
  listePucesRight,
  listeNum,
  code,
  codeLegende,
  Markdown,
}) {
  let content = null;

  if (type) {
    switch (type) {
      case "titreOnly":
        content = (
          <div className="slider-container flex justify-center items-center h-full">
            <h1 className="font-bold">{titre}</h1>
            <div className="">{image && <div>{image}</div>}</div>
            <p>{imageLegende}</p>
            <p className="position: absolute right-3 bottom-3">{index}</p>
          </div>
        );
        break;

      case "titreSousTitre":
        content = (
          <div className="slider-container flex justify-center items-center h-full flex-col">
            {" "}
            <h1 className="font-bold">{titre}</h1>
            <h2>{sousTitre}</h2>
            {image && <div>{image}</div>}
            <p>{imageLegende}</p>
            <p className="absolute bottom-3 right-3">{index}</p>{" "}
          </div>
        );
        break;

      case "titreContenu":
        content = (
          <div className="slider-container">
            <h1 className="text-6xl font-bold text-center">{titre}</h1>
            <p>{contenu}</p>
            <p className="position: absolute right-3 bottom-3">{index}</p>
            <ul className="text-xl mt-7">
              {listePuces &&
                listePuces.map((puce, index) => <li key={index}>• {puce}</li>)}
            </ul>
            <ol className="text-xl mt-7">
              {listeNum &&
                listeNum.map((num, index) => (
                  <li key={index}>
                    {index + 1}. {num}
                  </li>
                ))}
            </ol>
            {Markdown && <div className="text-xl">{Markdown}</div>}

            {code && (
              <div>
                <pre>
                  <code>{code}</code>
                </pre>
              </div>
            )}
            <div className="text-center">
              <p>{codeLegende}</p>
            </div>
            <p className="position: absolute right-3 bottom-3">{index}</p>
          </div>
        );
        break;
      case "contenuSeul":
        content = (
          <div className="slider-container">
            <p>{contenu}</p>
            <p className="position: absolute right-3 bottom-3">{index}</p>
          </div>
        );
        break;
      case "gridColumn":
        content = (
          <div className="slider-container grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-4xl font-bold mt-3 p-2">{titre}</h1>
              <p>{contenu}</p>
              {imageLeft && (
                <div>
                  {imageLeft}
                  <p>{imageLegende}</p>
                </div>
              )}
              <ul className="text-xl mt-7">
                {listePucesLeft &&
                  listePucesLeft.map((puce, index) => (
                    <li key={index}>• {puce}</li>
                  ))}
              </ul>
            </div>
            <div>
              {imageRight && (
                <div>
                  {imageRight}
                  <p>{imageLegende}</p>
                </div>
              )}
              <ul className="text-xl mt-7">
                {listePucesRight &&
                  listePucesRight.map((puce, index) => (
                    <li key={index}>• {puce}</li>
                  ))}
              </ul>
              <ol className="text-xl mt-7">
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
              {Markdown && <div className="text-xl">{Markdown}</div>}
            </div>
            <p className="position: absolute right-3 bottom-3">{index}</p>{" "}
          </div>
        );
        break;

      case "centerElement":
        content = (
          <div className="slider-container flex justify-center items-center h-full">
            {code && (
              <div>
                <pre>
                  <code>{code}</code>
                </pre>
                <div className="text-center">
                  <p>{codeLegende}</p>
                </div>
              </div>
            )}
            <p className="position: absolute right-3 bottom-3">{index}</p>
          </div>
        );
        break;
      default:
        content = (
          <div className="slider-container">
            <p>Diapositive non reconnue</p>
            <p className="position: absolute right-3 bottom-3">{index}</p>{" "}
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
        <p>{imageLegende}</p>
        {Markdown && <div className="text-xl">{Markdown}</div>}

        <ul className="text-xl mt-7">
          {listePuces &&
            listePuces.map((puce, index) => <li key={index}>• {puce}</li>)}
        </ul>
        <ol className="text-xl mt-7">
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
        <p className="position: absolute right-3 bottom-3">{index}</p>
      </div>
    );
  }

  return content;
}
