'use client';
import { useState } from 'react';

export default function PropertySlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[300px] overflow-hidden group">
      <img
        src={images[currentIndex].href}
        alt="Property view"
        className="w-full h-full object-cover transition-all duration-500"
      />
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        →
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
