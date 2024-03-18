import React from "react";
import ScrollButton from "./ScrollButton";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-300 p-20 ">
      <div className="container mx-auto text-gray-950 font-bold">
        <div className="flex flex-col items-center">
          <h1 className="pb-4">
            Would you like to hire me??? If So, Send a message using any of the
            links above▲
          </h1>
          <p>©2023 Nakredite. All rights reserved.........</p>
          <div className="mt-4">
            <ScrollButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
