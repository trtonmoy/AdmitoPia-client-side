import React from "react";

const MyCollegeCard = ({ college }) => {
  const { college_name, image } = college;
  return (
    <div>
      <figure className="bg-teal-600">
        <img
          className="w-[75%] md:w-[50%] mx-auto bg-teal-500 p-12"
          src={image}
          alt={college_name}
        />
      </figure>
      <h2 className="text-5xl font-extrabold tracking-wide text-white">
        {college_name}
      </h2>
      <div className="m-20 pt-8 pb-20 border border-teal-500">
        <h3 className="text-teal-600 text-4xl py-2 border-b-2 border-b-teal-500 w-[50%] mx-auto  font-semibold font-mono text-center">
          Feedback Option
        </h3>
        <p className=" my-6 mx-auto flex justify-center items-center">
          <textarea
            className="border w-[75%] border-teal-500 px-8 py-4 text-teal-700 font-mono text-xl"
            name=""
            id=""
            rows="5"
          ></textarea>
        </p>
        <div className="flex justify-center items-center">
          <button className="text-white font-semibold text-xl px-8 py-2 border rounded-lg bg-teal-400">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCollegeCard;
