import React from "react";
import gmail from "./images/icons/icons8-gmail-login-24.png";
import whatsapp from "./images/icons/icons8-whatsapp-24.png";
import github from "./images/icons/icons8-github-50.png";
import linkedin from "./images/icons/icons8-linkedin-30.png";
import "../styles.css";

function Contact() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };}
  
export default function Contacts() {
  return (
    <div className="flex-container flex flex-col items-center justify-center min-h-screen bg-teal-900 text-gray-100">
      <h1 className="text-4xl font-bold text-gray text-center mt-0">Contact</h1>
      <a
        href="mailto:jamesnakre@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-list-item border p-2 m-2 rounded-lg text-center flex items-center transition-transform transform hover:scale-105 mb-0"
      >
        <div className="flex flex-col items-center shadow-xl">
          <img className="w-3 h-3" src={gmail} alt="Email" />
          <span>Email</span>
        </div>
      </a>
      <a
        href="https://wa.me/8163335069?text=hello"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-list-item border p-2 m-2 rounded-lg text-center flex flex-col items-center transition-transform transform hover:scale-105 mb-0"
      >
        <div className="flex flex-col items-center shadow-xl">
          <img className="w-4 h-4" src={whatsapp} alt="WhatsApp" />
          <span>WhatsApp</span>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/hussaini-nakre-nakredite/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-list-item transition-transform transform hover:scale-105 mb-0"
      >
        <div className="flex flex-col items-center shadow-xl">
          <img className="w-4 h-4" src={linkedin} alt="LinkedIn" />
          <span>LinkedIn</span>
        </div>
      </a>
      <a
        href="https://github.com/Nakredite"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-list-item transition-transform transform hover:scale-105 mb-0"
      >
        <div className="flex flex-col items-center shadow-xl">
          <img className="w-4 h-4" src={github} alt="GitHub" />
          <span>GitHub</span>
        </div>
      </a>
    </div>
  );
}

