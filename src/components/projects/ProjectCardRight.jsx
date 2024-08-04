import projectCard from "@/public/images/projectCard.webp";
import Image from "next/image";

const ProjectCardRight = ({ projectName, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="relative w-full md:w-auto">
        <Image src={projectCard} alt="" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-3xl text-ai-blue-500 text-center">{projectName}</p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 w-full max-w-xs">
        <p className="text-xl md:text-2xl text-black pt-12">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCardRight;