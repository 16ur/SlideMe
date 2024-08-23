import React, { useState, useEffect } from "react";
import Slider from "./mycomponents/Slider";
import slidesData from "./slides.json";
import {
  faEye,
  faLeftLong,
  faRightLong,
  faExpand,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import WebFont from "webfontloader";

const App = () => {
  const [index, setIndex] = useState(0);
  const slide = slidesData[index];
  const total = slidesData.length;
  const [showPreview, setShowPreview] = useState(false);
  const [showSlideIndex, setShowSlideIndex] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik"],
      },
    });

    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        handlePrev();
      } else if (event.keyCode === 39) {
        // Right arrow key
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index]);

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
    setShowPreview(!showPreview);
  };

  const toggleFullScreen = () => {
    const sliderElement = document.getElementById("slider-container");
    if (sliderElement) {
      if (!isFullScreen) {
        sliderElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  return (
    <div className="App" style={{ fontFamily: "Rubik" }}>
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
              </p>
            </div>
          ))}
        </div>
      )}
      <div
        id="slider-container"
        className="h-[40rem] bg-gray-100 shadow-md rounded-md ml-10 mr-10 mt-10 border-solid border-0 border-black p-6"
      >
        <Slider
          index={showSlideIndex ? index + 1 : null}
          titre={
            <div
              style={{
                fontSize: slide.type === "titreOnly" ? "70px" : "48px",
              }}
            >
              {slide.titre}
            </div>
          }
          sousTitre={<div style={{ fontSize: "25px" }}>{slide.sousTitre}</div>}
          contenu={
            <div
              style={{ fontSize: "23px", marginTop: "40px", margin: "10px" }}
            >
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
                style={{ fontSize: "16px", color: "gray", fontStyle: "italic" }}
              >
                {slide.imageLegende}
              </p>
            )
          }
          listePuces={slide.listePuces}
          listeNum={slide.listeNum}
          code={
            slide.code && (
              <SyntaxHighlighter
                language={slide.langage}
                style={atomDark}
                showLineNumbers={true}
              >
                {slide.code}
              </SyntaxHighlighter>
            )
          }
          codeLegende={
            slide.codeLegende && (
              <p
                style={{ fontSize: "16px", color: "gray", fontStyle: "italic" }}
              >
                {slide.codeLegende}
              </p>
            )
          }
          listePucesLeft={slide.listePucesLeft}
          listePucesRight={slide.listePucesRight}
          Markdown={
            slide.Markdown && <ReactMarkdown>{slide.Markdown}</ReactMarkdown>
          }
          type={slide.type}
        />
      </div>
      <div className="flex justify-center mt-3">
        <button
          onClick={handlePrev}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          <FontAwesomeIcon icon={faLeftLong} />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
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
          {showPreview ? "Masquer l'aperçu" : "Afficher l'aperçu"}
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button onClick={toggleFullScreen} className="underline text-lg">
          {isFullScreen ? (
            <FontAwesomeIcon icon={faCompress} />
          ) : (
            <FontAwesomeIcon icon={faExpand} />
          )}{" "}
          {isFullScreen ? "Quitter le plein écran" : "Mettre en plein écran"}
        </button>
      </div>
    </div>
  );
};

export default App;
