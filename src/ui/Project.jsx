import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { githubcover, aiimage } from "../assets";
import ProjectsLInks from "./ProjectsLInks";

const Project = () => {
  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/* Project One */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="https://github.com/dilpreetbajwa/coursera_meta-capstone-project"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={githubcover}
              alt="githubcover"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Coursera Meta Capstone Project</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
                Coursera Meta Capstone Project lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum {" "}
              {/* <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-designColor">stripe</span>. */}
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>React.js</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Expressjs</li>
              
            </ul>
            <ProjectsLInks link="https://github.com/dilpreetbajwa/coursera_meta-capstone-project" />
          </div>
        </div>
        {/* Project Two */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href=" "
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={aiimage}
              alt="aiimage"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <h3 className="text-2xl font-bold">Lorem Ipsum</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16">
              Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum{" "}
              <span className="text-designColor">Lorem Ipsum</span> Lorem Ipsum{" "}
              <span className="text-designColor">Lorem Ipsum</span> Lorem Ipsum
              Lorem Ipsum.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
            <li>React.js</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Expressjs</li>
            </ul>
            <ProjectsLInks link="" />
          </div>
        </div>
        {/* Project Three */}
       
      </div>
    </Container>
  );
};

export default Project;
