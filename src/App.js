import "./App.css";
import "./FontAwesomeIcons";
import { Navbar } from "./Navbar.js";
import { Home } from "./Home.js";
import { About } from "./About.js";
import { Projects } from "./Projects.js";
import { Contact } from "./Contact.js";

const App = () => {
  return (
    <>
      <div className="inner-container h-full w-screen">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
