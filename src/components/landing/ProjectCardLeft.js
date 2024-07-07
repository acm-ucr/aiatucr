import React from "react";
import Image from "next/image";

const ProjectCardLeft = ({ projectName, description }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
      {/* Text below the image on small screens */}
      <div className="mt-4 md:mt-0 md:mr-4 w-full max-w-xs">
        <p className="text-xl md:text-2xl text-black pt-14 pl-2">
          {description}
        </p>
      </div>

      {/* Image container */}
      <div className="relative w-full md:w-auto">
        <Image
          src="/images/projectCard.webp"
          alt=""
          width={833}
          height={436.31}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-ai-blue-500 text-center"
            style={{ fontSize: "clamp(1rem, 5vw, 2rem)" }}
          >
            {projectName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLeft;
