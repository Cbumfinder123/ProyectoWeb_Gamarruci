import React, { useState, useEffect } from "react";
import './BannerC.css';

const images = [
  "/images/Ban1.webp",
  "/images/Ban2.webp",
  "/images/Ban3.webp",
  "/images/Ban4.webp",
  "/images/Ban5.webp"
];

const BannerC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container" data-aos="zoom-in">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className="carousel-image"
            key={index}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default BannerC;
