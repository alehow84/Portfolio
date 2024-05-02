"use client";
import { useState, FC } from "react";
import { data } from "../../../public/data/projects.json";

const MultiCarouselCard: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  if (currentIndex > data.length - 3) {
    setCurrentIndex(0);
  }

  return (
    <div className="flex flex-row justify-center items-center mt-[6vh] pb-[6vh] ml-5 mr-5">
      <div className="w-10/12">
        <div className="flex gap-8">
          {data.slice(currentIndex, currentIndex + 3).map((project, index) => (
            <div
              key={index}
              className="max-w-md bg-teal-700 border-2 border-orange-200 rounded-xl shadow scale-100 hover:scale-110 transition duration-200 ease-in-out"
            >
              <div>
                <a href={project.repo} target="_blank">
                  <img
                    src={project.image}
                    alt={project.projectTitle}
                    className="rounded-t-xl w-[100vw]"
                  />

                  <div className="flex flex-col justify-center items-center">
                    <h5 className=" text-[1.5vw] text-sky-100 font-bold underline decoration-blue-400">
                      {project.projectTitle}
                    </h5>
                    <p className="text-center">{project.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 relative bottom-52 ">
          <button
            className="w-8 h-8 rounded-full bg-orange-400  relative right-16 hover:scale-110 scale-100"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="w-8 h-8 rounded-full bg-orange-400 relative left-16 hover:scale-110 scale-100"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiCarouselCard;
