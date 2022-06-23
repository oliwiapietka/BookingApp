import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Slider.css";

export default function Slider() {
  const dataSlider = [
    {
      src: "https://wallpaperaccess.com/full/295875.jpg",
      id: uuidv4(),
    },
    {
      src: "https://wallpaperaccess.com/full/295839.jpg",
      id: uuidv4(),
    },
    {
      src: "https://wallpaperaccess.com/full/295881.jpg",
      id: uuidv4(),
    },
    {
      src: "https://wallpaperaccess.com/full/295971.jpg",
      id: uuidv4(),
    },
    {
      src: "https://wallpaperaccess.com/full/295870.jpg",
      id: uuidv4(),
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [slideIndex]);

  return (
    <div className="container-slider">
      <p className="main-text">
        Enjoy Your Dream <br></br> Vacation In Your <br></br>{" "}
        <div className="dream-hotel-text">DREAM HOTEL</div>
      </p>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.src} />
          </div>
        );
      })}
      <div className="btn-slide-prev">
        <ion-icon
          name="chevron-back-outline"
          size="large"
          onClick={prevSlide}
        ></ion-icon>
      </div>
      <div className="btn-slide-next">
        <ion-icon
          name="chevron-forward-outline"
          size="large"
          onClick={nextSlide}
        ></ion-icon>
      </div>
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
