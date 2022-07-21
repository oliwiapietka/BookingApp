import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./HotelDetailsPage.css";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/Reserve/Reserve";

const HotelDetailsPage = () => {
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(`/hotels/find/${hotelId}`);
  const { user } = useContext(AuthContext);

  // const hotelPhotos = [
  //   {
  //     src: "https://www.manooi.com/mn17/wp-content/uploads/vague_kensington_1.jpg",
  //   },
  //   {
  //     src: "http://ej-interiors.co.uk/wp-content/uploads/2019/06/0081_014_07_Master_Bedroom_Master_Draft_24-1024x684.jpg",
  //   },
  //   {
  //     src: "https://vwartclub.com/media/projects/5579/2.jpg",
  //   },
  //   {
  //     src: "https://i.pinimg.com/originals/92/35/c1/9235c111c19e12712a7f876fb79e2f2b.jpg",
  //   },
  // ];

  const { dates, details } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

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

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <NavBar />
      {loading ? (
        <div>
          <MoonLoader />
        </div>
      ) : (
        <div className="hotel-container">
          {open && (
            <div className="hotel-slider">
              <div
                onClick={() => setOpen(false)}
                className="hotel-slider-close"
              >
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
                  src={data.photos[slideIndex]}
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
          <h1 className="hotel-title">{data.name}</h1>
          <div className="hotel-location-container">
            <ion-icon name="location-sharp"></ion-icon>
            <p className="hotel-location">{data.address}</p>
          </div>
          <span className="hotel-text-distance">
            Excellent location - {data.distance}m from center!
          </span>
          <div className="hotel-imgs">
            {data.photos?.map((photo, index) => (
              <img
                onClick={() => onClickHandler(index)}
                src={photo}
                alt=""
                className="hotel-img"
              />
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotel-details-text">
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </div>
            <div className="hotel-details-price">
              <h1>Perfect for a {days}-night stay!</h1>
              <span className="hotel-details-score">
                Located in the top-rated area in Warsaw, this property has an
                excellent location score of 9.3!
              </span>
              <h2>
                <b className="hotel-price">
                  ${days * data.cheapestPrice * details.room}
                </b>{" "}
                ({days} nights)
              </h2>
              <button onClick={handleClick} className="hotel-btn">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} />}
      <Footer />
    </div>
  );
};

export default HotelDetailsPage;
