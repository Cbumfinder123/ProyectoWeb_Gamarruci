import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bands.css';
import BannerB from './BanerB';


  const Slider = ({ images, reverse, width, height, urls }) => {

  const navigate = useNavigate();

  return (
    <div className="slider" style={{ '--width': width, '--height': height, '--quantity': images.length }} reverse={reverse ? 'true' : 'false'}>
      <div className="list">
        {
          images.map((image, index) => (
            <div className="item" style={{ '--position': index + 1 }} key={index} onClick={() => urls && navigate(`/bands${urls[index]}`)}>
              <img src={image} alt={`Slider ${index + 1}`} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

const Bands = () => {
  document.title = "Gamarucci | Bands";

  const images1 = [
    'images/log1.png', 'images/log2.png', 'images/log3.png', 'images/log4.png', 
    'images/log5.png', 'images/log6.png', 'images/log7.png', 'images/log8.png'
  ];
  
  const urls1 = [
    '/deftones', '/greenday', '/acdc', '/threedaysgrace', 
    '/metallica', '/thecure', '/skillet', '/systemofadown'
  ];

  const images2 = [
    'images/al1.jpg', 'images/al2.jpeg', 'images/al3.jpeg', 'images/al4.jpeg', 
    'images/al5.jpeg', 'images/al6.jpeg', 'images/al7.jpeg', 'images/al8.jpeg'
  ];

  return (
    <div>
      <BannerB/>
      <div class="parent2-container">
        <h2 className="B-section-title">Bandas</h2>
        <Slider images={images1} width="100px" height="50px" urls={urls1} />
        <h2 className="B-section-title">Álbumes</h2>
        <Slider images={images2} reverse width="200px" height="200px" />
     </div>
    </div>
  );
};

export default Bands;
