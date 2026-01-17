import React, { useEffect } from "react";
import { productData } from "./constants";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";

import "swiper/css";

const Products = () => {

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="mt-32 mb-12" id="products">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {productData.map((data, index) => (
            <SwiperSlide key={data.id}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-duration="800"
                className="space-y-3 px-4"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
                />

                <h1 className="font-semibold text-center">
                  {data.title}
                </h1>

                <p className="text-sm text-gray-600 text-center">
                  {data.color}
                </p>

                <div className="flex justify-center gap-1">
                  {[...Array(Math.round(data.ratings))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View all products
          </button>
        </div>

      </div>
    </div>
  );
};

export default Products;
