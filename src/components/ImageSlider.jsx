import { useState, useEffect } from "react";

import kitten from "../assets/images/CuteKitten.jpg";
import plants from "../assets/images/Plants.jpg";
import motorcycle from "../assets/images/Motorcycle.jpg";

const images = [
  kitten,
  plants,
  motorcycle,
];

function ImageSlider() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((previous) =>
        previous === images.length - 1
          ? 0
          : previous + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  function nextImage() {

    setCurrentImage((previous) =>
      previous === images.length - 1
        ? 0
        : previous + 1
    );

  }

  function previousImage() {

    setCurrentImage((previous) =>
      previous === 0
        ? images.length - 1
        : previous - 1
    );

  }

  return (

    <div className="slider-container">

      <img
        src={images[currentImage]}
        alt="Gallery"
      />

      <button
        className="slider-btn prev"
        onClick={previousImage}
      >
        ◀
      </button>

      <button
        className="slider-btn next"
        onClick={nextImage}
      >
        ▶
      </button>

    </div>

  );

}

export default ImageSlider;