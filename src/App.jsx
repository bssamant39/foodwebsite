import React from "react";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Team from "./Pages/Team";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/menu" element={<Menu />}>
          Menu
        </Route>
        <Route path="/service" element={<Services />}>
          Services
        </Route>
        <Route path="/booking" element={<Booking />}>
          Booking
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/team" element={<Team />}>
          Teams
        </Route>
      </Routes>
      <Footer />
  
    </>
  );
};

export default App;
