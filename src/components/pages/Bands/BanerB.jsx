import React, { useEffect, useState } from "react";
import "./BanerB.css";

const BanerB = () => {
    const images = [
        'images/band1.png',
        'images/band2.jpg',
        'images/band3.jpg',
        'images/band4.webp',
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div class="parent-container" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div className="banner-container">
            <img src={images[currentImage]} alt={`Publicidad ${currentImage + 1}`} className="banner-image" />
        </div>
        </div>
    );
};

export default BanerB;
