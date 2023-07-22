import React from "react";
import SearchBar from "../../components/Home/SearchBar";
import CollegeSection from "../../components/Home/CollegeSection/CollegeSection";
import ImageGallery from "../../components/Home/Images/ImageGallery";
import ResearchSection from "../../components/Home/Research/ResearchSection";

const Homepage = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <CollegeSection></CollegeSection>
      <ImageGallery></ImageGallery>
      <ResearchSection></ResearchSection>
    </div>
  );
};

export default Homepage;
