import React from "react";
import "../styles.css";

const Cursor = () => {
  return (
    <div className="custom-cursor w-6 h-6 bg-red-500 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-150"></div>
  );
};

export default Cursor;
