import projectCard from "@/public/images/projectCard.webp";
import Image from "next/image";

const ProjectCardRight = ({ projectName, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="relative py-12">
        <Image
          src={projectCard}
          alt=""
          className="w-11/12 h-11/12 ml-5 md:ml-12"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl md:text-5xl text-ai-blue-500 text-center">
            {projectName}
          </p>
        </div>
      </div>
      <div className="md:w-1/2 h-auto">
        <p className="text-2xl md:text-3xl text-black pl-7 md:pt-40 md:px-16">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCardRight;
