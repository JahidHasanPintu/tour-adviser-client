import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import Navbar from "./Components/Navbar/Navbar";
import PopularPackageCardDetails from "./Components/AllTourPackagesCards/PopularPackageCard/PopularPackageCardDetails";
import Login from "./Components/Acount/Login";
import SignUp from "./Components/Acount/SignUp";
import Hotels from "./Components/Hotel/Hotels";
import TourPackages from "./Components/TourPackages/TourPackages";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Route
          path="/popularPackage/:popularPackageId"
          element={<PopularPackageCardDetails />}
        ></Route> */}
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/hotel" element={<Hotels></Hotels>}></Route>
        <Route
          path="/packageDetails"
          element={<PopularPackageCardDetails />}
        ></Route>
        <Route
          path="/packageDetails/:packID"
          element={<PopularPackageCardDetails />}
        ></Route>
        <Route path="/packages" element={<TourPackages />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
