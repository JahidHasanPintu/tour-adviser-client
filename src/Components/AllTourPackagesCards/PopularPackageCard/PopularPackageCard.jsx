import React from "react";
import { Link, useNavigate } from "react-router-dom";
const PopularPackageCard = (props) => {
  const { img, day, price, title,night, _id,cityName } = props.data;
  const tourPack = props.data;
  const navigate = useNavigate();
  const navigateToPackageDetails = (id) => {
    navigate(`/packageDetails/${id}`, { state: { tourPack } });
  };

  return (
    <div>
      <div class="card mt-3 shadow text-center">
        <img
          style={{ height: "250px" }}
          src={img}
          class="card-img-top"
          alt="Image"
        />
        <div class="card-body">
          <h5 class="card-title">{cityName}</h5>
          <p class="card-text">Duration: {day} Days {night} Nights</p>
          <p class="card-text"> BDT {price} Tk /person</p>
          {/* <button className="btn btn-primary">See details</button> */}
          <button onClick={()=>navigateToPackageDetails(_id)} className="btn btn-primary">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCard;
