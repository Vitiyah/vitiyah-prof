import { HiOutlineArrowCircleRight } from "@react-icons/all-files/hi/HiOutlineArrowCircleRight";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="home-container flex flex-col items-center justify-center pb-0 px-16 bg-rose-500 sticky top-0"
      >
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
      </section>
    </>
  );
};
