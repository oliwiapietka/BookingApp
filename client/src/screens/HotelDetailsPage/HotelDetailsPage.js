import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./HotelDetailsPage.css";

const HotelDetailsPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const hotelPhotos = [
    {
      src: "https://www.manooi.com/mn17/wp-content/uploads/vague_kensington_1.jpg",
    },
    {
      src: "http://ej-interiors.co.uk/wp-content/uploads/2019/06/0081_014_07_Master_Bedroom_Master_Draft_24-1024x684.jpg",
    },
    {
      src: "https://vwartclub.com/media/projects/5579/2.jpg",
    },
    {
      src: "https://i.pinimg.com/originals/92/35/c1/9235c111c19e12712a7f876fb79e2f2b.jpg",
    },
  ];

  const onClickHandler = (index) => {
    setSlideIndex(index);
    setOpen(true);
  };

  const handleSlide = (direction) => {
    let newSlideIndex;

    if (direction === "left") {
      newSlideIndex = slideIndex === 0 ? 3 : slideIndex - 1;
    } else if (direction === "right") {
      newSlideIndex = slideIndex === 3 ? 0 : slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  };

  return (
    <div>
      <NavBar />
      <div className="hotel-container">
        {open && (
          <div className="hotel-slider">
            <div onClick={() => setOpen(false)} className="hotel-slider-close">
              <ion-icon name="close-sharp"></ion-icon>
            </div>
            <div className="hotel-slider-arrow-left">
              <ion-icon
                onClick={() => handleSlide("left")}
                name="chevron-back-sharp"
              ></ion-icon>
            </div>
            <div className="hotel-slider-wrapper">
              <img
                src={hotelPhotos[slideIndex].src}
                alt=""
                className="hotel-slider-img"
              />
            </div>
            <div className="hotel-slider-arrow-right">
              <ion-icon
                onClick={() => handleSlide("right")}
                name="chevron-forward-sharp"
              ></ion-icon>
            </div>
          </div>
        )}
        <h1 className="hotel-title">Mennica Residence Premium</h1>
        <div className="hotel-location-container">
          <ion-icon name="location-sharp"></ion-icon>
          <p className="hotel-location">
            11 Waliców, Wola, 00-855 Warsaw, Poland
          </p>
        </div>
        <span className="hotel-text-distance">
          Excellent location - 1km from center!
        </span>
        <div className="hotel-imgs">
          {hotelPhotos.map((photo, index) => (
            <img
              onClick={() => onClickHandler(index)}
              src={photo.src}
              alt=""
              className="hotel-img"
            />
          ))}
        </div>
        <div className="hotel-details">
          <div className="hotel-details-text">
            <h1>Stay in heart of Warsaw!</h1>
            <p>
              This Warsaw Apartment is just a 10-minute walk from Warsaw Central
              Station. Apartment has accommodations with a restaurant, a bar, a
              garden and free WiFi. This apartment provides free private parking
              and room service. The apartment is equipped with 1 bedroom, 1
              bathroom, bed linen, towels, a flat-screen TV with satellite
              channels, a dining area, a fully equipped kitchen, and a patio
              This apartment have a large, modern bathroom with a hairdryer.
              Featuring a kitchenette with a dishwasher and a microwave, each
              unit also comes with a safety deposit box, a cable flat-screen TV,
              ironing facilities, desk and a seating area with a sofa. There's a
              private bathroom with shower in all units, along with a hairdryer
              and free toiletries. A car rental service is available. This is
              our guests favorite part of Warsaw, according to independent
              reviews.
            </p>
          </div>
          <div className="hotel-details-price">
            <h1>Perfect for a 15-night stay!</h1>
            <span className="hotel-details-score">
              Located in the top-rated area in Warsaw, this property has an
              excellent location score of 9.3!
            </span>
            <h2>
              <b className="hotel-price">$1800</b> (15 nights)
            </h2>
            <button className="hotel-btn">Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelDetailsPage;
