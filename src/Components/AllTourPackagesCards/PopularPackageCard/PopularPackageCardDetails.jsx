import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getBaseURL } from "../../BaseURL/Baseurl";
import {  toast } from 'react-toastify';

const PopularPackageCardDetails = () => {
  const location = useLocation();
  const { tourPack } = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupPoint: '',
    roomType: '',
    numberOfPersons: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const baseURL = getBaseURL();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseURL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Booked")
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h3>{tourPack.title}</h3>
            <p style={{ textAlign: "justify" }}>
              {tourPack.details}
            </p>
            <img
              className="mt-3 rounded shadow"
              style={{ height: "250px", width: "450px" }}
              src={tourPack.img}
              alt=""
            />
            <div className="mt-5">
              <h3>Journey Date: {tourPack.date}</h3>
            </div>
            <div className="mt-5">
              <h4
                className="rounded shadow"
                style={{ background: "red", width: "15%", color: "white" }}
              >
                Warning
              </h4>
              <ul className="mt-4">
                <li>
                  Take the time to thoroughly read the trip pricing and any
                  special requirement.
                </li>
                <li>
                  Provide accurate information when feeling out the booking
                  form.
                </li>
                <li>
                  Once you submit the booking request it may not be make changes
                  or modification without additional fees or restrictions .
                </li>
                <li>
                  You must agree to fulfil the payment obligations and
                  associated with your chosen trip.
                </li>
                <li>
                  Make sure you understand the terms and conditions before
                  confirming your booking.
                </li>
                <li>Thank you for choosing our Tour Advisor Website.</li>
              </ul>
              <h3></h3>
            </div>

            {/* Pickup point */}

            <div className="text-center">
              <h3
                className="rounded shadow mt-5"
                style={{ background: "#4942E4", color: "white", width: "60%" }}
              >
                Pickup point Details
              </h3>
            </div>
            <ol className="mt-3">
              <li>
                <h5>Mohammadpur Bus Stand, Dhaka, Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
              <li>
                <h5>Jigatola Bus Stand, Dhanmondi, Dhaka, Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
              <li>
                <h5>Oposite of Shyamoli Squire, Dhaka, Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
              <li>
                <h5>Rajshai Rail Gate, Rajshai , Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
              <li>
                <h5>Shibbari more, Khulna, Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
            </ol>

            {/* includes our packages in tour advisor */}

            <div className="text-center">
              <h3
                className="rounded shadow mt-4"
                style={{ background: "green", color: "white", width: "60%" }}
              >
                Support and Service
              </h3>
            </div>

            <ul className="mt-3">
              <li>
                <h5>Food: Breakfast, Lunch, dinner</h5>
              </li>
              <li>
                <h5>Vehicle Support</h5>
              </li>
              <li>
                <h5>Tour Guide</h5>
              </li>
              <li>
                <h5>Provide T-Shirt</h5>
              </li>
              <li>
                <h5>Medical Support 24/7</h5>
              </li>
            </ul>
          </div>

          {/* second column */}

          <div className="col-5">
            <div className="col-10 mt-3" style={{ marginLeft: "25%" }}>
              <div className="body text-center">
                {/* 
              Booking form  */}

                <h1>Booking Details</h1>
              </div>
              <div class="container">
                <form onSubmit={handleSubmit}>
                  <div class="form-group mt-3">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="phone">Phone:</label>
                    <input
                      type="phone"
                      class="form-control"
                      id="phone"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div class="form-group mt-3">
                    <label for="pickupPoint">Pickup Point:</label>
                    <select class="form-control" id="pickupPoint" value={formData.pickupPoint}
                      onChange={handleInputChange}>
                      <option value="Dhanmondi">Dhanmondi</option>
                      <option value="Shymoli">Shymoli</option>
                      <option value="Gulistan">Gulistan</option>
                      <option value="Sayedabad">Sayedabad</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <label for="roomType">Room Type:</label>
                    <select class="form-control" id="roomType" value={formData.roomType}
                      onChange={handleInputChange}>
                      <option value="option0"></option>
                      <option value="couple">Couple</option>
                      <option value="single">Single</option>
                      <option value="family">Family</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <label for="numberOfPersons">Number of persons:</label>
                    <input
                      type="numberOfPersons"
                      class="form-control"
                      id="numberOfPersons"
                      placeholder="Enter your numberOfPersons"
                      value={formData.numberOfPersons}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" class="btn btn-primary mt-3 w-100 ">
                    Book Now
                  </button>
                </form>
                <div>
                  {/* Payment method */}

                  <div className="mt-5 card bg-success  rounded">
                    <h4 className="text-center text-white">Payment Method</h4>
                  </div>
                  <div className="card  mt-4" style={{ background: "#DB005B" }}>
                    <div className="text-center">
                      <h3 className="mt-1 text-white">Bkash</h3>
                      <h4 className="text-dark">019191581842</h4>
                    </div>
                  </div>
                  <div className="card  mt-4" style={{ background: "#E55807" }}>
                    <div className="text-center">
                      <h3 className="mt-1 text-white">Nagad</h3>
                      <h4 className="text-dark">019191581842</h4>
                    </div>
                  </div>
                  <div className="card  mt-4" style={{ background: "#9A208C" }}>
                    <div className="text-center">
                      <h3 className="mt-1 text-white">Roket</h3>
                      <h4 className="text-dark">019191581842</h4>
                    </div>
                  </div>
                  <div className="card  mt-4" style={{ background: "#002B5B" }}>
                    <div className="text-center">
                      <h3 className="mt-1 text-white">Bank Account Number</h3>
                      <h4 className="text-info">205020296700158611</h4>
                    </div>
                  </div>

                  {/* support and service admin */}

                  <div className="mt-5">
                    <div className="text-center">
                      <h3
                        className="rounded shadow "
                        style={{
                          background: "#C92C6D",
                          color: "white",
                          width: "105%",
                          padding: "5px",
                          marginTop: "105px",
                        }}
                      >
                        Admin Support and Service
                      </h3>
                    </div>

                    <div className="card">
                      <div className="text-center">
                        <h5>System maintains and update</h5>
                        <h5>Technical Support</h5>
                        <h5>User Communication and support</h5>
                        <h5>Data management</h5>
                        <h5>Reporting and analyzing</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog post section */}
      <div className="container mt-5">
        <div className="row">
          <div className="text-center mt-5">
            <img
              className="img-fluid rounded-circle"
              style={{ height: "150px", width: "150px" }}
              src="https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
              alt=""
            />
            <h3 className="mt-3">Sundarban Blogs</h3>
          </div>
          <p>
            The Sundarbans mangrove forest is one of the most extensive single
            such forests in the world (140,000 ha). It lies on the delta of the
            Bay’s Ganges, Brahmaputra, and Meghna rivers of Bengal. It is
            adjacent to the border of India’s Sundarbans World Heritage site
            inscribed in 1987. The site is intersected by a complex network of
            tidal waterways, mudflats, and small islands of salt-tolerant
            mangroves. It presents an excellent example of ongoing ecological
            processes. The area is known for its wide range of fauna, including
            260 bird species, the man-eating Bengal tiger, and other threatened
            species such as the estuarine crocodile and the Indian python. This
            tour starts from Dhaka with the modern Rocket Ship. It covers Sixty
            domed mosques, Khan Jahan Ali shrine at Bagerhat and Harbaria, Kotka
            & Kochikhali wildlife sanctuary, and many more activities in
            Sundarbans.
          </p>
        </div>

        {/* image Gallery */}

        <div className="container">
          <h3 className="mt-5 text-center">Image Gallery</h3>
          <div className="row">
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCardDetails;
