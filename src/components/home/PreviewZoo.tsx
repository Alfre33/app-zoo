'use client';

import { useState } from "react";
import CardZoo from "./CardZoo";

export default function PreviewZoo() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const dataCard = [
      { id: 1, title: 'Wooden House, Florida', content: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stonewalls, and open meadows.' },
      { id: 2, title: 'Wooden House, Florida', content: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stonewalls, and open meadows.' },
      { id: 3, title: 'Wooden House, Florida', content: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stonewalls, and open meadows.' },
      { id: 4, title: 'Wooden House, Florida', content: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stonewalls, and open meadows.' },
      { id: 5, title: 'Wooden House, Florida', content: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stonewalls, and open meadows.' },
    ];
  
    const cardWidthPercentage = 50; // Ancho de cada card (40%)
  
    const handleNext = () => {
      if (currentIndex < dataCard.length - 2) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
  return (
    <div className="relative w-full max-w-screen-lg mx-auto flex items-center justify-center overflow-hidden">
    

    {/* Contenedor de Cards */}
    <div
      className="flex transition-transform duration-500 ease-out"
      style={{
        transform: `translateX(-${currentIndex * (cardWidthPercentage + 5)}%)`, // Ajusta la posición según el índice
      }}
    >
      
      {dataCard.map((card) => (
       <CardZoo key={card.id} dataCard={card}/>
       
      ))}
    </div>
  {/* Botón Anterior */}
  <button
      onClick={handlePrev}
      disabled={currentIndex === 0}
      className="absolute left-4 p-2 bg-gray-200 rounded-full shadow-md disabled:opacity-50"
    >
      Prev
    </button>
    {/* Botón Siguiente */}
    <button
      onClick={handleNext}
      disabled={currentIndex >= dataCard.length - 2}
      className="absolute right-4 p-2 bg-gray-200 rounded-full shadow-md disabled:opacity-50"
    >
      Next
    </button>
  </div>
  )
}
