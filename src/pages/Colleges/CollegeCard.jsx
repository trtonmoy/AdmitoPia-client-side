import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    _id,
    image,
    college_name,
    admission_dates,
    rating,
    research_history,
  } = college;
  return (
    <div className=" bg-orange-50 p-2 lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto">
      <figure>
        <img
          className="w-96 h-64 p-4 bg-orange-100"
          src={image}
          alt={college_name}
        />
      </figure>
      <div className="p-4 ">
        <h2 className="text-2xl my-4 text-orange-800 font-serif font-semibold">
          {college_name}
        </h2>
        <p className="text-lg font-medium">
          Admission Date : {admission_dates}
        </p>
        <p className="text-lg font-semibold">Rating : {rating}</p>
        <p className="text-lg font-semibold">
          Number Of Research :{research_history.length}
        </p>
      </div>
      <div className="text-right">
        <Link to={`/colleges/${_id}`}>
          <button className="text-lg font-semibold font-mono px-6 py-2 bg-orange-400 text-slate-100 hover:bg-orange-300 hover:text-orange-700 rounded-lg">
            Visit Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
