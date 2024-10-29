"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Ajuste del índice inicial a 0
  const images = [
    "https://img.freepik.com/free-psd/zoo-park-landing-page-template_23-2148636172.jpg?t=st=1729927509~exp=1729931109~hmac=f716a2a1ade4373d757ba966dbf771f13a8e71960b727f08b92c688e6e510d71&w=826",
    "https://img.freepik.com/free-psd/zoo-park-banner-page-template_23-2148636171.jpg?t=st=1729927587~exp=1729931187~hmac=fb3694cc9976d26a591fd4942d6fdd2ac5ea05c293867032f7bb53270caf592c&w=826",
    "https://img.freepik.com/free-psd/zoo-park-banner-page-template-with-photo_23-2148636174.jpg?t=st=1729927552~exp=1729931152~hmac=3c17224c85e8fda8d6802c09c0a63d150388b9353cc516d2f407edf5bdb2eb56&w=826",
  ];

  // Función para ir a la imagen anterior
  const back = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  // Función para ir a la siguiente imagen
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Temporizador para el cambio automático de imagen cada 12 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 12000);

    // Limpia el temporizador cuando se desmonta el componente o se actualiza
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className=" relative">
      {/* Contenedor de imágenes */}
      <div className="overflow-hidden relative h-60 rounded-lg sm:h-64 xl:h-80 2xl:h-96 w-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-12/12  h-6/6 absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill" // Ocupar todo el contenedor
              objectFit="cover" // Ajusta la imagen sin distorsión
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Indicadores de carrusel */}
      <div className="flex justify-center space-x-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        {/* Botón Anterior */}
        <button
          type="button"
          onClick={back}
          className="absolute left-4 transform -translate-y-1/2 p-2 bg-white/50 rounded-full shadow-md focus:outline-none hover:bg-white/70"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Botón Siguiente */}
        <button
          type="button"
          onClick={next}
          className="absolute right-4 transform -translate-y-1/2 p-2 bg-white/50 rounded-full shadow-md focus:outline-none hover:bg-white/70"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
