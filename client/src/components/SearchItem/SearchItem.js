import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/hotel");
  };
  return (
    <div className="search-item">
      <img
        src="https://www.manooi.com/mn17/wp-content/uploads/vague_kensington_1.jpg"
        alt=""
        className="search-item-img"
      />
      <div>
        <div className="search-item-description">
          <h1 className="search-item-title">Mennica Residence Premium</h1>
          <p className="search-item-location">
            11 Waliców, Wola, 00-855 Warsaw · 1km from center
          </p>
        </div>
        <div className="search-item-details-container">
          <p className="search-item-type">One bedroom apartment</p>
          <p className="search-item-details">
            1 living room · 1 bedroom · 1 bathroom · 1 kitchen · 2 beds (1 full,
            1 sofa bed) · 145m²
          </p>
          <span className="search-item-price">3600$/month</span>
          <div
            onClick={onClickHandler}
            className="search-item-availability-btn"
          >
            <p>See availability</p>
            <ion-icon name="chevron-forward-sharp"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
