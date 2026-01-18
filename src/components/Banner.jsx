import React from "react";
import BannerImg from "../assets/Banner.jpg";
import { IoFastFood } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          {/* Image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px-10px-12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* Text + Features */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter sale up to 50% off
            </h1>

            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse a eligendi.
            </p>

            <div data-aos="fade-up" className="flex items-center gap-4">
              <GrSecure className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-violet-400" />
              <p>Quality Products</p>
            </div>

            <div data-aos="fade-up" className="flex items-center gap-4">
              <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
              <p>Fast Delivery</p>
            </div>

            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100 dark:bg-green-400" />
              <p>Easy payment Method</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100 dark:bg-yellow-400" />
              <p>Get Offer</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
