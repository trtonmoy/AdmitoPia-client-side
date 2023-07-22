import React from "react";
import img1 from "../../../../public/img1.jpg";
import img2 from "../../../../public/img2.jpg";
import img3 from "../../../../public/img3.jpg";
import img4 from "../../../../public/img4.jpg";
import img5 from "../../../../public/img5.jpg";
import img6 from "../../../../public/img6.jpg";
import img7 from "../../../../public/img7.png";

const ImageGallery = () => {
  return (
    <div className="mb-8">
      <h3 className="text-4xl font-bold text-orange-600 bg-teal-300 rounded-b-lg mb-1 py-2 mx-8 mt-8 text-center">
        Welcome to our Gallery Section
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:px-40 lg:py-8 bg-teal-500">
        <figure className="col-span-2">
          <img className="w-full h-[450px]" src={img1} alt="" />
        </figure>
        <figure>
          <img className="h-[450px]" src={img2} alt="" />
        </figure>

        <figure>
          <img className="w-[500px] h-[450px]" src={img3} alt="" />
        </figure>
        <figure>
          <img className="w-[500px] h-[450px]" src={img6} alt="" />
        </figure>
        <figure>
          <img className="w-[500px] h-[450px]" src={img5} alt="" />
        </figure>

        <figure>
          <img className="h-[450px]" src={img7} alt="" />
        </figure>
        <figure className="col-span-2">
          <img className="w-full h-[450px]" src={img4} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ImageGallery;
