import React from "react";
import HCollegeCard from "./HCollegeCard";
import { useLoaderData } from "react-router-dom";

const CollegeSection = () => {
  const colleges = useLoaderData();
  return (
    <div className="mb-8 min-h-[80vh] lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto">
      <h3 className="text-4xl font-bold text-orange-600 bg-orange-100 py-2 mx-8 mt-8 mb-12 text-center">
        Visit Our Institutions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {colleges.slice(0, 3).map((college) => (
          <HCollegeCard key={college._id} college={college}></HCollegeCard>
        ))}
      </div>
    </div>
  );
};

export default CollegeSection;
