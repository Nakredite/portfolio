import React, { useState, useEffect } from "react";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 pt-3 pb-2 pr-1 pl-1 bg-teal-600 text-white rounded-lg shadow-md hover:bg-green-950 transition duration-300"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.354 1.146a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1-.708.708L8 2.707 2.354 8.854a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M8 0a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollButton;
