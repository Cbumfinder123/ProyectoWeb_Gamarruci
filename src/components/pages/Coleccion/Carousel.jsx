import React, { useState } from 'react';
import './Carousel.css'; 

const Carousel = () => {
  const totalItems = 9; 
  const itemsPerPage = 3; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/images/Car1.webp',
    '/images/Car2.webp',
    '/images/Car3.webp',
    '/images/Car4.webp',
    '/images/Car5.webp',
    '/images/Car6.webp',
    '/images/Car7.webp',
    '/images/Car8.webp',
    '/images/Car9.webp',
  ];

  const nextPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentIndex + itemsPerPage < totalItems) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const renderItems = () => {
    const items = [];
    for (let i = currentIndex; i < Math.min(currentIndex + itemsPerPage, totalItems); i++) {
      items.push(
        <div className="itemI" key={i}>
          <img src={images[i]} alt={`Cuadrado ${i + 1}`} className="item-imageI" />
          <button className="buy-buttonI" onClick={(e) => e.preventDefault()}>Shop Now</button>
        </div>
      );
    }
    return items;
  };

  return (
    <div className="carouselI">
      {currentIndex > 0 && (
        <button type="button" className="prev-buttonI" onClick={(e) => prevPage(e)}>←</button>
      )}
      <div className="itemsI">
        {renderItems()}
      </div>
      {currentIndex + itemsPerPage < totalItems && (
        <button type="button" className="next-buttonI" onClick={(e) => nextPage(e)}>→</button>
      )}
    </div>
  );
};

export default Carousel;
