import React, { useState } from "react";
import "./SearchBar.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { parseWithOptions } from "date-fns/fp";

const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [date, setDate] = useState([
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

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-input-container">
        <ion-icon name="airplane-sharp"></ion-icon>
        <input
          className="search-bar-input"
          type="text"
          placeholder="Where are you going?"
          onChange={onChangeHandler}
          value={searchQuery}
        />
      </div>
      <div className="search-bar-date">
        <ion-icon name="calendar-sharp"></ion-icon>
        <div
          onClick={() => setOpenDate(!openDate)}
          className="search-bar-stay-time"
        >
          {`${format(date[0].startDate, "dd/MM/yyyy")} to
          ${format(date[0].endDate, "dd/MM/yyyy")}`}
        </div>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />
        )}
      </div>
      <div className="search-bar-details-container">
        <ion-icon name="person-sharp"></ion-icon>
        <div onClick={() => setOpenDetails(!openDetails)} className="search-bar-details">{`${details.adult} adult, ${details.children} children, ${details.room} room`}</div>
        {openDetails && <div className="options">
          <div className="option-item">
            <span className="option-text">Adult</span>
            <div className="option">
              <button disabled={details.adult <= 1} className="option-btn" onClick={() => handleOption("adult", "d")}>-</button>
              <span className="option-number">{details.adult}</span>
              <button className="option-btn" onClick={() => handleOption("adult", "i")}>+</button>
            </div>
          </div>
          <div className="option-item">
            <span className="option-text">Children</span>
            <div className="option">
              <button disabled={details.children <= 0} className="option-btn" onClick={() => handleOption("children", "d")}>-</button>
              <span className="option-number">{details.children}</span>
              <button className="option-btn" onClick={() => handleOption("children", "i")}>+</button>
            </div>
          </div>
          <div className="option-item">
            <span className="option-text">Room</span>
            <div className="option">
              <button disabled={details.room <= 1} className="option-btn" onClick={() => handleOption("room", "d")}>-</button>
              <span className="option-number">{details.room}</span>
              <button className="option-btn" onClick={() => handleOption("room", "i")}>+</button>
            </div>
          </div>
        </div> }
      </div>
      <div className="search-bar-search-btn">
        <ion-icon name="search"></ion-icon>
      </div>
    </div>
  );
};

export default SearchBar;
