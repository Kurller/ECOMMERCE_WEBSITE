import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TopProduct from "./components/TopProduct";
import Banner from "./components/Banner";
import Testimonial from "./components/Testimonial";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  // Toggle popup
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />

      <Hero />
      <Products />
      <TopProduct />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer />

      {/* Popup */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
