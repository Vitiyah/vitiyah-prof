import Resume from "./vitiyah_resume.pdf";
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
        className="about-container h-screen w-screen flex flex-col relative bg-purple-300"
      >
        <div className="about-img h-[40%] w-full flex flex-col justify-start items-center bg-black">
          <h2 className="about-title mt-12 max-sm:text-center max-sm:mt-12 max-sm:text-[6rem] max-md:mt-4 max-lg:mt-4 max-xl:mt-4">
            ABOUT
          </h2>
          <p className="about-intro text-center w-[80%] mt-2 max-sm:text-xs max-sm:leading-5 max-md:text-xs max-md:leading-6 max-lg:text-xs max-lg:leading-6 max-xl:text-sm max-xl:leading-6">
            Hi, I am a self-taught creative frontend developer who enjoys
            building websites and designing them. I am an ex-data analyst who
            fell in love with web development. In future, I wish to continue my
            passion and explore back-end technologies as well. I am a
            self-driven person and have a keen eye for details
          </p>
        </div>
        <div className="about-text h-[60%] w-full bg-zinc-900 p-4 pl-8 pr-8 max-sm:p-4 max-md:p-12 max-lg:p-16 max-sm:w-full">
          <div className="about-resume flex items-center justify-between w-60 mt-8 max-sm:w-44">
            <h4 className="max-sm:text-sm">Download my</h4>
            <button className="resume-btn bg-purple-500 w-36 h-10 max-sm:w-24 rounded-full">
              <a
                href={Resume}
                download="Resume"
                className="text-lg max-sm:text-sm"
              >
                Resume <FontAwesomeIcon icon="download" />
              </a>
            </button>
          </div>
          <h3 className="mt-8 text-purple-500">MAIN SKILLS</h3>
          <div className="about-skills mt-8 grid grid-cols-5 gap-4 max-md:text-xs max-lg:text-xs  max-xl:text-sm max-2xl:text-sm max-sm:text-[9px]">
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
          <h3 className="mt-8 text-purple-500">TOOLS</h3>
          <div className="about-tools mt-12 pb-16 flex items-center list-none justify-between">
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
