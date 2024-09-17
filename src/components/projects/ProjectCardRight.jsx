import projectCard from "@/public/projects/projectCard.webp";
import Image from "next/image";

const ProjectCardRight = ({
  projectName,
  description,
  leftImage,
  rightImage,
}) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="relative py-12">
          <Image
            src={projectCard}
            alt=""
            className="w-11/12 h-11/12 ml-5 md:ml-12"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl md:text-5xl text-ai-blue-500 text-center font-montserrat">
              {projectName}
            </p>
          </div>
        </div>
        <div className="md:w-5/6 lg:w-1/2 h-auto">
          <p className="text-2xl md:text-3xl text-black pl-7 lg:pt-40 lg:px-16 font-hubbali">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-3 justify-evenly md:gap-x-1 gap-y-4">
        <Image src={leftImage} alt="Image 1" className="md:w-2/5 rounded-xl" />
        <Image src={rightImage} alt="Image 2" className="md:w-2/5 rounded-xl" />
      </div>
    </div>
  );
};

export default ProjectCardRight;
