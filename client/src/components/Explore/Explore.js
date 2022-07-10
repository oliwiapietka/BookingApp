import React from "react";
import "./Explore.css";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../../hooks/useFetch";
import { MoonLoader } from "react-spinners";

const Explore = () => {
  const dataExplore = [
    {
      name: "Dubai",
      src: "https://wallpaperaccess.com/full/646452.jpg",
      id: uuidv4(),
    },
    {
      name: "Japan",
      src: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      id: uuidv4(),
    },
    {
      name: "New Zealand",
      src: "https://cdn.cnn.com/cnnnext/dam/assets/170606121305-new-zealand---travel-destination---shutterstock-180140354.jpg",
      id: uuidv4(),
    },
    {
      name: "Greece",
      src: "https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg",
      id: uuidv4(),
    },
    {
      name: "Australia",
      src: "https://www.state.gov/wp-content/uploads/2022/02/shutterstock_1025960785-2560x1300.jpg",
      id: uuidv4(),
    },
    {
        name: "Philippines",
        src: "https://i.natgeofe.com/n/04505c35-858b-4e95-a1a7-d72e5418b7fc/steep-karst-cliffs-of-el-nido-in-palawan.jpg",
        id: uuidv4(),
      },
  ];

  const {data, loading, error} = useFetch("/hotels/countByCity?cities=dubai,japan,new zealand,greece,australia,philippines")

  return (
    <div className="explore-container">
      <p className="explore-text">Explore new places</p>
      {loading ? (<MoonLoader />) : (
      <>
      <div className="countries-container">
        {dataExplore.map(({ name, src, id }) => {
          return (
            <div className="country-container" key={id}>
              <img className="country-img" src={src} />
              <p className="country-name">{name}</p>
              <p>{data[data.indexOf(dataExplore)]} properties</p>
            </div>
          );
        })}
      </div>
      </>)}
    </div>
  );
};

export default Explore;
