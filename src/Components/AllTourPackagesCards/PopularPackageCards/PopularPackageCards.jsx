import React, { useEffect, useState } from "react";
import PopularPackageCard from "../PopularPackageCard/PopularPackageCard";
import { getBaseURL } from "../../BaseURL/Baseurl";

const PopularPackageCards = () => {
  const [packages, setPackages] = useState([]);
  const baseURL = getBaseURL();
  useEffect(() => {
    fetch(`${baseURL}/tourpackages`)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Popular Packages</h1>
        <div className="row">
          {packages.map((tourPackage) => (
            <div className="col-4">
              <PopularPackageCard key={tourPackage._id} data={tourPackage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCards;
