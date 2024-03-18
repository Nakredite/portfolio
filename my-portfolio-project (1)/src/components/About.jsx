import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import Resume from "../components/images/IMG_8296.PNG";

export default function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    "I'm Hussaini Nakre",
    "A frontend developer",
    "A Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="mt-20 p-20 bg-teal-900 font-bold text-gray-50">
        <div className="text-left">
          {" "}
          {/* Add a container and set text-left for left alignment */}
          <h2 className="text-4xl mt-20 pb-5 ">Hello 👋🏻👋🏻</h2>
          <h1
            style={{
              paddingTop: "1rem",
              margin: "auto 0",
              fontWeight: "normal",
              color: "rgb(253 186 116)",
              Weight: "bold"
            }}
          >
            ⏤{" "}
            <span style={{ fontWeight: "900" }}>
              <Typewriter
                words={words}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
                loop
              />
            </span>
          </h1>
          <p className="mb-6">
            I specialize in creating user-friendly and visually appealing
            interfaces for websites and web applications.
          </p>
        </div>
        <div class="flex flex-wrap pb-4">
          <a
            href={Resume} // Replace with the actual path or URL to your PDF file
            download="your-resume.pdf" // Specify the desired name for the downloaded file
            className="mb-2 md:mr-6 bg-transparent hover:bg-orange-100 text-gray-50 font-semibold hover:text-teal-900 py-2 px-4 border border-gray-50 hover:border-transparent rounded"
          >
            Download résumé
          </a>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="mb-2 bg-transparent hover:bg-orange-100 text-gray-50 font-semibold hover:text-teal-900 py-2 px-4 border border-gray-50 hover:border-transparent rounded">
              Talk To Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
