import React from "react";
import { useLoaderData } from "react-router-dom";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
  const colleges = useLoaderData();
  return (
    <div className="mt-4 mb-12">
      <h3 className="text-4xl font-bold text-orange-600 bg-orange-100 py-2 mx-8 mt-8 mb-12 text-center">
        Our Top Listed Colleges
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
