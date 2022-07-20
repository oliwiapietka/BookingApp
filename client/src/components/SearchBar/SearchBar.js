import React, { useContext, useState } from "react";
import "./SearchBar.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { parseWithOptions } from "date-fns/fp";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDetails, setOpenDetails] = useState(false);
  const [details, setDetails] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setDetails((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? details[name] + 1 : details[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setDestination(e.target.value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, details } });
    navigate("/hotels", { state: { destination, dates, details } });
  };

  return (
    <div className="search-bar-container-main">
      <div className="search-bar-container">
        <div className="search-bar-input-container">
          <ion-icon name="airplane-sharp"></ion-icon>
          <input
            className="search-bar-input"
            type="text"
            placeholder="Where are you going?"
            onChange={onChangeHandler}
            value={destination}
          />
        </div>
        <div className="search-bar-date">
          <ion-icon name="calendar-sharp"></ion-icon>
          <div
            onClick={() => setOpenDate(!openDate)}
            className="search-bar-stay-time"
          >
            {`${format(dates[0].startDate, "dd/MM/yyyy")} to
          ${format(dates[0].endDate, "dd/MM/yyyy")}`}
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              minDate={new Date()}
              className="date"
            />
          )}
        </div>
        <div className="search-bar-details-container">
          <ion-icon name="person-sharp"></ion-icon>
          <div
            onClick={() => setOpenDetails(!openDetails)}
            className="search-bar-details"
          >{`${details.adult} adult, ${details.children} children, ${details.room} room`}</div>
          {openDetails && (
            <div className="options">
              <div className="option-item">
                <span className="option-text">Adult</span>
                <div className="option">
                  <button
                    disabled={details.adult <= 1}
                    className="option-btn"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="option-number">{details.adult}</span>
                  <button
                    className="option-btn"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="option-item">
                <span className="option-text">Children</span>
                <div className="option">
                  <button
                    disabled={details.children <= 0}
                    className="option-btn"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="option-number">{details.children}</span>
                  <button
                    className="option-btn"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="option-item">
                <span className="option-text">Room</span>
                <div className="option">
                  <button
                    disabled={details.room <= 1}
                    className="option-btn"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="option-number">{details.room}</span>
                  <button
                    className="option-btn"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div onClick={handleSearch} className="search-bar-search-btn">
          <ion-icon name="search"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
