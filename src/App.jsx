import { useState } from "react";

import Slider from "./mycomponents/Slider";
import "./App.css";
import slidesData from "./slides.json";
import { faEye, faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [index, setIndex] = useState(0);
  const slide = slidesData[index];
  const total = slidesData.length;
  const [showPreview, setShowPreview] = useState(false); // Ajout de l'état pour afficher/masquer l'aperçu

  const handlePrev = () => {
    setIndex((index - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((index + 1) % total);
  };

  const handleGoToSlide = (event) => {
    const slideNumber = parseInt(event.target.value);
    if (!isNaN(slideNumber) && slideNumber >= 1 && slideNumber <= total) {
      setIndex(slideNumber - 1);
    }
  };

  const handleGoToFirstSlide = () => {
    setIndex(0);
  };

  const handleGoToLastSlide = () => {
    setIndex(total - 1);
  };

  const hideIndexSlide = () => {
    const slideIndex = document.getElementById("slideIndex");
    slideIndex.style.display =
      slideIndex.style.display === "none" ? "block" : "none";
  };

  const togglePreview = () => {
    setShowPreview(!showPreview); // Inverser l'état de l'aperçu
  };

  return (
    <div className="">
      {showPreview && (
        <div className="flex justify-center mt-10">
          {slidesData.map((slide, i) => (
            <div
              key={i}
              className={`w-40 h-24 bg-gray-200 m-2 rounded-md ${
                index === i ? "border-2" : ""
              }`}
              onClick={() => setIndex(i)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={slide.image}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}
      <div className="h-[40rem] bg-gray-100 shadow-md rounded-md ml-10 mr-10 mt-10 border-solid border-0 border-black">
        <Slider
          titre={
            <div
              style={{ fontSize: slide.type === "titreOnly" ? "55px" : "35px" }}
            >
              {slide.titre}
            </div>
          }
          sousTitre={<div style={{ fontSize: "25px" }}>{slide.sousTitre}</div>}
            contenu={<div style={{ fontSize: "20px", marginTop: "20px" }}>{slide.contenu}</div>}
          image=      {slide.image && <img src={slide.image} alt="Slide Image" style={{ width: slide.imageSize }} />}
          listePuces={slide.listePuces}
          listeNum={slide.listeNum}
          code={
            slide.code && (
              <SyntaxHighlighter language={slide.langage}>
                {slide.code}
              </SyntaxHighlighter>
            )
          }
          markDown={
            slide.markDown && <ReactMarkdown>{slide.markDown}</ReactMarkdown>
          }
          type={slide.type}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handlePrev}
          className="mx-2 mt-10 bg-zinc-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        >
          Précédent
        </button>
        <button
          onClick={handleNext}
          className="mx-2 mt-10 bg-zinc-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        >
          Suivant
        </button>
        <input
          type="number"
          min="1"
          max={total}
          onChange={handleGoToSlide}
          className="mx-2 mt-10 bg-white border border-gray-300 rounded py-2 px-4"
          style={{ width: "60px", textAlign: "center" }}
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleGoToFirstSlide}
          className="underline mr-2 text-lg"
        >
          Début
        </button>
        <button onClick={handleGoToLastSlide} className="underline text-lg">
          Fin
        </button>
      </div>
      <div className="flex justify-center">
        <p id="slideIndex">
          Slide {index + 1} / {total}
        </p>
        <p> </p>
        <button onClick={hideIndexSlide}>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button onClick={togglePreview} className="underline text-lg">
          {showPreview ? "Masquer l'aperçu" : "Afficher l'aperçu"} {}
        </button>
      </div>
    </div>
  );
};
export default App;
