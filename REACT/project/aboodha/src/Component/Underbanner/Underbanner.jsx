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
    <div className="relative w-full h-[550px] my-10 overflow-hidden  gap-20">
      {arr.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-1000 
            ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
}

export default Underbanner;
