'use client'
import Image from 'next/image';
import {useState} from 'react'

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(1);
  const images = [
    'https://img.freepik.com/free-psd/zoo-park-landing-page-template_23-2148636172.jpg?t=st=1729927509~exp=1729931109~hmac=f716a2a1ade4373d757ba966dbf771f13a8e71960b727f08b92c688e6e510d71&w=826',
    'https://img.freepik.com/free-psd/zoo-park-banner-page-template_23-2148636171.jpg?t=st=1729927587~exp=1729931187~hmac=fb3694cc9976d26a591fd4942d6fdd2ac5ea05c293867032f7bb53270caf592c&w=826',
    'https://img.freepik.com/free-psd/zoo-park-banner-page-template-with-photo_23-2148636174.jpg?t=st=1729927552~exp=1729931152~hmac=3c17224c85e8fda8d6802c09c0a63d150388b9353cc516d2f407edf5bdb2eb56&w=826',
  ];

  const back = () => {
    setCurrentIndex((prevIndex:number) => (prevIndex > 1 ? prevIndex - 1 : prevIndex));
  };

  const next = () => {
    setCurrentIndex((prevIndex:number) => 
      prevIndex < images.length ? prevIndex + 1 : 1
    );
  };
  return (
    <article className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
      <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
        <span>{currentIndex}</span>/
        <span>{images.length}</span>
      </div>

      {images.map((image, index) => (
        <figure
          key={index}
          className="h-80 flex items-center justify-center"
          style={{ display: currentIndex === index + 1 ? 'block' : 'none' }}
        >
          <Image
            src={image}
            // priority={true}
            quality={100}
            alt="Image"
            width={100}
            height={100}
            className="absolute inset-0 z-10 h-80 w-full object-cover opacity-90"
          />
          {/* <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
            Any kind of content here! Primum in nostrane potestate est, quid meminerimus? Nulla erit controversia. Vestri haec verecundius, illi fortasse constantius.
          </figcaption> */}
        </figure>
      ))}

      <button onClick={back}
        className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
        <svg className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7">
          </path>
        </svg>
      </button>

      <button onClick={next}
        className="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
        <svg className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </article>
  )
}
