import React from "react";
import icons8 from "./images/icons/icons8-bootstrap-logo-256.png";
import icons7 from "./images/icons/icons8-css-logo-240.png";
import icons6 from "./images/icons/icons8-html-logo-240.png";
import icons5 from "./images/icons/icons8-javascript-250.png";
import icons4 from "./images/icons/icons8-mongodb-240.png";
import icons3 from "./images/icons/icons8-mysql-logo-240.png";
import icons2 from "./images/icons/icons8-nodejs-240.png";
import icons1 from "./images/icons/icons8-react-160.png";
import icons0 from "./images/icons/icons8-tailwindcss-240.png";

export default function Stack() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 place-items-center mx-0 pb-4 bg-teal-900">
      <h1 className="text-4xl font-bold text-gray-100 text-center pb-4 pt-12">
        My Technical Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-3 gap-4 place-items-center">
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img className="w-20 sm:w-30" src={icons6} alt="HTML" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img className="w-20 sm:w-30" src={icons7} alt="CSS" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img className="w-20 sm:w-30" src={icons0} alt="TailWind" />
          <p className="mt-2">TailWind</p>
        </div>
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img
            className="w-20 sm:w-30 rounded-xl"
            src={icons8}
            alt="Bootstrap"
          />
          <p className="mt-2">Bootstrap</p>
        </div>
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img className="w-20 sm:w-30" src={icons5} alt="JavaScript" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img className="w-20 sm:w-30" src={icons2} alt="NodeJS" />
          <p className="mt-2">NodeJS</p>
        </div>
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img className="w-20 sm:w-30" src={icons1} alt="React" />
          <p className="mt-2">React</p>
        </div>
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img className="w-20 sm:w-30" src={icons4} alt="MongoDB" />
          <p className="mt-2">MongoDB</p>
        </div>
        <div className="border rounded-xl shadow-lg p-2 m-2 bg-gray-300 text-gray-800 border border-teal-800">
          <img className="w-20 sm:w-30" src={icons3} alt="MySQL" />
          <p className="mt-2">MySQL</p>
        </div>
      </div>
    </div>
  );
}
