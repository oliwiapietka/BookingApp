import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="search-item">
      <img src={item.photos[0]} alt="" className="search-item-img" />
      <div>
        <div className="search-item-description">
          <h1 className="search-item-title">{item.name}</h1>
          <p className="search-item-location">
            {item.address} · {item.distance}m from center
          </p>
        </div>
        <div className="search-item-details-container">
          <p className="search-item-type">{item.type}</p>
          <p className="search-item-details">{item.description}</p>
          {item.rating && (
            <div>
              <span>Excellent</span>
              <span>{item.rating}</span>
            </div>
          )}
          <span className="search-item-price">${item.cheapestPrice}</span>
          <Link to={`/hotels/${item._id}`}>
            <div className="search-item-availability-btn">
              <p>See availability</p>
              <ion-icon name="chevron-forward-sharp"></ion-icon>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
