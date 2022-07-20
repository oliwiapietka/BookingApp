import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Featured.css";
import useFetch from "../../hooks/useFetch";
import { MoonLoader } from "react-spinners";

function Featured() {
  const featuredProperties = [
    {
      title: "Aparthotel in Center of Town",
      town: "Warsaw",
      src: "http://cdn.home-designing.com/wp-content/uploads/2016/11/grey-slate-tile-feature-wall-modern-apartment.jpg",
      id: uuidv4(),
      price: 200,
      rating: 8.2,
      ratingtext: "Excellent",
    },
    {
      title: "Four Seasons Hotel",
      town: "Lisbon",
      src: "https://www.thepinnaclelist.com/wp-content/uploads/2020/12/001-SHINE-Luxury-Apartment-Interior-Design-Dnipro-Ukraine-Svoya-Studio.jpeg",
      id: uuidv4(),
      price: 280,
      rating: 8.3,
      ratingtext: "Excellent",
    },
    {
      title: "Oslo Premium Hotel",
      town: "Oslo",
      src: "https://www.baxter.it/sites/default/files/see_also/LuxuryApartmentCortina_1.jpg",
      id: uuidv4(),
      price: 340,
      rating: 9.3,
      ratingtext: "Excellent",
    },
    {
      title: "Sidney Premium Apartment",
      town: "Sidney",
      src: "https://static.theceomagazine.net/wp-content/uploads/2021/11/02091404/The-Landmark-Penthouse-1.jpg",
      id: uuidv4(),
      price: 390,
      rating: 9.2,
      ratingtext: "Excellent",
    },
  ];

  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div>
      <h1 className="featured-properties-text">Featured properties</h1>
      {loading ? (
        <div className="featured-property-loading">
          <MoonLoader />
        </div>
      ) : (
        <>
          <div className="featured-properties-container">
            {data.map((item) => (
              <div className="featured-property-container" key={item._id}>
                <img
                  className="featured-property-img"
                  src={item.photos[0]}
                  alt=""
                />
                <h1 className="featured-property-title">{item.name}</h1>
                <p className="featured-property-town">{item.city}</p>
                <p className="featured-property-price">
                  Starting from ${item.cheapestPrice}
                </p>
                {item.rating && (
                  <>
                    <span className="featured-properties-rating">
                      {item.rating}
                    </span>
                    <span className="featured-properties-rating-text">
                      Excellent
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
