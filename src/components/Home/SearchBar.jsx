import React from "react";

const SearchBar = () => {
  return (
    <div
      className="bg-opacity-50 bg-cover bg-center h-80 w-full relative"
      style={{
        backgroundImage:
          'url("https://study.uq.edu.au/sites/default/files/styles/hero_xl/public/2022-05/hero-image-study-page.jpg?h=2087dbb7&itok=DZYugbQD")',
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="h-full w-full bg-black opacity-20"></div>
      </div>

      {/* Content inside the div */}
      <div className="text-center sm:my-4 md:mb-8 relative z-10">
        <div className="pt-8">
          <input
            type="text"
            className="border rounded-full border-orange-600 py-4 sm:w-[50%] md:[80%]"
            id=""
          />
          <button className="px-6 py-4 ml-6 sm:text-sm md:text-xl bg-orange-400 text-white font-semibold tracking-wide rounded-full ">
            Search
          </button>
        </div>
      </div>
      <div className="absolute text-white z-10 bottom-4 lg:bottom-8 lg:left-96">
        <h2 className="font-extrabold font-serif text-6xl text-white underline">
          WelCome To AdmitoPia
        </h2>
      </div>
    </div>
  );
};

export default SearchBar;

{
  /* <div className="text-center sm:my-4 md:mb-8">
  <div className="pt-8">
    <input
      type="text"
      className="border rounded-full border-orange-600 py-4 sm:w-[50%] md:[80%]"
      id=""
    />
    <button className="px-6 py-4 ml-6 sm:text-sm md:text-xl bg-orange-400 text-white font-semibold tracking-wide rounded-full ">
      Search
    </button>
  </div>
</div>; */
}
