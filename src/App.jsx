import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Slider from "./mycomponents/Slider";
import "./App.css";

const App = () => {
  const slides = [
    {
      titre: "1 Bonjour les amis",
      contenu: "Premier test de slider avec React. ",
      image: reactLogo,
    },
    {
      titre: "2 Deuxième slide",
      contenu:
        "Deuxième slide avec un contenu différent. On peut mettre ce qu'on veut.",
      image: viteLogo,
    },
    {
      titre: "3 Lucas",
      contenu: "Gros con de première",
      image: reactLogo,
    },
  ];
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const total = slides.length;

  const handlePrev = () => {
    setIndex((index - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((index + 1) % total);
  };

  return (
    <div class="">
      <div class="h-96 bg-stone-50 shadow-md rounded-md ml-10 mr-10 mt-10 border-solid border-0 border-black">
        <Slider
          titre={<h1 style={{ fontSize: "27px" }}>{slide.titre}</h1>}
          contenu={slide.contenu}
          image={slide.image}
        />
      </div>
      <div class="flex justify-center">
        <p>
          Slide {index + 1} of {total}
        </p>{" "}
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
    </div>
  );
};
export default App;
