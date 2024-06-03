import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

interface Project {
  title: string;
  link: string;
  img: string;
  des: string;
}

const itemsPerPage = 6; // 2 columns x 3 rows

const RecentProjects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (link: string) => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < projects.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="py-20">
      <h1 className="heading" id="button">
        Assorted resources <span className="text-purple">for developers</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
        {currentProjects.map((item: Project) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
            key={item.title}
            onClick={() => handleClick(item.link)} // when clicked, it goes to the website
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <img
                  src={item.img}
                  alt={`${item.title} cover`}
                  className="relative w-full h-full object-cover lg:rounded-3xl"
                />
              </div>

              <h1
                className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2"
                style={{ marginTop: "-10px" }}
              >
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mb-4"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                  marginTop: "-8px", 
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex justify-center items-center">
                  <p
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                    style={{ marginTop: "-5px" }} 
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
      <div className="flex justify-center mt-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {Math.ceil(projects.length / itemsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage * itemsPerPage >= projects.length}
          className="px-4 py-2 mx-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentProjects;
