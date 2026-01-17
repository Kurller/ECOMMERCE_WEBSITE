import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOrderPopup(false)}
          ></div>

          {/* Modal */}
          <div className="relative bg-white dark:bg-gray-900 rounded shadow-md p-6 w-[300px] z-50">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black dark:text-white">
                Order Now
              </h2>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-black dark:text-white"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Form */}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 text-sm"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-4">
              <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full hover:scale-105 transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
