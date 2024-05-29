"use client";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [clickedItem, setClickedItem] = useState<number | null>(null);

  const handleClick = (link: string) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };
  return (
    <div className="py-20">
      <h1 className="heading" id="button">
        Assorted resources <span className="text-purple">for developers</span>
      </h1>   
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
            key={item.title}
            onClick={() => handleClick(item.link)} //  when clicked, it goes to the website
                 >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                 <img
                  src={item.img}
                  alt={`${item.title} cover`}
                  className="relative w-full h-full object-cover lg:rounded-3xl"
                />
             </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2"
                style={{ marginTop: "-10px" }}>  
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mb-4"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                  marginTop: "-8px", // Changed margin-top from default to -8px to move up
                }}
              >
                
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple"
                    style={{ marginTop: "-5px" }} // Changed margin-top from default to -5px to move up
                    
                  >
                    Check out
                  </p>

                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
