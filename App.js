import React from "react";
import './App.css';
import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";
import TopSection from "./TopSection.jsx";
import TopRightSection from "./TopRightSection.jsx";
import ReviewTestimonials from "./ReviewTestimonials.jsx";
import Contact from "./Contact.jsx";
import SpecialFood from "./SpecialFood.jsx";

function App() {
  return (
    <div> 
      <Navbar />
      <Search />
      <TopRightSection />
      <TopSection />
      
      <ReviewTestimonials />
      <SpecialFood />
      <Contact />
      </div>
    
  );

}

export default App;
