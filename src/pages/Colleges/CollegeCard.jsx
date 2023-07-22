import React from "react";

const CollegeCard = ({ college }) => {
  const {
    image,
    college_name,
    admission_dates,
    events,
    research_history,
    sports,
  } = college;
  return (
    <div className=" bg-orange-50 p-2">
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
        <p className="text-lg font-semibold">
          Events :
          {events.map((event) => (
            <>
              <li className="font-normal list-none ms-6 text-slate-500">
                {event}
              </li>
            </>
          ))}
        </p>
        <p className="text-lg font-semibold">
          Research History :
          {research_history.map((item) => (
            <>
              <li className="font-normal list-none ms-6 text-slate-500">
                {item}
              </li>
            </>
          ))}
        </p>
        <p className="text-lg font-semibold">
          Sports :
          {sports.map((sport) => (
            <>
              <li className="font-normal list-none ms-6 text-slate-500">
                {sport}
              </li>
            </>
          ))}
        </p>
      </div>
      <div className="text-right">
        <button className="text-lg font-semibold font-mono px-6 py-2 bg-orange-400 text-slate-100 hover:bg-orange-300 hover:text-orange-700 rounded-lg">
          Visit Here
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
