import { profileImg } from "../assets";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa";

const About = () => {
  const textArray = [
    { title: "JavaScript (ES6+)", link: ""},
    { title: "Next js", link: "" },
    { title: "React js", link: "" },
    { title: "Node js", link: "" },
    { title: "TypeScript", link: "" },
    { title: "Express js", link: "" },
    { title: "MongoDB", link: "" },
    { title: "TailwindCSS", link: "" },
  ];
  return (
    <Container id="about" className="py-10 lg:py-24 flex flex-col gap-8">
      <SectionTitle titleNo="01" title="About me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Dilpreet Bajwa and I enjoy creating things that
            live on the internet.I am a highly motivated with over 5+ years of experience as a Full Stack Developer with
                expertise in designing and implementing scalable, high-performance web applications using
                a variety of front-end and back-end technologies. I am proficient in backend programming
                languages such as {" "}<span className="text-designColor"> Python, or Node.js </span> {" "}, utilizing their core principles and frameworks to build
                robust and scalable backend solutions.
          </p>
          <p>
                At present, I am working with Healthi AI, Canada as a Full Stack Developer where I Led the
                development of scalable web applications using both {" "}
                <span className="text-designColor">
                  MERN (MongoDB, Express, React,Node.js) and MEAN (MongoDB, Express, Angular, Node.js)
                </span> {" "}
                stacks, ensuring seamless
                integration between front-end and back-end systems. 
          </p>
          <p>
          I designed and implemented RESTful APIs to support both internal and external clients, ensuring secure, scalable, and efficient
          data exchanges.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {textArray.map((item) => (
              <a
                key={item?.title}
                href={item?.link}
                className="flex items-center gap-2 hover:text-white/80 duration-200 group"
              >
                <FaCode className="text-designColor/80 group-hover:text-designColor duration-200" />{" "}
                {item?.title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={profileImg}
                alt="profileImg"
                className="rounded-lg lg:w-full h-full object-cover"
              />
              {/* <div className="hidden lg:inline-block absolute w-full h-96 bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" /> */}
            </div>
          </div>
          {/* <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" /> */}
        </div>
      </div>
    </Container>
  );
};

export default About;
