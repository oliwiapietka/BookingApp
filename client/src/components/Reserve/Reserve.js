import React, { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Reserve.css";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  const [selectedRooms, setSelectedRooms] = useState([]);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/BookingApp");
    } catch (err) {}
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  return (
    <div className="reserve">
      <div className="reserve-container">
        <div className="reserve-close-icon">
          <ion-icon
            name="close-outline"
            onClick={() => setOpen(false)}
          ></ion-icon>
        </div>
        <span className="reserve-main-text">Select your rooms</span>
        {data.map((item) => (
          <div className="room-info-container" key={item._id}>
            <div className="room-main-infos">
              <div className="room-title">{item.title}</div>
              <div className="room-desc">{item.desc}</div>
              <div className="room-price">${item.price}</div>
              <div className="room-max">
                Max people: <b>{item.maxPeople}</b>
              </div>
            </div>
            {item.roomNumbers.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  className="room-check"
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                  disabled={!isAvailable(roomNumber)}
                ></input>
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleClick} className="reserve-button">
          {" "}
          RESERVE NOW!{" "}
        </button>
      </div>
    </div>
  );
};

export default Reserve;
