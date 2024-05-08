import React, { useState } from "react";
import Mimi from "../img/Mimi.png";

export default function Container() {
  const [mimiHovered, setMimiHovered] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div
        onMouseEnter={() => setMimiHovered(true)}
        onMouseLeave={() => setMimiHovered(false)}
      >
        <img
          src={Mimi}
          alt="mimi cat"
          className={`transition-opacity ${mimiHovered ? "opacity-70 cursor-pointer" : "opacity-100"}`}
        />
        <p
          className={`absolute bottom-[140px] transition-opacity ${mimiHovered ? "opacity-100" : "opacity-0"}`}
        >
          Mimi
        </p>
      </div>
      <div className="h-[100px] w-[80%] bg-colorRetangle rounded-md" />
    </div>
  );
}
