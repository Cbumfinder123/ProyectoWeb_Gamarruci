import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BanerN.css';

const BanerN = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const slides = [
    { image: '/images/bann1.jpeg', link: '/bands/deftonesn' },
    { image: '/images/bann2.jpeg', link: '/bands/greendayn' },
    { image: '/images/bann3.jpeg', link: '/producto/66' },
    { image: '/images/bann4.jpeg', link: '/bands/thecure-guitar' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carouselN">
      <div className="slideN">
        <img
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          className="imageN"
          onClick={() => navigate(slides[current].link)}
        />
      </div>
      <div className="indicatorsN">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicatorN ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BanerN;
