import { useState } from "react";

import Slider from "./mycomponents/Slider";
import "./App.css";
import slidesData from "./slides.json";

const App = () => {
  const [index, setIndex] = useState(0);
  const slide = slidesData[index];
  const total = slidesData.length;

  const handlePrev = () => {
    setIndex((index - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((index + 1) % total);
  };

  return (
    <div className="">
      <div className="h-[33rem] bg-stone-50 shadow-md rounded-md ml-10 mr-10 mt-10 border-solid border-0 border-black">
        <Slider
          titre={<div style={{ fontSize: "29px" }}>{slide.titre}</div>}
          contenu={slide.contenu}
          image={slide.image}
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
      </div>
      <div className="flex justify-center">
        <div>
          <p>
            Slide {index + 1} of {total}
          </p>
        </div>
      </div>
    </div>
  );
};
export default App;
