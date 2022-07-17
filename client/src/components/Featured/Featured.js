import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Featured.css";
import useFetch from "../../hooks/useFetch";

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

  const {data, loading, error} = useFetch("/hotels/countByType")
  return (
    <div>
      <h1 className="featured-properties-text">Featured properties</h1>
      <div className="featured-properties-container">
        {featuredProperties.map(
          ({ title, town, src, id, price, rating, ratingtext }) => {
            return (
              <div className="featured-property-container" key={id}>
                <img className="featured-property-img" src={src} />
                <h1 className="featured-property-title">{title}</h1>
                <p className="featured-property-town">{town}</p>
                <p className="featured-property-price">Starting from ${price}</p>
                <span className="featured-properties-rating">{rating}</span>
                <span className="featured-properties-rating-text">{ratingtext}</span>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Featured;
