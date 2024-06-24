import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        {/* first part of the footer */}
        <div>
          <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">
            NextHire
          </h1>
          <p className="text-[14px] text-white text-opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            officiis quasi voluptatum reprehenderit quas nihil.
          </p>
          {/* social icons */}
          <div className="mt-[1.5rem] flex items-center space-x-3 ">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex flex-col items-center justify-center">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-sky-600 rounded-full flex flex-col items-center justify-center">
              <FaTwitter className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex flex-col items-center justify-center">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex flex-col items-center justify-center">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        {/* second part of the footer */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About US
          </h1>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Privacy
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Policy
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Application
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Candidates
          </p>
        </div>
        {/* third part of the footer */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Links
          </h1>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            All Jobs
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Job Details
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            How to Apply
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Resume
          </p>
        </div>
        {/* fourth part of the footer */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get in Touch
          </h1>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            +91 8920113810
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Privacy
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            sumitsharma.sp15@gmail.com
          </p>
          <p className="text-[15px] text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Gurugram, Haryana, India
          </p>
        </div>
      </div>
      <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">COPYRIGHT BY SUMIT SHARMA - 2024</h1>
    </div>
  );
};

export default Footer;
