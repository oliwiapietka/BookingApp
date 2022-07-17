import React from "react";
import "./PropertyType.css";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../../hooks/useFetch";
import { MoonLoader } from "react-spinners";

const PropertyType = () => {
  const dataProperties = [
    {
      src: "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
      name: "Hotels",
      id: uuidv4(),
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dc4d4240971115.5606eec417df7.jpg",
      name: "Apartments",
      id: uuidv4(),
    },
    {
      src: "https://www.vipholidaybooker.com/storage/app/uploads/public/5da/8f7/f4c/5da8f7f4cb94d724660840.jpg",
      name: "Villas",
      id: uuidv4(),
    },
    {
      src: "https://www.sherpareport.com/images/stories/destclubs/Exclusive/er-los-cabos-esperanza-750.jpg",
      name: "Resorts",
      id: uuidv4(),
    },
    {
      src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rosewood-mayakoba-residence-1616077172.jpg",
      name: "Vacation Homes",
      id: uuidv4(),
    },
    {
      src: "https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-cabin-camping-1.jpg",
      name: "Cabins",
      id: uuidv4(),
    },
    {
      src: "https://www.tentickle-luxurytents.com/wp-content/uploads/2020/06/76616532_2592366320853490_6985987945891102720_o2.jpg",
      name: "Glampings",
      id: uuidv4(),
    },
  ];

  const images = [
    "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dc4d4240971115.5606eec417df7.jpg",
    "https://www.vipholidaybooker.com/storage/app/uploads/public/5da/8f7/f4c/5da8f7f4cb94d724660840.jpg",
    "https://www.sherpareport.com/images/stories/destclubs/Exclusive/er-los-cabos-esperanza-750.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rosewood-mayakoba-residence-1616077172.jpg",
    "https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-cabin-camping-1.jpg",
    "https://www.tentickle-luxurytents.com/wp-content/uploads/2020/06/76616532_2592366320853490_6985987945891102720_o2.jpg",
  ];

  const { data, loading, error } = useFetch("/hotels/countByType");

  return (
    <div className="properties-container">
      <p className="property-type-text-search">Browse by property type</p>
      <div className="property-type-container">
        {loading ? (
          <div className="property-type-loading">
          <MoonLoader />
          </div>
        ) : (
          <>
            {data &&
              images.map((img, i) => (
                <div className="property-container" key={i}>
                  <img src={img} className="property-img" />
                  <p className="property-type-text">
                    {data[i]?.count} {data[i]?.type}
                  </p>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyType;
