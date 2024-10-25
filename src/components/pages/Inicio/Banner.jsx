import React, { useState, useEffect,useRef } from 'react';
import Ant from '/images/anterior.png';  
import Sig from '/images/siguiente.png'; 
import "./Banner.css";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); 
  const audioRef = useRef(null); 
  const [timer, setTimer] = useState(null); 
  
  const slides = [
    {
      image: "/images/Fondo1.jpg",
      title: 'Deftones',
      description: 'Deftones fusiona metal alternativo con melodías etéreas, creando un sonido único que explora emociones profundas.',
      audio:'/music/deftones.mp3',
    },
    {
      image: "/images/Fondo2.jpg",
      title: 'Three Day Grace',
      description: 'Three D Grace combina metal moderno con influencias armenias, ofreciendo letras poderosas y una energía arrolladora en el escenario.',
      audio:'/music/Animal.mp3',
    },
    {
      image: "/images/Fond3.jpg",
      title: 'AC/DC',
      description: 'AC/DC es sinónimo de rock energético, con riffs icónicos y himnos atemporales que han dejado huella en la historia del rock.',
      audio:'/music/AC.mp3',
    },
    {
      image: "/images/Fondo.jpg",
      title: 'System Of a Down',
      description: 'System O.A.D destaca por su mezcla de ritmos agresivos y letras provocativas, ofreciendo un sonido distintivo en el metal.',
      audio:'/music/system.mp3',
    },
    {
      image: "/images/fondo5.jpg",  
      title: 'Skillet',
      description: 'Skillet fusiona rock alternativo con elementos sinfónicos, creando un sonido poderoso y emocional.',
      audio: '/music/skillet.mp3', 
  }
  ];
  

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const playAudio = () => {
    if (isPlaying) {
      audioRef.current.pause(); 
      setIsPlaying(false);
    } else {
      audioRef.current.src = slides[current].audio;
      audioRef.current.play(); 
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 15000); 

    
    audioRef.current.pause();
    setIsPlaying(false);

    return () => clearInterval(timer);
  }, [current]);
  

  return (
    <div className="BodyP">
      <div className="Carusel">
        <button className="prev" onClick={prevSlide}>
          <img src={Ant} alt="Anterior" />  
        </button>
        <img src={slides[current].image} alt={`Imagen del carrusel ${slides[current].title}`} />
        <h2 className="h2P">{slides[current].title}</h2>
        <p className="P2">{slides[current].description}</p>
        <a className="A2"  onClick={playAudio}>Play</a>
        <button className="next" onClick={nextSlide}>
          <img src={Sig} alt="Siguiente" />  
        </button>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default Carousel;
