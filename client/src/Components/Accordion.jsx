// src/components/Accordion.js

import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between p-4 bg-[#414141] cursor-pointer rounded-md transition duration-300 ease-in-out"
            onClick={() => handleClick(index)}
          >
            <div className="text-white font-semibold">{item.title}</div>
            <div className="text-white text-2xl">
              {activeIndex === index ? "−" : "+"}
            </div>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-[#333] rounded-b-md">
              <p className="text-white">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
