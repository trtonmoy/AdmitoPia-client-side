import React from "react";
import { useLoaderData } from "react-router-dom";
import EventsCard from "../../components/Details/EventsCard";

const Details = () => {
  const college = useLoaderData();
  const {
    image,
    college_name,
    admission_dates,
    events,
    research_history,
    sports,
  } = college;
  return (
    <div className="lg:relative">
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center ">
          <p className="text-2xl text-white">
            Unlock Your Potential, Illuminate Your Future. Embrace Knowledge at{" "}
            <span className="text-6xl font-extrabold tracking-wide text-orange-500">
              {college_name}
            </span>
          </p>
        </div>
      </div>
      <h1 className="text-4xl text-orange-700 font-extrabold tracking-wider font-serif text-center py-2 bg-orange-100 ">
        Welcome to {college_name}{" "}
      </h1>
      <div className="my-8 lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto md:flex md:justify-evenly md:items-center">
        <div>
          <figure>
            <img
              className="w-[600px] h-[350px]"
              src={image}
              alt={college_name}
            />
          </figure>
        </div>
        <div>
          <h3> {college_name} </h3>
          <p>Rating : </p>
          <p>Admission Date : {admission_dates} </p>
        </div>
      </div>
      <div>
        <h2>Events</h2>
        <p>paragraph</p>
        <h5>List Of Events</h5>
        <div>
          {events.map((event, idx) => (
            <EventsCard key={idx} event={event}></EventsCard>
          ))}
        </div>
      </div>
      <div>
        <h2>Sports</h2>
        <p>paragraph</p>
        <h5>List Of Sports</h5>
        <div>
          {sports.map((event, idx) => (
            <EventsCard key={idx} event={event}></EventsCard>
          ))}
        </div>
      </div>
      <div>
        <h2>Research History</h2>
        <p>paragraph</p>
        <h5>List Of Research History</h5>
        <div>
          {research_history.map((event, idx) => (
            <EventsCard key={idx} event={event}></EventsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
