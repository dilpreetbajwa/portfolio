import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const Experience = () => {
  const [workHealthiAi, setworkHealthiAi] = useState(true);
  const [workSeraphic, setworkSeraphic] = useState(false);
  const [workRVTech, setWorkRVTech] = useState(false);
  const [workShinedesign, setWorkShinedesign] = useState(false);

  const handleHealthiAi = () => {
    setworkHealthiAi(true);
    setworkSeraphic(false);
    setWorkRVTech(false);
    setWorkShinedesign(false);
  };

  const handleSeraphic = () => {
    setworkHealthiAi(false);
    setworkSeraphic(true);
    setWorkRVTech(false);
    setWorkShinedesign(false);
  };

  const handleRVTech = () => {
    setworkHealthiAi(false);
    setworkSeraphic(false);
    setWorkRVTech(true);
    setWorkShinedesign(false);
  };
  const handleShinedesign = () => {
    setworkHealthiAi(false);
    setworkSeraphic(false);
    setWorkRVTech(false);
    setWorkShinedesign(true);
  };
  // const handleAmazon = () => {
  //   setworkHealthiAi(false);
  //   setworkSeraphic(false);
  //   setWorkRVTech(false);
  //   setWorkShinedesign(false);
  // };
  return (
    <Container
      id="experience"
      className="max-w-3xl mx-auto py-10 lg:py-24 gap-16"
    >
      <SectionTitle title="Where I have worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        {/* Button setup */}
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleHealthiAi}
            className={`${
              workHealthiAi
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Healthi AI
          </li>
          <li
            onClick={handleSeraphic}
            className={`${
              workSeraphic
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Seraphic
          </li>
          <li
            onClick={handleRVTech}
            className={`${
              workRVTech
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            RV Technologies
          </li>
          <li
            onClick={handleShinedesign}
            className={`${
              workShinedesign
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Shinedesign
          </li>
          {/* <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Amazon
          </li> */}
        </ul>
        {/* Content */}
        {workHealthiAi && (
          <WorkCard
            jobTitle="Full Stack Developer"
            jobTag="@Healthi (Health Innovators) AI"
            date="May 2022 - present"
            detailsOne=" Led the development of scalable web applications using both MERN (MongoDB, Express, React, Node.js) and
MEAN (MongoDB, Express, Angular, Node.js) stacks, ensuring seamless integration between front-end and
back-end systems"
            detailsTwo="Designed and implemented RESTful APIs to support both internal and external clients, ensuring secure,
scalable, and efficient data exchanges"
            detailsThree="Reduced API response time by 40% by optimizing SQL queries and integrating Redis for efficient caching,
enhancing application performance under heavy traffic"
            detailsFour="Set up CI/CD pipelines using Jenkins, Docker, and Kubernetes to automate deployment, reduce manual errors,
and shorten the release cycle"
          />
        )}
        {workSeraphic && (
          <WorkCard
            jobTitle="Software Developer"
            jobTag="@Seraphic"
            date="Feb 2121 - Oct 2021"
            detailsOne="Developed full-stack applications using Node.js, Laravel, and MySQL, ensuring robust and scalable architecture
for various web applications."
            detailsTwo="Implemented secure authentication using Passport.js, effectively reducing unauthorized access and improving
overall security."
            detailsThree="Designed and deployed web applications using AWS services like EC2 for scalable compute resources and S3
for efficient storage, ensuring seamless deployment and high availability."
          />
        )}
        {workRVTech && (
          <WorkCard
            jobTitle="PHP Developer"
            jobTag="@RV Technologies"
            date="May 2019 - Dec 2020"
            detailsOne="Coordinated multiple projects, developing web-enabled applications and RESTful APIs, ensuring efficient
communication between client and server-side systems."
            detailsTwo="Implemented social media logins (e.g., Google, Facebook) and payment gateways (e.g., Stripe, PayPal) to
provide users with secure, convenient authentication and payment options."
            detailsThree="Managed and optimized SQL and MongoDB queries for data manipulation, ensuring fast retrieval and improved
database performance."
          />
        )}
        {workShinedesign && (
          <WorkCard
            jobTitle="Software Developer"
            jobTag="@Shine Design"
            date="Dec 2017 - Apr 2019"
            detailsOne="Developed core PHP applications while learning and implementing the MVC architecture, which enhanced code
organization and maintainability."
            detailsTwo="Gained hands-on experience in PHP frameworks like Laravel, leveraging its features to build scalable and
secure web applications."
            detailsThree="Created a project management web app in Node.js, focusing on improving user experience and delivering
efficient task tracking and collaboration features."
          />
        )}
        {/* {workAmazon && (
          <WorkCard
            jobTitle="web Design"
            jobTag="@Amazon"
            date="Jan 2020 - Dec 2020"
            detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
            detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
            accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
            detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
          />
        )} */}
      </div>
    </Container>
  );
};

export default Experience;
