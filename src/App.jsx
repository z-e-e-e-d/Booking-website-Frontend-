import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import decore from "./assets/images/Decore.png";
import Herosection from "./Herosection";
import Cardssection from "./Cardssection";
import Servicessection from "./Servicessection";
import Booking from "./Booking";
import AboutUs from "./AboutUs";
import Login from "./Login/Login";
import Marks from "./Marks";
import Email from "./Email";
import Footer from "./Footer";
import Signup from "./Signup/Signup";
function App() {
  return (
    <BrowserRouter>
      <div
        className="pt-20 bg-[url('./assets/images/Decore.png')] bg-right bg-no-repeat min-h-screen
      bg-cover sm:bg-cover md:bg-[50%] lg:bg-[40%] "
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Herosection />
                <Servicessection />
                <Cardssection />
                <Booking />
                <AboutUs />
                <Marks />
                <Email />
                <Footer />
              </>
            }
          />
          <Route path="/hotels" element={<h1></h1>} />
          <Route path="/flights" element={<h1></h1>} />
          <Route path="/bookings" element={<h1></h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
