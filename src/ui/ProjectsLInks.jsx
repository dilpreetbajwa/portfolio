import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

const ProjectsLInks = ({ link }) => {
  return (
    <div className="text-2xl flex items-center gap-4">
      <a
        href="https://github.com/dilpreetbajwa"
        target="blank"
        className="hover:text-designColor duration-200"
      >
        <TbBrandGithub />
      </a>
      <a
        className="hover:text-designColor duration-300"
        href=""
        target="_blank"
      >
        <AiOutlineYoutube />
      </a>
      <a
        className="hover:text-designColor duration-300"
        href={link}
        target="_blank"
      >
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default ProjectsLInks;
