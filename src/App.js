import About from "./components/About";
import Education from "./components/Education";
import Experiences from "./components/Experiences/Experiences";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Project/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { mainBody, navBar, about, education, contact } from "./data/config";
import React from "react";

function App() {
  return (
    <div>
      {navBar.show && <Nav />}
      <Header
        key={mainBody.name}
        name={mainBody.name}
        message={mainBody.message}
        id="top"
      />

      <About
        key="resume"
        me={about.me}
        description={about.description}
        resume={about.resume}
      />

      <Education
        key="edu"
        logo={education.logo}
        school={education.school}
        location={education.location}
        program={education.program}
        start={education.startDate}
        grad={education.gradDate}
        id="education"
      />

      <Experiences key="exp" />
      <Projects />
      <Skills />
      <Contact 
        message={contact.message}
        email={contact.email}
        sendemail={contact.sendemail}
      />
      <Footer />
    </div>
  );
}

export default App;
