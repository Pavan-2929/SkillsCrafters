import React, { useState } from "react";
import HomeImage from "../assets/HomeImage.png";
import Features from "../Components/features";

const Home = () => {
  return (
    <div>
      <div className="flex justify-around mt-10">
        <div className="w-full lg:w-1/2 p-6 rounded-lg font-semibold">
          <div>
            <h1 className="text-4xl mb-8">Welcome to SkillsCrafters,</h1>
          </div>
          
          <div className="mb-6">
            <p className="text-[1.1rem] mb-4">
              We provide the best IT courses with 24/7 instructor support, live
              one-to-one mentor sessions, and the most affordable prices.
            </p>
            <p className="text-[1.1rem] mb-4">
              Join our community of learners dedicated to acquiring valuable
              skills and advancing their careers in the ever-evolving IT
              landscape.
            </p>
            <p className="text-[1.1rem]">
              Ready to embark on your learning journey? Register now and unlock
              a world of opportunities!
            </p>
          </div>
          <div>
            <button className="px-8 py-2 bg-purple-700 text-white rounded-md mr-4 shadow-lg shadow-gray-500/50">
              Contact
            </button>
            <button className="px-8 py-2  text-[#CCC] rounded-md border-purple-700 border shadow-lg shadow-gray-500/50">
              Service
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <img
            src={HomeImage}
            alt="Register"
            className="w-full h-auto max-w-[30rem] rounded-lg"
          />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Home;
