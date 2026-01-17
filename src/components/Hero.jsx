import React from "react";
import { imageList } from "./constants";
import Slider from "react-slick"



const Hero = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 dark:text-white py-10" id="hero">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageList.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[250px] object-contain mb-4"
            />

            <h2 className="text-xl font-bold mb-2">
              {item.title}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.description}
            </p>

            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
