import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="search-item">
      <img
        src="http://brabbucontract.com/inspirations-and-ideas/wp-content/uploads/2019/06/fairmont-gold-royal-york-by-Champalimaud-Design.jpg"
        alt=""
        className="search-item-img"
      />
      <div>
        <div className="search-item-description">
          <h1 className="search-item-title">Apartment Warsaw</h1>
          <p className="search-item-location">
            Warsaw, Grzybowska 47A · 400 m from center
          </p>
        </div>
        <div className="search-item-details-container">
          <p className="search-item-type">One bedroom apartment</p>
          <p className="search-item-details">
            1 living room · 1 bedroom · 1 bathroom · 1 kitchen · 2 beds (1 full,
            1 sofa bed) · 48 m²
          </p>
          <span className="search-item-price">1200$/month</span>
          <div className="search-item-availability-btn">
            <p>See availability</p>
            <ion-icon name="chevron-forward-sharp"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
