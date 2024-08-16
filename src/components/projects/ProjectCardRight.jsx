import projectCard from "@/public/images/projectCard.webp";
import Image from "next/image";

const ProjectCardRight = ({ projectName, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="relative py-12">
        <Image src={projectCard} alt="" className="w-8/12 h-auto ml-44" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-5xl text-ai-blue-500 text-center">{projectName}</p>
        </div>
      </div>
      <div className="w-96 h-auto mt-4 md:mt-0 md:mr-4 w-full max-w-xs">
        <p className="text-3xl md:text-3xl text-black py-14 pl-16">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCardRight;
