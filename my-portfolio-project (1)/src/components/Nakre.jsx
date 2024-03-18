import React, { useState } from "react";
import Nakredite from "../components/images/IMG_8182.JPG";
import { Link } from "react-router-dom";
import "../styles.css";
import ReadMoreComponent from "./ReadMore"; // Import the ReadMoreComponent

export default function Nakre() {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
  };

  return (
    <div
      className="flex flex-wrap bg-gray-200 text-red-950 font-bold p-20"
      id="Dite"
    >
      <div className="w-full md:w-1/2 lg:w-1/3 p-6">
        <img
          className="mx-auto h-auto shadow rounded-3xl border-2 border-transparent cursor-pointer"
          id="Nakredite"
          src={Nakredite}
          alt="MyPhoto"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 p-4 mt-20 pr-20 text-gray-900">
        <p className="mt-10 mb-2 font-bold text-lg">LET ME INTRODUCE MYSELF</p>
        <h1 className="text-4xl text-gray-900 ">About Me</h1>
        <p>
          I am Hussaini Nakre, a frontend developer who crafts websites that
          work beautifully on any device. Over the years, responsiveness has
          been the main Bain in web-Development. To attain that, I make sure the
          site runs smoothly on all browsers, loads fast, and feels great to
          use. This improves the overall user experience by creating intuitive
          and user-friendly interfaces.
        </p>
        {isReadMoreOpen ? (
          <ReadMoreComponent onClose={toggleReadMore} />
        ) : (
          <button
            onClick={toggleReadMore}
            className="mt-12 border border-white uppercase font-semibold tracking-wider leading-none hover:scale-110 transform transition-transform duration-300 ease-in px-2 py-2 bg-teal-800 rounded-xl hover:text-gray-50 text-gray-50"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
}
