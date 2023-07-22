import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Admission = () => {
  const colleges = useLoaderData();

  return (
    <div className="bg-teal-600">
      <h2 className="text-4xl font-extrabold font-serif tracking-wide text-center py-2 bg-teal-100 text-teal-700 mb-8">
        Partake in a Prestigious Institute
      </h2>
      <div className="lg:max-w-7xl md:max-w-2xl sm:max-w-xl mx-auto">
        {colleges.map((college) => (
          <section key={college._id}>
            <div className="grid grid-cols-1 md:grid-cols-3 space-x-28 lg:items-center bg-teal-100 border mb-6 p-6">
              <figure>
                <img
                  className="w-96 h-52"
                  src={college.image}
                  alt={college.college_name}
                />
                <figcaption> {college.college_name} </figcaption>
              </figure>
              <div>
                <h3> {college.college_name} </h3>
                <p> {college.rating} </p>
              </div>
              <div>
                <Link>
                  {" "}
                  <button className="text-lg font-semibold font-mono text-teal-800 bg-teal-300 px-12 py-3 hover:text-white hover:bg-teal-700">
                    Enroll
                  </button>{" "}
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Admission;
