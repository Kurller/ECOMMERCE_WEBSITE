import React, { useEffect } from "react";
import { TestimonialData } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";

import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {

  useEffect(() => {
    AOS.refresh(); // important for sliders
  }, []);

  return (
    <div className="mt-32 mb-12" id="testimonial">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Testimonies</p>
          <h1 className="text-3xl font-bold">What Our Customers Say</h1>
          <p className="text-xs text-gray-400">
            Real feedback from our trusted customers.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
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
          {TestimonialData.map((data) => (
            <SwiperSlide key={data.id}>
              <div
                data-aos="zoom-in"
                className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-white dark:bg-gray-900 mx-4"
              >
                <img
                  src={data.img}
                  alt={data.name}
                  className="rounded-full w-20 h-20 mx-auto dark:bg-gray-400 bg-primary/10 relative"
                />

                <p className="text-gray-500 text-sm text-center">
                  {data.text}
                </p>

                <h3 className="font-semibold text-center">
                  {data.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};
export default Testimonial