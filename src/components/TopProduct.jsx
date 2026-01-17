import React, { useEffect } from "react";
import { productData } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";

import "swiper/css";

const TopProduct = () => {

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="mt-20 mb-20" id="topproduct">
      <div className="container">

        {/* Header section */}
        <div className="text-center mb-10">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>

          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>

          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {productData.map((data, index) => (
            <SwiperSlide key={data.id}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="
                  rounded-2xl bg-white dark:bg-gray-800
                  hover:bg-black/80 dark:hover:bg-primary
                  hover:text-white relative shadow-xl
                  transition-all duration-500
                  group max-w-[300px] p-6 mx-auto
                "
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="
                    max-w-[140px] block mx-auto
                    transform -translate-y-20
                    group-hover:scale-105
                    drop-shadow-md duration-300
                  "
                />

                <h2 className="text-center font-semibold mt-[-40px]">
                  {data.title}
                </h2>
                <p className="text-center font-sans">
                  {data.color}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default TopProduct;
