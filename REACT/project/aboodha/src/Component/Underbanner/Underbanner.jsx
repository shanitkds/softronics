import React, { useState, useEffect } from 'react';
import img1 from '../../../public/bg2.png';
import img2 from '../../../public/bg3.png';
import img3 from '../../../public/bg-image.png';

const arr = [img1, img2, img3];

function Underbanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % arr.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[550px] my-10 overflow-hidden">
      {arr.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute top-0 left-0 w-300 h-[550px] object-cover object-top transition-opacity duration-1000 ml-40
              ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />

      ))}

      <button className="absolute px-8 py-4  bg-white text-black rounded-lg shadow-md font-semibold
                         hover:bg-black hover:text-white mt-100 transition-all duration-300 left-1/2 transform -translate-x-1/2">
        Shop Now
      </button>
    </div>
  );
}

export default Underbanner;
