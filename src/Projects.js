import { data } from "./ProjectsData.js";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { HiArrowRight } from "@react-icons/all-files/hi/HiArrowRight";
import { HiArrowLeft } from "@react-icons/all-files/hi/HiArrowLeft";

export const Projects = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <section
        id="projects"
        className="project-container h-screen w-screen relative bg-slate-100"
      >
        <h2 className="title flex justify-center pt-16">PROJECTS</h2>
        <div
          onClick={slideLeft}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-500 absolute top-[50%] translate-y-[-50%] left-4 z-[100] cursor-pointer opacity-50 hover:opacity-100"
        >
          <HiArrowLeft />
        </div>
        <div
          id="slider"
          className="projects-center w-full h-[700px] flex items-center flex-nowrap justify-between gap-8 px-8 mt-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {data.map((item, id) => {
            return (
              <div
                key={id}
                className="min-w-[400px] h-[600px] relative cursor-pointer max-sm:min-w-[310px]"
              >
                <img
                  className="w-full h-full rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
                <div
                  className="overlay w-full h-full bg-black opacity-0 hover:opacity-80 absolute top-0 left-0 rounded-lg flex flex-col 
                items-center justify-center text-center p-8 transition-all ease-linear duration-200"
                >
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                  <p className="text-xs pt-4">{item.description}</p>
                  <div className="w-[80%] flex items-center justify-between text-rose-500 absolute bottom-10 text-md font-bold">
                    <a href={item.website} target="_blank" rel="noreferrer">
                      Website
                    </a>
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          onClick={slideRight}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-500 absolute top-[50%] translate-y-[-50%] right-4 z-[100] cursor-pointer opacity-50 hover:opacity-100"
        >
          <HiArrowRight />
        </div>
      </section>
    </>
  );
};
