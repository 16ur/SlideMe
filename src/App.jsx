import { useState } from "react";

import Slider from "./mycomponents/Slider";
import "./App.css";
import slidesData from "./slides.json";
import {
  faEye,
  faLeftLong,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import CustomDropdown from "./CustomDropdown"; // Importez le composant de menu personnalisé

const App = () => {
  const [index, setIndex] = useState(0);
  const slide = slidesData[index];
  const total = slidesData.length;
  const [showPreview, setShowPreview] = useState(false);
  const [showSlideIndex, setShowSlideIndex] = useState(true);

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
    setShowSlideIndex(!showSlideIndex);
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
              className={`w-40 h-24 bg-gray-200 m-2 ${
                index === i ? "border-2" : ""
              }`}
              onClick={() => setIndex(i)}
              style={{
                border: "1px solid black",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "red";
                e.target.style.transform = "scale(1.1)";
                e.target.style.transition = "transform 0.3s ease";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "black";
                e.target.style.transform = "scale(1)";
                e.target.style.transition = "transform 0.3s ease";
              }}
            >
              <p className="text-center justify-center text-black-500 text-7xl">
                {i + 1}
              </p>{" "}
            </div>
          ))}
        </div>
      )}
      <div className="h-[40rem] bg-gray-100 shadow-md rounded-md ml-10 mr-10 mt-10 border-solid border-0 border-black">
        <Slider
          index={showSlideIndex ? index + 1 : null}
          titre={
            <div
              style={{ fontSize: slide.type === "titreOnly" ? "55px" : "35px" }}
            >
              {slide.titre}
            </div>
          }
          sousTitre={<div style={{ fontSize: "25px" }}>{slide.sousTitre}</div>}
          contenu={
            <div style={{ fontSize: "20px", marginTop: "20px" }}>
              {slide.contenu}
            </div>
          }
          image={
            slide.image && (
              <img
                src={slide.image}
                alt="Slide Image"
                style={{ width: slide.imageSize }}
              />
            )
          }
          imageLeft={
            slide.imageLeft && (
              <img
                src={slide.imageLeft}
                alt="Slide Image"
                style={{ width: slide.imageSize }}
              />
            )
          }
          imageRight={
            slide.imageRight && (
              <img
                src={slide.imageRight}
                alt="Slide Image"
                style={{ width: slide.imageSize }}
              />
            )
          }
          imageLegende={
            slide.imageLegende && (
              <p
                style={{ fontSize: "15px", color: "gray", fontStyle: "italic" }}
              >
                {slide.imageLegende}
              </p>
            )
          }
          listePuces={slide.listePuces}
          listeNum={slide.listeNum}
          code={
            slide.code && (
              <SyntaxHighlighter language={slide.langage}>
                {slide.code}
              </SyntaxHighlighter>
            )
          }
          listePucesLeft={slide.listePucesLeft}
          listePucesRight={slide.listePucesRight}
          markDown={
            slide.markDown && <ReactMarkdown>{slide.markDown}</ReactMarkdown>
          }
          type={slide.type}
        />
      </div>
      <div className="flex justify-center mt-3">
        <button
          onClick={handlePrev}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          {" "}
          <FontAwesomeIcon icon={faLeftLong} />
        </button>
        <button
          onClick={handlePrev}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          {" "}
          <FontAwesomeIcon icon={faRightLong} />
        </button>
        <input
          type="number"
          min="1"
          max={total}
          onChange={handleGoToSlide}
          className="bg-white border border-gray-300 rounded"
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
