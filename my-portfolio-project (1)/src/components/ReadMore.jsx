import React from "react";

function ReadMoreComponent({ onClose }) {
  return (
    <div>
      <p>
        I am experienced in Incorporating third-party libraries and tools like
        React, Vanilla, Mongoose, NPM or Node.js to add Functionality,
        Streamline Development, improve Maintainability, Data Handling, API
        Integration, Connecting the Frontend to backend, APIs fetching and
        displaying data in real-time. I have Written clean, modular, and
        maintainable code that can be easily extended or updated. With version
        control systems like Git, I have collaborated with other developers and
        manage code changes. I ensure that the frontend is designed in a way
        that search engines can easily crawl and index the content, Which gives
        your website an edge over others. I can make your brand shine and give
        users an amazing online journey.
      </p>
      <button
        onClick={onClose}
        className="border border-white uppercase font-semibold tracking-wider leading-none hover:scale-110 transform transition-transform duration-300 ease-in px-2 py-2 bg-teal-800 rounded-xl hover:text-gray-50 text-gray-50"
      >
        Close
      </button>
    </div>
  );
}

export default ReadMoreComponent;
