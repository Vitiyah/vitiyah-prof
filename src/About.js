import Degree from "./Degree.pdf";
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
      <section id="about" className="about-container h-screen flex">
        <div className="about-img h-full w-1/3 flex items-center justify-center"></div>
        <div className="about-text h-full w-2/3 bg-zinc-900 p-20">
          <h2 className="title">ABOUT</h2>
          <div className="about-resume flex items-center justify-between w-60 mt-8">
            <h4>Download my</h4>
            <button className="resume-btn w-36 bg-rose-500 h-10">
              <a href={Degree} download="Degree" className="text-lg">
                Resume <FontAwesomeIcon icon="download" />
              </a>
            </button>
          </div>
          <p className="about-intro mt-8">
            I am a self-taught creative frontend developer and enjoy building
            websites and designing them. I am an ex-data analyst that got
            interested and want to build my career towards web development. In
            coming years, I wish to continue my passion and explore back-end
            technologies
          </p>
          <h3 className="mt-16 text-rose-500">MAIN SKILLS</h3>
          <div className="about-skills mt-8 grid grid-cols-3 gap-12">
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
          <h3 className="mt-16 text-rose-500">TOOLS</h3>
          <div className="about-tools mt-16 flex items-center list-none gap-12">
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
