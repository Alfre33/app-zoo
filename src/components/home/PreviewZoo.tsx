// components/PreviewZoo.js
"use client";

import { useState, useEffect } from "react";
import CardZoo from "./CardZoo";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

export default function PreviewZoo() {
  const dataCard = [
    {
      id: 1,
      title: "Wooden House, Florida",
      content:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ",
    },
    {
      id: 2,
      title: "Modern Loft, New York",
      content:
        "A cozy loft in the heart of the city, surrounded by modern design and vibrant city life.",
    },
    {
      id: 3,
      title: "Beach Villa, Hawaii",
      content:
        "A beautiful villa with breathtaking ocean views, soft sandy beaches, and endless blue ",
    },
    {
      id: 4,
      title: "Mountain Cabin, Colorado",
      content:
        "A rustic cabin surrounded by snowy peaks, tranquil lakes, and lush pine forests.",
    },
    {
      id: 5,
      title: "Desert Oasis, Arizona",
      content:
        "A secluded retreat in the heart of the desert, surrounded by beautiful landscapes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Configurar el ancho de pantalla para Tailwind Breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // "sm" breakpoint en Tailwind es 640px
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (isSmallScreen) {
      setCurrentIndex((prevIndex) =>
        prevIndex < dataCard.length - 1 ? prevIndex + 1 : 0
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex < dataCard.length - 3 ? prevIndex + 1 : 0
      );
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : dataCard.length - 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto flex items-center justify-center overflow-hidden">
      {/* Contenedor de Cards */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${
            isSmallScreen ? currentIndex * 100 : currentIndex * 33.33
          }%)`,
        }}
      >
        {dataCard.map((card) => (
          <div
            key={card.id}
            className={`flex-shrink-0 ${
              isSmallScreen ? "w-full" : "w-[33.33%]"
            } px-2`}
          >
            <CardZoo dataCard={card} />
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={handlePrev}
        disabled={isSmallScreen && currentIndex === 0}
        className="absolute left-4 p-4 bg-gray-200 opacity-70 rounded-full shadow-md disabled:opacity-40"
      >
        <MdOutlineNavigateBefore size={30} />
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        className="absolute right-4 p-4 bg-gray-200 rounded-full shadow-md"
      >
        <MdOutlineNavigateNext size={30} />
      </button>
    </div>
  );
}
