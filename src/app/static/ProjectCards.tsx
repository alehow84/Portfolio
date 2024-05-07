import { data } from "../../../public/data/projects.json";

export default function ProjectCards() {
  return (
    <div className="flex justify-center items-center mt-[6vh] pb-[6vh] ml-5 mr-5">
      <div className="w-10/12">
        <div className="flex flex-wrap justify-center gap-16">
          {data.map((project, index) => (
            <div
              key={index}
              className="max-w-md bg-pink-600 border-2 border-pink-800 rounded-xl shadow scale-100 hover:scale-110 transition duration-200 ease-in-out"
            >
              <div>
                <a href={project.repo} target="_blank">
                  <img
                    src={project.image}
                    alt={`thumbnail of project ${project.projectTitle}`}
                    className="rounded-t-xl w-[100vw]"
                  />

                  <div className="flex flex-col justify-center items-center">
                    <h3 className=" text-[1.5vw] font-bold underline decoration-double decoration-pink-300">
                      {project.projectTitle}
                    </h3>

                    <p className="text-center text-white text-[1.25vw] m-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap">
                    {project.tech.map((tech, index) => (
                      <div
                        key={index}
                        className="text-[1vw] text-white bg-pink-800 bg-opacity-75 rounded-lg p-1 m-1.5 shadow-md"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
