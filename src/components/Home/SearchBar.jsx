import React from "react";

const SearchBar = () => {
  return (
    <div className="text-center sm:my-4 md:my-8">
      <div>
        <input
          type="text"
          className="border rounded-full border-orange-600 py-4 sm:w-[50%] md:[80%]"
          id=""
        />
        <button className="px-6 py-4 ml-6 sm:text-sm md:text-xl bg-orange-400 text-white font-semibold tracking-wide rounded-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
