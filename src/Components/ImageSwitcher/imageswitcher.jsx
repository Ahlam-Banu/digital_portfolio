import React, { useState, useEffect } from "react";

const ImageSwitcher = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalTime = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  return (
    <div>
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage}`}
        style={{ width: "586px", height: "415px" }} // Adjust image size as needed
      />
    </div>
  );
};

export default ImageSwitcher;
