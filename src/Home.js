import { HiOutlineArrowCircleRight } from "@react-icons/all-files/hi/HiOutlineArrowCircleRight";

export const Home = () => {
  const backgroundMove = () => {
    const el = document.getElementById("background");
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;
    el.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      el.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });
  };

  return (
    <>
      <section
        id="home"
        className="home-container flex flex-col items-center justify-center pb-0 px-16"
      >
        <div id="background" onMouseMove={backgroundMove}>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <h1 className="big-heading max-[360px]:text-lg max-sm:text-2xl max-md:text-5xl max-lg:text-6xl max-xl:text-7xl">
            while(!(succeed = try() ));
          </h1>
          <button
            className="btn h-20 border-4 border-white p-4 w-56 mt-36 flex items-center justify-center gap-4"
            onClick={() => {
              window.location.href = "#projects";
            }}
          >
            View my work <HiOutlineArrowCircleRight className="icon" />
          </button>
        </div>
      </section>
    </>
  );
};
