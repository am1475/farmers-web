import React, { useState, useEffect } from 'react';
import image1 from './farm1.jpg';
import image2 from './farm2.jpg';
import image3 from './farm3.jpg';

const images = [image1, image2, image3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Empowering Farmers with Technology</h1>
          <p className="mt-4 text-xl">Innovative solutions for modern agriculture</p>
          <button className="mt-6 px-4 py-2 bg-green-600 rounded">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
