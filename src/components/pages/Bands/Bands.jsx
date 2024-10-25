import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bands.css';
import BannerB from './BanerB';

const Slider = ({ images, reverse, width, height, urls, audioFiles }) => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (audioFiles && audioFiles[index]) {
      audioRef.current.src = audioFiles[index];
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleImageClick = (index) => {
    if (urls) {
      navigate(`/bands${urls[index]}`);
    }
  };

  return (
    <div className="slider" style={{ '--width': width, '--height': height, '--quantity': images.length }} reverse={reverse ? 'true' : 'false'}>
      <div className="list">
        {images.map((image, index) => (
          <div
            className="item"
            style={{ '--position': index + 1 }}
            key={index}
            onClick={() => handleImageClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

const Bands = () => {
  document.title = "Gamarucci | Bands";
  const images1 = [
    'images/log1.png', 'images/log2.png', 'images/log3.png', 'images/log4.png',
    'images/log5.png', 'images/log6.png', 'images/log7.png', 'images/log8.png',
    'images/log9.png','images/log10.png','images/log11.png','images/log12.png'
  ];
  
  const urls1 = [
    '/deftones', '/greenday', '/acdc', '/threedaysgrace',
    '/metallica', '/thecure', '/skillet', '/systemofadown',
    '/blink182','/thestrokes','/nirvana','/weezer'
  ];
  
  const images2 = [
    'images/al1.jpeg', 'images/al2.jpeg', 'images/al3.jpeg', 'images/al4.jpeg',
    'images/al5.jpeg', 'images/al6.jpeg', 'images/al7.jpeg', 'images/al8.jpeg',
    'images/al9.jpeg','images/al10.jpeg','images/al11.jpeg','images/al12.jpeg'
  ];

  const audioFiles = [
    'music/al1.mp3', 'music/al2.mp3', 'music/al3.mp3', 'music/al4.mp3',
    'music/al5.mp3', 'music/al6.mp3', 'music/al7.mp3', 'music/al8.mp3',
    'music/al9.mp3','music/al10.mp3','music/al11.mp3','music/al12.mp3'
  ];
  
  return (
    <div>
      <BannerB/>
      <div className="parent2-container">
        <h2 className="B-section-title">Bandas</h2>
        <Slider images={images1} width="100px" height="50px" urls={urls1} />
        <h2 className="B-section-title">Álbumes</h2>
        <Slider images={images2} reverse width="200px" height="200px" audioFiles={audioFiles} />
     <br></br>
      </div>
    </div>
  );
};

export default Bands;
