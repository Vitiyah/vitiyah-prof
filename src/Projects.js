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
        className="relative project-container h-screen w-screen bg-purple-300"
      >
        <h2 className="work-title flex justify-center pt-24">My Work</h2>
        <div
          onClick={slideLeft}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-700 absolute top-[55%] translate-y-[-55%] left-4 z-[100] cursor-pointer opacity-70 hover:opacity-100"
        >
          <HiArrowLeft color="white" />
        </div>
        <div
          id="slider"
          className="projects-center w-full h-[500px] flex items-center flex-nowrap justify-between gap-4 px-8 mt-24 overflow-x-scroll scrollbar-hide scroll-smooth max-md:h-[400px]"
        >
          {data.map((item, id) => {
            return (
              <div
                key={id}
                className="min-w-[500px] h-full relative cursor-pointer rounded-[50%] max-md:min-w-[400px]"
              >
                <img
                  className="w-[100%] h-[100%] rounded-full grayscale"
                  src={item.image}
                  alt={item.title}
                />
                <div
                  className="overlay w-full h-full bg-white opacity-0 hover:opacity-90 absolute top-0 left-0 rounded-[50%] flex flex-col 
                items-center justify-center text-center p-8 transition-all ease-linear duration-200 text-black"
                >
                  <h1 className="text-[2rem] max-md:text-[1rem] font-bold text-purple-500">
                    {item.title}
                  </h1>
                  <p className="text-md pt-4">{item.description}</p>
                  <div className="language flex gap-4 mt-4">
                    {item.language.map((type, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-purple-500 pl-[0.8rem] pr-[0.8rem] rounded-full text-white"
                        >
                          {type}
                        </span>
                      );
                    })}
                  </div>
                  <div className="w-[60%] flex items-center justify-between text-purple-500 absolute bottom-24 text-md font-bold max-md:bottom-16">
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
          className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-700 absolute top-[55%] translate-y-[-55%] right-4 z-[100] cursor-pointer opacity-70 hover:opacity-100"
        >
          <HiArrowRight color="white" />
        </div>
      </section>
    </>
  );
};
