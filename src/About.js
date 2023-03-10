import Resume from "./Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiJquery } from "@react-icons/all-files/si/SiJquery";
import { FaSass } from "@react-icons/all-files/fa/FaSass";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";

export const About = () => {
  return (
    <>
      <section
        id="about"
        className="about-container h-screen w-screen flex relative"
      >
        <div className="about-img h-full w-1/3 flex items-center justify-center max-sm:hidden"></div>
        <div className="about-text h-full w-2/3 bg-zinc-900 p-20 max-sm:p-4 max-md:p-12 max-lg:p-16 max-sm:w-full ">
          <h2 className="title max-sm:text-center max-sm:mt-12 max-md:mt-4 max-lg:mt-4 max-xl:mt-4">
            ABOUT
          </h2>
          <div className="about-resume flex items-center justify-between w-60 mt-12 max-sm:w-44 max-md:mt-8 max-lg:mt-8 max-xl:mt-8">
            <h4 className="max-sm:text-sm">Download my</h4>
            <button className="resume-btn w-36 bg-rose-500 h-10 max-sm:w-24">
              <a
                href={Resume}
                download="Resume"
                className="text-lg max-sm:text-sm"
              >
                Resume <FontAwesomeIcon icon="download" />
              </a>
            </button>
          </div>
          <p className="about-intro mt-8 max-sm:text-xs max-sm:leading-5 max-md:text-xs max-md:leading-6 max-lg:text-xs max-lg:leading-6 max-xl:text-sm max-xl:leading-6">
            I am a self-taught creative frontend developer and enjoy building
            websites and designing them. I am an ex-data analyst that got
            interested and want to build my career towards web development. In
            coming years, I wish to continue my passion and explore back-end
            technologies
          </p>
          <h3 className="mt-16 text-rose-500 max-sm:mt-8 max-md:mt-8 max-lg:mt-8 max-xl:mt-8">
            MAIN SKILLS
          </h3>
          <div className="about-skills mt-8 grid grid-cols-3 gap-12 max-sm:gap-12 max-md:gap-4 max-md:text-xs max-lg:gap-4 max-lg:text-xs max-xl:gap-4 max-xl:text-sm max-2xl:text-sm max-2xl:gap-2">
            <li>HTML, CSS, JavaScript</li>
            <li>Frontend Development</li>
            <li>UI/UX Design</li>
            <li>Responsive Web Design</li>
            <li>Strategic Thinking, Problem Solving</li>
            <li>Fast Learner</li>
            <li>CSS Framework</li>
            <li>JavaScript Libraries</li>
            <li>Git and GitHub</li>
          </div>
          <h3 className="mt-16 text-rose-500 max-sm:mt-8 max-md:mt-8 max-lg:mt-8 max-xl:mt-8 max-2xl:mt-8">
            TOOLS
          </h3>
          <div className="about-tools mt-16 flex items-center list-none gap-12 max-sm:gap-4 max-md:gap-4 max-xl:gap-4 max-2xl:gap-8">
            <li>
              <FaHtml5 className="tools-icon" />
            </li>
            <li>
              <FaCss3 className="tools-icon" />
            </li>
            <li>
              <SiJavascript className="tools-icon" />
            </li>
            <li>
              <SiBootstrap className="tools-icon" />
            </li>
            <li>
              <SiTailwindcss className="tools-icon" />
            </li>
            <li>
              <FaReact className="tools-icon" />
            </li>
            <li>
              <SiJquery className="tools-icon" />
            </li>
            <li>
              <FaSass className="tools-icon" />
            </li>
            <li>
              <FaGithub className="tools-icon" />
            </li>
            <li>
              <FaFigma className="tools-icon" />
            </li>
          </div>
        </div>
      </section>
    </>
  );
};
