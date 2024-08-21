import projectCard from "@/public/images/projectCard.webp";
import Image from "next/image";

const ProjectCardLeft = ({ projectName, description }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
      <div className="w-1/2 h-auto">
        <p className="text-3xl md:text-3xl text-black pt-40 px-16">
          {description}
        </p>
      </div>
      <div className="relative py-12">
        <Image src={projectCard} alt="" className="w-11/12 h-11/12 ml-12" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-5xl text-ai-blue-500 text-center">{projectName}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLeft;
