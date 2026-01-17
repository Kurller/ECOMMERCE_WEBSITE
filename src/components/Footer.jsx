import React from "react";
import { FooterLink, bannerImg } from "./constants";
import footerlogo from "../assets/footerlogo.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={bannerImg} className="text-white mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div data-aos="zoom-in"className="grid md:grid-cols-3 pb-44 pt-10">

          {/* Company */}
          <div className="py-8 px-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={footerlogo}
                alt="footer logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-2xl font-bold">Baffko</h1>
            </div>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, exercitationem error officiis perspiciatis debitis explicabo.
            </p>
          </div>

          {/* Links */}
          <div className="py-8 px-4">
            <h1 className="text-2xl font-bold mb-3">Important Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLink.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-blue-300"
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="py-8 px-4">
            <div className="flex items-center gap-3 mt-6">
              <FaInstagram className="text-3xl hover:text-pink-500 transition" />
              <FaFacebook className="text-3xl hover:text-blue-500 transition" />
              <FaTwitter className="text-3xl hover:text-sky-400 transition" />
              <FaLinkedin className="text-3xl hover:text-blue-600 transition" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Lagos, Nigeria</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobile />
                <p>+2348065425390</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Footer

