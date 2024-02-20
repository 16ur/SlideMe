import { useState } from "react";

import Slider from "./mycomponents/Slider";
import "./App.css";
import slidesData from "./slides.json";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      {showPreview && ( // Afficher l'aperçu uniquement si showPreview est vrai
        <div className="flex justify-center mt-10">
          {slidesData.map((slide, i) => (
            <div
              key={i}
              className="w-20 h-20 bg-gray-200 m-2 rounded-md"
              onClick={() => setIndex(i)}
            >
              <img
                src={slide.image}
                alt={slide.titre}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      <div className="h-[33rem] bg-gray-100 shadow-md rounded-md ml-10 mr-10 mt-10 border-solid border-0 border-black">
        <Slider
          titre={<div style={{ fontSize: "29px" }}>{slide.titre}</div>}
          sousTitre={<div style={{ fontSize: "22px" }}>{slide.sousTitre}</div>}
          contenu={<div style={{ fontSize: "18px" }}>{slide.contenu}</div>}
          image={<img src={slide.image} alt={slide.titre} />}
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
