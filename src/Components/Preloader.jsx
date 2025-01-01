import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-start px-20 min-h-screen bg-blue-200">
      <div className="w-full text-center">
        {/* Percentage display */}
        <div className="absolute bottom-4 right-4">
          <span className=" font-bold text-blue-500 text-9xl" style={{fontFamily:"brolimo"}}>{progress}%</span>
        </div>

        {/* Loading text */}
        <div className="mb-2 text-start">
          <span className="text-lg text-black font-medium" style={{fontFamily:"chunk", fontSize:30}}>Loading...</span>
        </div>

        {/* Progress bar */}
        <div className="w-full ">
          <div className="overflow-hidden h-0.5 w-full rounded-full bg-gray-200">
            <div 
              style={{ width: `${progress}%` }}
              className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;