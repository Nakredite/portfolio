import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles.css";
import stopwatch from "../components/images/istockphoto-844170636-612x612.jpeg";
import TodoLIst from "../components/images/todolistphoto.png";
import weather from "../components/images/weather-app-icons.jpeg";

export default function ProjectsC() {
  return (
    <section className="bg-gray-200 text-center pr-10 pl-10 md:p-10">
      <h2 className="text-4xl font-bold text-gray-900 pb-4">
        Some of my Recent Projects
      </h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true} // Enable auto play
        interval={8000} // Set the interval (in milliseconds) for auto advancement
        infiniteLoop={true}
        dynamicHeight={false}
        emulateTouch={true}
        stopOnHover={true}
      >
        <div className="border rounded-xl shadow-md p-4 transition-transform hover:scale-105 project-container project-card">
          <div className="border rounded-xl shadow-md p-4 transition-transform hover:scale-105 project-container project-card">
            <img
              src={stopwatch}
              alt="StopwatchApp"
              loading="lazy"
              className="w-20 mx-auto"
            />
            <h3 className="text-xl font-semibold mt-2">Stopwatch WebApp</h3>
            <p className="text-gray-700 mt-2">
              The app functions as a digital stopwatch. It allows users to
              measure and track elapsed time for various activities. Users can
              start, stop, and reset the stopwatch to measure time intervals.
              You can check the App.
            </p>
            <a
              href="#"
              target="_blank"
              className="text-teal-900 hover:underline mt-2 block"
            >
              Check it Out‣
            </a>
          </div>
        </div>

        <div className="border rounded-xl shadow-md p-4 transition-transform hover:scale-105 project-container project-card">
          <div className="border rounded-xl shadow-md p-4 transition-transform hover:scale-105 project-container project-card">
            <img
              src={TodoLIst}
              alt="TodolistApp"
              loading="lazy"
              className="w-20 mx-auto"
            />
            <h3 className="text-xl font-semibold mt-2">TodoLIst WebApp</h3>
            <p className="text-gray-700 mt-2">
              This app helps you to make a list of tasks that you need to
              complete or accomplish. You can check the App
            </p>
            <a
              href="#"
              target="_blank"
              className="text-teal-900 hover:underline mt-2 block"
            >
              Check it Out‣
            </a>
          </div>
        </div>

        <div className="border rounded-xl shadow-md p-4 transition-transform hover:scale-105 project-container project-card">
          <img
            src={weather}
            alt="WeatherApp"
            loading="lazy"
            className="w-20 mx-auto"
          />
          <h3 className="text-xl font-semibold mt-2">WeatherApp</h3>
          <p className="text-gray-700 mt-2">
            You can find the weather report of any city of the world in this
            App. Enter the city name👇 to find out
          </p>
          <a
            href="#"
            target="_blank"
            className="text-teal-900 hover:underline mt-2 block"
          >
            Check it Out‣
          </a>
        </div>
      </Carousel>
    </section>
  );
}
